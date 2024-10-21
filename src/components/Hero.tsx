import React from "react";
import { Hero as HeroData } from "../constant.ts";

export const Hero: React.FC = () => {
    return (
        <>
            <section className="relative h-screen overflow-hidden">
                <div className="absolute inset-0 z-0 w-full h-full">
                    <video autoPlay muted loop className="w-full h-full bg-black object-cover">
                        <source src={HeroData.video} type="video/mp4" />
                    </video>
                </div>

                <div className="relative z-10 mx-auto max-w-7xl h-full flex items-center">
                    <div className="">
                        <div>
                            <h1 className="text-4xl text-white font-normal font-serif sm:text-5xl lg:text-6xl xl:text-7xl">
                                {HeroData.title}
                            </h1>
                            <p className="mt-4 w-11/12 text-lg font-normal text-gray-200 sm:mt-8">
                                {HeroData.description}
                            </p>
                        </div>

                        <div className="mt-8 gap-7 flex">
                            <button
                                className="bg-white text-black py-2 px-8 rounded-lg hover:bg-gray-100 transition duration-300 ease-in-out shadow-lg">
                                Explore
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};