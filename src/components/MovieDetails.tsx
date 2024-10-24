import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeRate } from "../redux/slices/RatingSlice.ts";
import { MovieDetailsProps as MovieDetailsProp } from '../constant.ts';
import PopupError from "./PopupError.tsx";

const MovieDetails: React.FC<MovieDetailsProp> = ({ film }) => {
    const [isPopupVisible, setPopupVisible] = useState(false);

    const token = localStorage.getItem('token');
    const dispatch = useDispatch();
    const { loading, errorMessage } = useSelector((state: any) => state.rating);

    const existingRating = film?.userRatings?.find((rating) => rating?.clientName === token)?.rate || 0;

    const [rating, setRating] = useState<number>(existingRating);
    const [isRated, setIsRated] = useState<boolean>(!!existingRating);

    useEffect(() => {
        if (existingRating) {
            setRating(existingRating);
            setIsRated(true);
        }
    }, [existingRating]);

    const handleRating = (star: number) => {
        if (token){
        if (isRated) return;
        setRating(star);
        dispatch(storeRate({ rate: star, film_id: film._id }));
        setIsRated(true);
        }else {
            setPopupVisible(true)
        }
    };

    return (
        <>
        <div className="flex p-6 text-white bg-gray-900">
            <div className="w-full md:mr-6">
                <div className="flex align-middle items-center justify-between">
                    <h1 className="text-4xl font-bold">{film.name}</h1>
                    <div className="flex items-center space-x-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span
                                key={star}
                                className="star"
                                style={{
                                    cursor: isRated ? "not-allowed" : "pointer",
                                    color: rating >= star ? "gold" : "gray",
                                    fontSize: "35px",
                                }}
                                onClick={() => handleRating(star)}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                    {loading && <p>Submitting your rating...</p>}
                    {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                </div>
                <p className="text-lg my-4">{film.description}</p>
            </div>
        </div>
            {isPopupVisible && <PopupError description={'Oops! You need to be subscribed to rate.'} setOpenModal={setPopupVisible}/>}

        </>
    );
};

export default MovieDetails;
