import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchFilmById } from "../redux/slices/FilmSlice.ts";
import MovieBanner from "../components/MovieBanner.tsx";
import MovieDetails from "../components/MovieDetails.tsx";
import Comments from "../components/Comments.tsx";
import Genre from "../components/Genre.tsx";
import { ClipLoader } from "react-spinners";
import Header from "../components/Header.tsx";

const FilmPage = () => {
    const { filmId } = useParams();
    const dispatch = useDispatch();

    const film = useSelector((state) => state.film?.dataObj);
    console.log("", film);
    const loading = useSelector((state) => state.film.loading);
    const errorMessage = useSelector((state) => state.film.errorMessage);
    useEffect(() => {
        if (filmId) {
            dispatch(fetchFilmById(filmId));
        }
    }, [filmId, dispatch]);

    if (errorMessage) {
        return <div className="text-center text-red-500">{errorMessage}</div>;
    }

    return (
        <>
            <Header/>
            {loading ? (

                   <>
                       <div className="flex justify-center items-center h-screen">
                           <ClipLoader color="#ffffff" />
                       </div>
                   </>

            ) :(
                <>
                    {film ? (
                        <>
                            <MovieBanner film={film} />
                            <Genre film={film} />
                            <MovieDetails film={film} />
                            <Comments comments={film?.comments} filmId={film?._id} />
                        </>
                    ) : (
                        <div className="text-center">Film not found.</div>
                    )}
                </>
            )}

        </>
    );
};

export default FilmPage;
