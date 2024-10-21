import React from "react";
import Film from "./Film.tsx";

const Filter: React.FC = () => {
    const filterOptions = [
        { label: "ALL / すべて" },
        { label: "1940s" },
        { label: "1950s" },
        { label: "1960s" },
        { label: "1970s" },
        { label: "1980s" },
        { label: "1990 – 93" }
    ];

    return (
        <>
        <div className="w-full max-w-4xl mx-auto p-16">
            <div className="flex justify-center  p-2">
                {filterOptions.map((option, index) => (
                    <div
                        key={index}
                        className="border px-4 py-1 text-white  cursor-pointer"
                    >
                        {option.label}
                    </div>
                ))}
            </div>

        </div>
        </>
    );
}

export default Filter;
