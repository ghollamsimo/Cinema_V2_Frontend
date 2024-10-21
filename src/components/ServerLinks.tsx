import React from "react";

const ServerLinks = () => {
    return (
        <div className="flex justify-between items-center bg-gray-900 text-white p-4">
            <div className="flex space-x-2">
                <button className="bg-yellow-500 text-black px-4 py-2 rounded">Server 1</button>
                <button className="bg-yellow-500 text-black px-4 py-2 rounded">Server 2</button>
                <button className="bg-yellow-500 text-black px-4 py-2 rounded">Server 3</button>
            </div>
            <button className="bg-gray-800 px-4 py-2 rounded border border-yellow-500">Download Now</button>
        </div>
    );
};


export default ServerLinks