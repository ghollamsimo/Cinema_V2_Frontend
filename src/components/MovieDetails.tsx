import React, {useState} from "react";
import {MovieDetailsProps as MovieDetailsProp} from '../constant.ts'

const MovieDetails: React.FC<MovieDetailsProp> = ({ film }) => {
    const [rating, setRating] = useState<number>(0);
    return (
        <div className="flex flex-col md:flex-row p-6 text-white bg-gray-900">
            <div className="w-full md:w-2/3 md:mr-6">
                <div className='flex align-middle items-center justify-between'>
                    <h1 className="text-4xl font-bold">{film.name}</h1>
                    <div className="flex items-center space-x-4">
                        {[1, 2, 3, 4, 5].map((star) => {
                            return (
                                <span
                                    key={star}
                                    className='star'
                                    style={{
                                        cursor: 'pointer',
                                        color: rating >= star ? 'gold' : 'gray',
                                        fontSize: '35px',
                                    }}
                                    onClick={() => {
                                        setRating(star);
                                    }}
                                >
                                    ★
                                </span>
                            );
                        })}
                    </div>
                </div>
                <p className="text-lg my-4">{film.description}</p>
            </div>

            <div className="w-full md:w-1/3 mt-6 md:mt-0">
                <div className="bg-gray-800 p-4 rounded-md">
                    <h2 className="text-xl font-bold">Tech Details</h2>
                    <p>Type: Movie</p>
                    <p>Status: Released</p>
                    <p>Genre: {film.genres?.length ? film.genres.join(", ") : "N/A"}</p>
                    <p>Duration: {film.duration} minutes</p>
                    <p>Cast: {film.cast?.length ? film.cast.join(", ") : "N/A"}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
