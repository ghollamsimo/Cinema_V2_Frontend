import { Link } from "react-router-dom";
import "../style/Header.scss";
import React from "react";

const Header: React.FC = () => {

    return (
        <header className="header bg-[#111827] z-50 fixed">
            <nav className=" header__content__nav text-white py-3 px-4 flex items-center">
                <Link to="/" className="header__content__logo md:flex hidden font-extrabold font-serif">
                    Cinema
                </Link>
                <div className="flex items-center">
                    <ul className="flex items-center space-x-4">
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li className="relative z-20">
                            hh
                        </li>
                        <li className="relative">
                            <Link to={'/login'}>
hhhh                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </header>
    );
};

export default Header;