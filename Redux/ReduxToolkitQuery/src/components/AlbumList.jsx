import React from "react";
import {
  useAddAlbumMutation,
  useFetchAlbumsQuery,
} from "../store/api/albumsApi";
import { Button, CircularProgress, Skeleton } from "@mui/material";
import { AiOutlinePlus } from "react-icons/ai";
import AlbumItem from "./AlbumItem";

function AlbumList({ user }) {
  const { data, isFetching, isError } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();
  const handleAlbumAdd = () => {
    addAlbum(user);
  };
  let content;
  if (isFetching) {
    content = (
      <Skeleton variant="rectangular" sx={{ width: "100%", height: "600px" }} />
    );
  } else if (isError) {
    content = <div>Hata Var!</div>;
  } else {
    content = data.map((album) => {
      return <AlbumItem album={album} key={user.id}></AlbumItem>;
    });
  }
  return (
    <div>
      <div className="topContainer">
        <div className="albumContainer">
          <div className="albumContent">
            {" "}
            <h2>{user.name} Albumu</h2>
            <div>
              <Button variant="outlined" onClick={() => handleAlbumAdd()}>
                {results.isLoading ? (
                  <CircularProgress size={20} />
                ) : (
                  <>
                    Album Ekle <AiOutlinePlus />
                  </>
                )}
              </Button>
            </div>
          </div>

          <div>{content}</div>
        </div>
      </div>
    </div>
  );
}

export default AlbumList;
