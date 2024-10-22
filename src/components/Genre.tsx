import React from "react";

const Genre = ({ film }) => {
    return (
        <div className="flex justify-between items-center bg-gray-900 text-white p-4">

            <div className="flex ">
                {film?.genre_id?.map((genre) => (
                    <span key={genre._id} className="bg-gray-800 px-2 py-1 rounded">
                        {genre.genre}
                    </span>
                ))}
            </div>

        </div>
    );
};

export default Genre;
