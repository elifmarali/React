import { Tooltip, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
function ToolTipLesson() {
  return (
    <Tooltip title="Sil" placement="right" sx={{ margin: "200px" }}>
      <IconButton>
        <DeleteIcon></DeleteIcon>
      </IconButton>
    </Tooltip>
  );
}

export default ToolTipLesson;
