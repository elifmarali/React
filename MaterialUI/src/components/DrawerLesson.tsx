import { Drawer, Box, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
function DrawerLesson() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <IconButton size="large" onClick={() => setIsOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer open={isOpen} anchor="bottom" onClose={() => setIsOpen(false)}>
        <Box>
          <Typography component="div" variant="h6">
            Soldaki Panel
          </Typography>
        </Box>
      </Drawer>
    </>
  );
}

export default DrawerLesson;
