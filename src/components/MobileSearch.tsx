import {IoFilter} from "react-icons/io5";
import {CiSearch} from "react-icons/ci";
import React from "react";

export const MobileSearch : React.FC = () => {
    return(
        <>
            <div className="lg:hidden p-4 sm:sticky flex w-full">
                <label
                    className="w-full cursor-pointer transition-all bg-transparent min-w-sm max-w-4xl flex flex-col-2 md:flex-row items-center justify-center border border-gray-500 py-2 px-2 rounded-2xl shadow-2xl focus-within:border-gray-300"
                    htmlFor="search-bar"
                >
                    <button
                        className="w-fit md:w-auto px-3 bg-transparent text-white active:scale-95 duration-100 text-2xl rounded-full transition-all disabled:opacity-70">
                        <div className="relative">
                            <div
                                className="flex items-center justify-center h-3 w-full absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
                                <svg
                                    className="opacity-0 animate-spin w-full h-full"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                            strokeWidth="4"/>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    />
                                </svg>
                            </div>

                            <div className="flex items-center transition-all opacity-1">
                <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                  <IoFilter/>
                </span>
                            </div>
                        </div>
                    </button>

                    <div className="px-2 z-10 py-2 w-full rounded-md flex-1 outline-none bg-transparent text-gray-300">
                        your keyword here
                    </div>

                    <button
                        className="w-fit md:w-auto px-3 py-3 bg-transparent border-gray-500 text-white active:scale-95 duration-100 border rounded-full transition-all disabled:opacity-70">
                        <div className="relative">
                            <div
                                className="flex items-center justify-center h-3 w-full absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
                                <svg
                                    className="opacity-0 animate-spin w-full h-full"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                            strokeWidth="4"/>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    />
                                </svg>
                            </div>

                            <div className="flex items-center transition-all opacity-1">
                <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                  <CiSearch/>
                </span>
                            </div>
                        </div>
                    </button>
                </label>
            </div>
        </>
    )
}