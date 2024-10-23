import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchFilmById } from "../redux/slices/FilmSlice.ts";
import MovieBanner from "../components/MovieBanner.tsx";
import MovieDetails from "../components/MovieDetails.tsx";
import Comments from "../components/Comments.tsx";
import Genre from "../components/Genre.tsx";
import { ClipLoader } from "react-spinners";
import Sessions from "../components/Sessions.tsx";
import {fetchSession} from "../redux/slices/SessionSlice.ts";

const FilmPage = () => {
    const { filmId } = useParams();
    const dispatch = useDispatch();

    const film = useSelector((state) => state.film?.dataObj);
    const session = useSelector((state) => state.session.datalist);
    const loading = useSelector((state) => state.film.loading);
    const errorMessage = useSelector((state) => state.film.errorMessage);

    useEffect(() => {
        if (filmId) {
            dispatch(fetchFilmById(filmId));
            dispatch(fetchSession(filmId))
        }
    }, [filmId, dispatch]);

    if (errorMessage) {
        return <div className="text-center text-red-500">{errorMessage}</div>;
    }

    return (
        <>
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <ClipLoader color="#ffffff" />
                </div>
            ) : (
                <>
                    {film ? (
                        <>
                            <MovieBanner film={film} />
                            <Genre film={film} />
                            <MovieDetails film={film} />
                            <div className="flex flex-col md:flex-row gap-4 p-4">
                                <div className="flex-1 md:w-1/2">
                                    <Sessions session={session} />
                                </div>
                                <div className="flex-1 md:w-1/2">
                                    <Comments comments={film?.comments} filmId={film?._id} />
                                </div>
                            </div>
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
