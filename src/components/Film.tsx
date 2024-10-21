import React, {useEffect, useState} from "react";
import { ClipLoader } from "react-spinners";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {useNavigate} from "react-router-dom";
import Api from "../api/Api.ts";

const Film: React.FC<{ filmList: any[], errorMessage: string, loading: boolean }> = ({ filmList, errorMessage, loading }) => {
    const navigate = useNavigate();

    const handleFilmClick = (filmId: string) => {
        navigate(`/films/${filmId}`);
    };
    return (
        <div className={"m-12"}>
            <h1 className={"mb-11"}>Trending Films</h1>
            <div className="flex flex-wrap gap-4">
                {loading ? (
                    <div className="flex justify-center items-center h-screen">
                        <ClipLoader color="#ffffff"/>
                    </div>
                ) : (
                    <>
                        {filmList && filmList.length > 0 ? (
                            filmList.map((film) => (
                                <div key={film._id} onClick={() => handleFilmClick(film._id)} >
                                    <div
                                        className="relative bg-black w-48 h-96 flex flex-col items-center shadow-lg overflow-hidden group">
                                        <div
                                            className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300 z-10"/>
                                        <img
                                            src={`http://localhost:8080/${film?.image}`}
                                            alt={film.name}
                                            className="w-full h-full object-cover z-0 transition-transform duration-500 transform group-hover:scale-105"
                                        />
                                    </div>
                                    <div
                                        className="inset-0 flex items-center justify-center transform transition-all duration-300 opacity-0 group-hover:opacity-100 z-20">
                                        <p className="text-white text-lg font-bold text-center rotate-90 group-hover:rotate-0 transition-transform">
                                            {film.name}
                                        </p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center">No films available.</div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default Film;
