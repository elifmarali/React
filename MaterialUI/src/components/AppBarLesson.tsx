import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import React, { useState } from "react";
function AppBarLesson() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openControl = Boolean(anchorEl);
  console.log(openControl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar>
      <Toolbar>
        <IconButton>
          <AppsIcon></AppsIcon>
        </IconButton>
        <Typography variant="h6" component="div" sx={{ marginRight: "auto" }}>
          Header Ornegi
        </Typography>
        <Stack direction="row">
          <Button sx={{ color: "white" }}>Ana Sayfa</Button>
          <Button sx={{ color: "white" }}>Hakkimizda</Button>
          <Button sx={{ color: "white" }}>Urunler</Button>
          <Button sx={{ color: "white" }}>Fiyatlar</Button>
          <Button sx={{ color: "white" }} onClick={handleClick}>
            Indirimdekiler
          </Button>
        </Stack>
        <Menu anchorEl={anchorEl} open={openControl} onClose={handleClose}>
          <MenuItem onClick={handleClose}>Defter</MenuItem>
          <MenuItem onClick={handleClose}>Kitap</MenuItem>
          <MenuItem onClick={handleClose}>Kalem</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default AppBarLesson;
