import { Skeleton, Box } from "@mui/material";
import { useState } from "react";
import image from "../assets/react.svg";
function SkeletonLesson() {
  const [loading, setLoading] = useState(false);
  return (
    <Box>
      {loading ? (
        <Skeleton width={200} height={300} animation="wave" />
      ) : (
        <img src={image} alt="" />
      )}
    </Box>
  );
}

export default SkeletonLesson;
