import { Button, Snackbar, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
function SnackBarLesson() {
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const handleClick = () => {
    setOpenSnackBar(true);
  };
  const handleClose = () => {
    setOpenSnackBar(false);
  };
  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        Geri Al
      </Button>
      <IconButton>
        <CloseIcon sx={{ color: "white" }} onClick={handleClose} />
      </IconButton>
    </React.Fragment>
  );
  return (
    <div>
      <Button onClick={handleClick}>SnackBar i Ac</Button>
      <Snackbar
        open={openSnackBar}
        message="Hata Mesaji Aldiniz"
        action={action}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      />
    </div>
  );
}

export default SnackBarLesson;
