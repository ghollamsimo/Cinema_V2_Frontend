import {Link} from "react-router-dom";
import "../style/Navbar.scss";
import React, {useEffect, useState} from "react";
import {Search} from "./Search.tsx";
import {MobileSearch} from "./MobileSearch.tsx";
import {jwtDecode} from "jwt-decode";
import {useDispatch} from "react-redux";
import {show} from "../redux/slices/AuthSlice.ts"; // Import the 'show' action

const Header: React.FC = () => {
    const [userName, setUserName] = useState<string | null>(null);
    const dispatch = useDispatch();

    // Function to check if the user is logged in
    const isLoggedIn = () => {
        const token = localStorage.getItem("token");
        return !!token;
    };

    // Function to decode the JWT token and get the user info
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

                const userId = decodedToken.clientId || decodedToken.sub;

                if (!userId) {
                    console.error("No user ID found in the token.");
                    return;
                }


                setUserName(decodedToken.name || decodedToken.username || decodedToken.sub);


                dispatch(show(userId))

            }
        }
    }, [dispatch]);
    console.log('hahahaha', userName)
    return (
        <header className="header bg-[#111827] z-50 fixed">
            <nav className="header__content__nav text-white py-3 px-4 flex items-center">
                <Link to="/" className="header__content__logo md:flex hidden font-extrabold font-serif">
                    Cinema
                </Link>
                <div className="flex items-center">
                    <ul className="flex items-center space-x-4">
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li className="relative z-20">
                            <Search />
                        </li>

                        {/* Conditionally render user's name or login button */}
                        {isLoggedIn() ? (
                            <li className="relative">
                                <span className="text-white">Welcome, {userName || "User"}</span>
                            </li>
                        ) : (
                            <li className="relative">
                                <Link to="/login">
                                    <button className="bg-white text-black py-2 px-8 rounded-lg hover:bg-gray-100 transition duration-300 ease-in-out shadow-lg">
                                        Login
                                    </button>
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </nav>

            <MobileSearch />
        </header>
    );
};

export default Header;
