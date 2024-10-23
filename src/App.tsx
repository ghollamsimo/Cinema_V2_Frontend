import './App.css';
import {Route, Routes, Navigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Login from "./auth/Login.tsx";
import HomePage from "./pages/HomePage.tsx";
import FilmPage from "./pages/FilmPage.tsx";
import {Notfound} from "./pages/Notfound.tsx";
import {useDispatch} from "react-redux";
import {jwtDecode} from "jwt-decode";
import {show} from "./redux/slices/AuthSlice.ts";

function App() {
    const [user_id, setUser_id] = useState<string | null>(null);
    const [user_role, setUser_role] = useState<string | null>(null);  // Store user role
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    const isLoggedIn = () => {
        const token = localStorage.getItem("token");
        return !!token;
    };

    const decodeToken = () => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                return jwtDecode(token);
            } catch (error) {
                console.error("Failed to decode token:", error);
            }
        }
        return null;
    };

    useEffect(() => {
        if (isLoggedIn()) {
            const decodedToken = decodeToken();
            if (decodedToken) {
                console.log("Decoded token structure:", decodedToken);

                const userId = decodedToken?._id;
                const userRole = decodedToken?.roles[0];

                if (!userId || !userRole) {
                    console.error("No user ID or role found in the token.");
                    return;
                }

                setUser_id(userId);
                setUser_role(userRole);
                dispatch(show(userId));
            }
        }
        setLoading(false);  // Set loading to false once token is processed
    }, [dispatch]);

    // Middleware-like Protected Route Component
    const ProtectedRoute = ({role, children}: {role: string, children: JSX.Element}) => {
        // If still loading, don't render anything yet
        if (loading) {
            return <div>Loading...</div>;  // You can add a better loading spinner here if needed
        }
        // Redirect to login if not logged in or role mismatch
        if (!isLoggedIn() || user_role !== role) {
            return <Navigate to="/login" replace />;
        }
        return children;
    };

    return (
        <>
            <Routes>
                {/* Protected routes for "Client" */}
                <Route path="/" element={
                    <ProtectedRoute role="Client">
                        <HomePage userId={user_id} />
                    </ProtectedRoute>
                } />

                <Route path="films/:filmId" element={
                    <ProtectedRoute role="Client">
                        <FilmPage />
                    </ProtectedRoute>
                } />

                {/* Protected route for "Admin" */}
                <Route path="/admin" element={
                    <ProtectedRoute role="Admin">
                        <div>Admin Page</div>  {/* Replace with your actual AdminPage component */}
                    </ProtectedRoute>
                } />

                {/* Public routes */}
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Notfound />} />
            </Routes>
        </>
    );
}

export default App;
