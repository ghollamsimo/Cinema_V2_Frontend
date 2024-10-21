import React from 'react';

const MovieBanner: React.FC = ({ film }) => {
    return (
        <div className="relative mt-28 m-12 bg-black text-white h-96 flex justify-center items-center">
            <img
                src={`http://localhost:8080/${film?.image}`}
                alt="Movie Banner"
                className="object-contain w-full h-full opacity-50"
            />
            <div className="absolute text-center">
                <button className="bg-transparent border-4 border-white rounded-full p-4 hover:bg-white hover:text-black transition">
                    <i className="fas fa-play text-4xl"></i>
                </button>
            </div>
        </div>
    );
};

export default MovieBanner;
