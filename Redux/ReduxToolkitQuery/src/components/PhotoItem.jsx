import React from "react";
import { BsTrash } from "react-icons/bs";
import ExpandablePanel from "./ExpandablePanel";
import { CircularProgress } from "@mui/material";
import { BsFillTrash3Fill } from "react-icons/bs";
import { useRemoveAlbumMutation } from "../store/api/albumsApi";
import { useRemovePhotoMutation } from "../store/api/photosApi";

function PhotoItem({ photo }) {
  const [removePhoto, result] = useRemovePhotoMutation(photo);

  const header = (
    <div className="betweenContainer">
      <div className="aroundContainer">
        <button className="buttons">
          {result.isLoading ? (
            <CircularProgress size={20} />
          ) : (
            <BsFillTrash3Fill onClick={() => handlePhotoDelete()} />
          )}
        </button>
      </div>
    </div>
  );
  const handlePhotoDelete = () => {
    removePhoto(photo);
  };
  return (
    <div className="photoContainer">
      <img src={photo.url} alt="" className="photo" />
      <BsTrash
        className="deletePhotoIcon"
        onClick={() => handlePhotoDelete()}
      />
    </div>
  );
}

export default PhotoItem;
