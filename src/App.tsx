import './App.css';
import {Route, Routes, Navigate} from "react-router-dom";
import React, {Fragment, useEffect, useState} from "react";
import Login from "./auth/Login.tsx";
import HomePage from "./pages/HomePage.tsx";
import FilmPage from "./pages/FilmPage.tsx";
import {Notfound} from "./pages/Notfound.tsx";
import {useDispatch} from "react-redux";
import {jwtDecode} from "jwt-decode";
import {show} from "./redux/slices/AuthSlice.ts";
import Header from "./components/Header.tsx";
import Register from "./auth/Register.tsx";

function App() {
    const [user_id, setUser_id] = useState<string | null>(null);
    const [user_role, setUser_role] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const excludedRoutes = [ '/admin' , '/login', '/register', '*'];
    const shouldDisplayNavbar = !excludedRoutes.some(route => location.pathname.includes(route));

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
        setLoading(false);
    }, [dispatch]);


    const ProtectedRoute = ({role, children}: {role: string, children: JSX.Element}) => {

        if (loading) {
            return <div>Loading...</div>;
        }

        if (!isLoggedIn() || user_role !== role) {
            return <Navigate to="/login" replace />;
        }
        return children;
    };

    return (
        <>
            {shouldDisplayNavbar && (
                <Fragment>
                    <Header userid={user_id}/>
                </Fragment>
            )}
            <Routes>
                <Route path="/" element={
                    <ProtectedRoute role="Client">
                        <HomePage />
                    </ProtectedRoute>
                } />

                <Route path="films/:filmId" element={
                    <ProtectedRoute role="Client">
                        <FilmPage />
                    </ProtectedRoute>
                } />

                <Route path="/admin" element={
                    <ProtectedRoute role="Admin">
                        <div>Admin Page</div>
                    </ProtectedRoute>
                } />

                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<Notfound />} />
            </Routes>
        </>
    );
}

export default App;
