import React from "react";
import PhotoList from "./PhotoList";
import ExpandablePanel from "./ExpandablePanel";
import { CircularProgress } from "@mui/material";
import { BsFillTrash3Fill } from "react-icons/bs";
import { useRemoveAlbumMutation } from "../store/api/albumsApi";

function AlbumItem({ album }) {
  const [removeAlbum, result] = useRemoveAlbumMutation();
  const handleClick = () => {
    removeAlbum(album);
  };
  const header = (
    <div className="betweenContainer">
      <div className="aroundContainer">
        <button className="buttons">
          {result.isLoading ? (
            <CircularProgress size={20} />
          ) : (
            <BsFillTrash3Fill onClick={() => handleClick()} />
          )}
        </button>
        {album.title}
      </div>
    </div>
  );
  return (
    <div>
      <ExpandablePanel header={header} userName={album.title}>
        <PhotoList album={album} />
      </ExpandablePanel>
    </div>
  );
}

export default AlbumItem;
