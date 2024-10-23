import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { films, fetchFilmById } from "../redux/slices/FilmSlice.ts";
import Film from "../components/Film.tsx";
import Header from "../components/Header.tsx";
import { Hero } from "../components/Hero.tsx";
import Collab from "../components/Collab.tsx";

const HomePage: React.FC = ({userId}) => {
    const dispatch = useDispatch();
    const filmList = useSelector((state) => state.film.datalist);
    const errorMessage = useSelector((state) => state.film.errorMessage);
    const loading = useSelector((state) => state.film.loading);

    useEffect(() => {
        dispatch(films());
    }, [dispatch]);

    useEffect(() => {
        if (filmList && filmList.length > 0) {
            dispatch(fetchFilmById(filmList[0]._id));
        }
    }, [filmList, dispatch]);

    return (
        <>
            <Header />
            <Hero />
            <Collab />
            <Film filmList={filmList} errorMessage={errorMessage} loading={loading} />
        </>
    );
};

export default HomePage;
