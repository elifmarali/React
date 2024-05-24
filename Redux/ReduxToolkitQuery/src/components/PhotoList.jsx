import React from "react";

import { Button, CircularProgress, Skeleton } from "@mui/material";
import { AiOutlinePlus } from "react-icons/ai";

import {
  useAddPhotoMutation,
  useFetchPhotosQuery,
} from "../store/api/photosApi";
import PhotoItem from "./PhotoItem";
function PhotoList({ album }) {
  const { data, isFetching, isError } = useFetchPhotosQuery(album);
  const [addPhoto, results] = useAddPhotoMutation();
  const handlePhotoAdd = () => {
    addPhoto(album);
  };
  let content;
  if (isFetching) {
    content = (
      <Skeleton variant="rectangular" sx={{ width: "100%", height: "600px" }} />
    );
  } else if (isError) {
    content = <div>Hata Var!</div>;
  } else {
    content = data.map((photo) => {
      return (
        <div>
          <PhotoItem photo={photo} key={photo.id}></PhotoItem>
        </div>
      );
    });
  }
  return (
    <div>
      <div className="topContainer">
        <div className="albumContainer">
          <div className="albumContent">
            <h2>{album.title} Fotograflari</h2>
            <div>
              <Button variant="outlined" onClick={() => handlePhotoAdd()}>
                {results.isLoading ? (
                  <CircularProgress size={20} />
                ) : (
                  <>
                    Fotograf Ekle <AiOutlinePlus />
                  </>
                )}
              </Button>
            </div>
          </div>
          <div className="photosContainer">{content}</div>
        </div>
      </div>
    </div>
  );
}

export default PhotoList;
