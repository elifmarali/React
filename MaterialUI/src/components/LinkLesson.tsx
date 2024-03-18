import { Box, Link } from "@mui/material";
function LinkLesson() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Link href="https://www.youtube.com/">YouTube sitesine git</Link>
      <Link href="https://www.youtube.com/" color="error">
        YouTube sitesine git
      </Link>
      <Link href="https://www.youtube.com/" color="error" variant="body2">
        YouTube sitesine git
      </Link>
      <Link
        href="https://www.youtube.com/"
        color="error"
        variant="body2"
        underline="none"
      >
        YouTube sitesine git
      </Link>
      <Link
        href="https://www.youtube.com/"
        color="error"
        variant="body2"
        underline="hover"
      >
        YouTube sitesine git
      </Link>
      <Link
        href="https://www.youtube.com/"
        color="error"
        variant="body2"
        underline="always"
      >
        YouTube sitesine git
      </Link>
      <Link
        href="https://www.youtube.com/"
        component="button"
        onClick={() => {
          console.log("Elif");
        }}
      >
        YouTube sitesine git
      </Link>
    </Box>
  );
}

export default LinkLesson;
