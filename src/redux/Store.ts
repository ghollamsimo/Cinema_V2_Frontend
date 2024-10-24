import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/AuthSlice.ts';
import filmSlice from './slices/FilmSlice.ts';
import commentSlice from "./slices/CommentSlice.ts";
import ratingSlice from "./slices/RatingSlice.ts";
import sessionSlice from "./slices/SessionSlice.ts";
import reservationSlice from "./slices/ReservationSlice.ts";

export const store = configureStore({
    reducer: {
        authentification: authSlice,
        film: filmSlice,
        comment: commentSlice,
        rating: ratingSlice,
        session: sessionSlice,
        reservation: reservationSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
