import { CircularProgress, LinearProgress, Stack } from "@mui/material";

function ProgressLesson() {
  return (
    <Stack spacing={6}>
      <Stack spacing={6} direction="row">
        <Stack>
          {" "}
          <CircularProgress />
          <CircularProgress color="error" />
          <CircularProgress color="success" />
          <CircularProgress color="secondary" />
        </Stack>
        <Stack>
          <CircularProgress variant="determinate" value={25} />
          <CircularProgress variant="determinate" value={50} />
          <CircularProgress variant="determinate" value={75} />
          <CircularProgress variant="determinate" value={100} />
        </Stack>
      </Stack>
      <Stack spacing={4}>
        <LinearProgress />
        <LinearProgress color="warning" />
        <LinearProgress color="success" />
        <LinearProgress color="error" variant="determinate" value={25} />
        <LinearProgress color="error" variant="determinate" value={50} />
        <LinearProgress color="error" variant="determinate" value={75} />
        <LinearProgress color="error" variant="determinate" value={100} />
      </Stack>
    </Stack>
  );
}

export default ProgressLesson;
