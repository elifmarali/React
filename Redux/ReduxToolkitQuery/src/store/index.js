import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./api/usersApi"
import { albumsApi } from "./api/albumsApi";
import { photosApi } from "./api/photosApi";


export const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
        [albumsApi.reducerPath]: albumsApi.reducer,
        [photosApi.reducerPath]: photosApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(usersApi.middleware).concat(albumsApi.middleware).concat(photosApi.middleware);
    }
})



export { useFetchUsersQuery, useAddUserMutation, useRemoveUserMutation } from "./api/usersApi"
export { useAddAlbumMutation, useFetchAlbumsQuery, useRemoveAlbumMutation } from "./api/albumsApi"
export { useFetchPhotosQuery, useAddPhotoMutation, useRemovePhotoMutation } from "./api/photosApi"