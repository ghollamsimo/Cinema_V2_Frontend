import React, { useState } from 'react';
import { IoPlay } from "react-icons/io5";
import PopupError from "./PopupError.tsx";

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



    return (
        <>

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


        </div>
            {isPopupVisible && <PopupError description={'Oops! You need to be subscribed to watch this movie.'} setOpenModal={setPopupVisible}/>}
        </>
    );
};

export default MovieBanner;
