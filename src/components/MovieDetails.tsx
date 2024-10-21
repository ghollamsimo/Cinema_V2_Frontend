import React from "react";

interface MovieDetailsProps {
    film: {
        name: string;
        description: string;
        director: string;
        releaseDate: string;
        duration: number;
        genres?: string[];
        cast?: string[];
        imdbRating?: string;
        rottenTomatoesRating?: string;
    };
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ film }) => {
    return (
        <div className="flex flex-col md:flex-row p-6 text-white bg-gray-900">
            <div className="w-full md:w-2/3">
                <h1 className="text-4xl font-bold">{film.name}</h1>
                <p className="text-gray-400 my-2">{film.director} | {new Date(film.releaseDate).toLocaleDateString()}</p>
                <p className="text-lg my-4">{film.description}</p>

                <div className="flex items-center space-x-4">
                    <div>IMDb Rating: <span className="font-bold">{film.imdbRating || "N/A"}</span></div>
                    <div>Rotten Tomatoes: <span className="font-bold">{film.rottenTomatoesRating || "N/A"}</span></div>
                    <div>Your Rating: <input type="number" max="10" className="w-12 ml-2 p-1 bg-gray-800 text-white border border-gray-700" /></div>
                </div>
            </div>

            <div className="w-full md:w-1/3 mt-6 md:mt-0">
                <div className="bg-gray-800 p-4 rounded-md">
                    <h2 className="text-xl font-bold">Tech Details</h2>
                    <p>Type: Movie</p>
                    <p>Date: {new Date(film.releaseDate).toLocaleDateString()}</p>
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
