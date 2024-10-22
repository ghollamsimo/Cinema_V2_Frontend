import React from "react";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react"; // Make sure to import Swiper components
import "swiper/swiper-bundle.css"; // Import Swiper styles

const Film: React.FC<{ filmList: any[], errorMessage: string, loading: boolean }> = ({ filmList, errorMessage, loading }) => {
    const navigate = useNavigate();

    const handleFilmClick = (filmId: string) => {
        navigate(`/films/${filmId}`);
    };

    return (
        <div className="m-12">
            <h1 className="mb-12 text-2xl">Trending Films</h1>
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <ClipLoader color="#ffffff" />
                </div>
            ) : (
                <>
                    {errorMessage && <div className="text-red-500 text-center">{errorMessage}</div>}
                    {filmList && filmList.length > 0 ? (
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                            }}
                        >
                            {filmList.map((film) => (
                                <SwiperSlide key={film?._id} onClick={() => handleFilmClick(film?._id)}>
                                    <div className="relative rounded-lg overflow-hidden cursor-pointer">
                                        <img
                                            src={`${film?.image}`}
                                            alt={film.name}
                                            className="w-full h-60 object-cover"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#0D1117] to-transparent text-white">
                                            <h3 className="text-xl font-semibold">{film.name}</h3>
                                            <p className="mt-1 text-sm">Duration: {film.duration} min</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        <div className="text-center">No films available.</div>
                    )}
                </>
            )}
        </div>
    );
};

export default Film;
