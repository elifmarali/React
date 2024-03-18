import { Box } from "@mui/material";
function BoxLesson() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        width: "100px",
        height: "100px",
        color: "white",
        padding: "20px",
        "&:hover": {
          backgroundColor: "primary.light",
        },
      }}
    >
      Box
    </Box>
  );
}

export default BoxLesson;
