import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";
function DialogLesson() {
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setDialogOpen(true)}>Dialog'u Ac</Button>
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Hangisini Seviyosun</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Frontend Frameworklerinden hangisini seviyorsunuz?
          </DialogContentText>
          <DialogActions>
            <Button onClick={() => setDialogOpen(false)}>React Js</Button>
            <Button onClick={() => setDialogOpen(false)}>Angular</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default DialogLesson;
