import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/AuthSlice.ts';
import filmSlice from './slices/FilmSlice.ts';
import commentSlice from "./slices/CommentSlice.ts";

export const store = configureStore({
    reducer: {
        authentification: authSlice,
        film: filmSlice,
        comment: commentSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
