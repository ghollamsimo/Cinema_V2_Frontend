import {CiSearch} from "react-icons/ci";
import React, {useState} from "react";

export const Search : React.FC = () => {
    const [isSearchBarOpen, setIsSearchBarOpen] = useState<boolean>(false);

    const toggleSearchBar = (): void => {
        setIsSearchBarOpen((prev) => !prev);
    };
    return(
        <>
            <button
                onClick={toggleSearchBar}
                className="text-2xl md:text-[28px] w-12 h-12 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-gray-700 transition-all focus:outline-none flex items-center justify-center"
                type="button"
            >
                <CiSearch />
            </button>

            {isSearchBarOpen && (
                <div
                    className="right-0 z-50 absolute w-screen max-w-sm mt-2 opacity-100 translate-y-0"
                    tabIndex={-1}
                >
                    <input
                        type="search"
                        className="block w-full outline-0 bg-white dark:border-neutral-700 dark:bg-[#1F2937] rounded-2xl text-sm font-normal h-11 px-4 py-3"
                        placeholder="Type and Search"
                    />
                </div>
            )}
        </>
    )
}