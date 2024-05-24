import React from "react";
import ExpandablePanel from "./ExpandablePanel";
import AlbumList from "./AlbumList";
import { BsFillTrash3Fill } from "react-icons/bs";
import { GoChevronLeft } from "react-icons/go";
import { useRemoveUserMutation } from "../store/api/usersApi";
import { CircularProgress } from "@mui/material";
function UserItem({ user }) {
  const [removeUser, result] = useRemoveUserMutation();
  const handleClick = () => {
    removeUser(user);
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
        {user.name}
      </div>
    </div>
  );
  return (
    <div>
      <ExpandablePanel header={header} userName={user.name}>
        <AlbumList user={user} />
      </ExpandablePanel>
    </div>
  );
}

export default UserItem;
