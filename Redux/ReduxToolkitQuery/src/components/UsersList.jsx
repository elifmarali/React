import React from "react";
import { useAddUserMutation, useFetchUsersQuery } from "../store";
import { Button, CircularProgress, Skeleton } from "@mui/material";
import UserItem from "./UserItem";
import { AiOutlinePlus } from "react-icons/ai";
function UsersList() {
  const { data, isFetching, isError } = useFetchUsersQuery();

  const [addUser, results] = useAddUserMutation();

  let content;
  if (isFetching) {
    content = (
      <Skeleton variant="rectangular" sx={{ width: "100%", height: "600px" }} />
    );
  } else if (isError) {
    content = <div>Hata Var!</div>;
  } else {
    content = data.map((user) => {
      return <UserItem user={user} key={user.id}></UserItem>;
    });
  }
  const handleUserAdd = () => {
    addUser();
  };
  return (
    <div className="container">
      <div className="topContainer">
        <h2>Kisiler</h2>
        <div>
          <Button variant="outlined" onClick={() => handleUserAdd()}>
            {results.isLoading ? (
              <CircularProgress size={20} />
            ) : (
              <>
                Kisi Ekle <AiOutlinePlus />
              </>
            )}
          </Button>
        </div>
      </div>
      <div className="bottomContainer">{content}</div>
    </div>
  );
}

export default UsersList;
