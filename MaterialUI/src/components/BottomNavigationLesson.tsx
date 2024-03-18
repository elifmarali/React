import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useState } from "react";

function BottomNavigationLesson() {
  const [selectedValue, setSelectedValue] = useState<number>(0);
  console.log(selectedValue);

  return (
    <BottomNavigation
      showLabels
      sx={{ width: "100%", position: "absolute", bottom: "0" }}
      value={selectedValue}
      onChange={(event, newValue) => {
        setSelectedValue(newValue);
      }}
    >
      <BottomNavigationAction icon={<RestoreIcon />} label="Oncekiler" />
      <BottomNavigationAction icon={<FavoriteIcon />} label="Sevdiklerim" />
      <BottomNavigationAction icon={<LocationOnIcon />} label="Konumum" />
    </BottomNavigation>
  );
}

export default BottomNavigationLesson;
