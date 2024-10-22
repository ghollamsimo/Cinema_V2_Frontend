import React, { useState } from 'react';
import { IoPlay } from "react-icons/io5";

const MovieBanner: React.FC<{ film: any }> = ({ film }) => {
    const [isVideoVisible, setVideoVisible] = useState(false);
    const [isPopupVisible, setPopupVisible] = useState(false);

    const isLoggedIn = () => {
        const token = localStorage.getItem("token");
        return !!token;
    };

    const handlePlayClick = () => {
        if (isLoggedIn()) {
            setVideoVisible(true);
        } else {
            setPopupVisible(true);
        }
    };

    const closePopup = () => {
        setPopupVisible(false);
    };

    return (
        <div className="relative mt-28 m-12 bg-black text-white h-96 flex justify-center items-center">
            <img
                src={`${film?.image}`}
                alt="Movie Banner"
                className={`object-contain w-full h-full ${isVideoVisible ? 'hidden' : 'opacity-50'}`}
                style={{ zIndex: 1 }}
            />
            <div className="absolute text-center" style={{ zIndex: 2 }}>
                <button
                    className="bg-transparent border-4 border-white rounded-full p-4 hover:bg-white hover:text-black transition"
                    onClick={handlePlayClick}
                >
                    <IoPlay />
                </button>
            </div>

            {isVideoVisible && film?.video && (
                <video
                    controls
                    className="absolute w-full h-full object-cover"
                    muted
                    style={{ zIndex: 3 }}
                    src={`${film?.video}`}
                />
            )}

            {isPopupVisible && (
                <div
                    className="fixed text-white inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
                    onClick={closePopup}
                >
                    <div className="bg-[#111827] p-6 rounded-lg text-center shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Oops! You need to be subscribed to watch this movie.</h2>
                        <p>Please log in to access this content.</p>
                        <button
                            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                            onClick={closePopup}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MovieBanner;
