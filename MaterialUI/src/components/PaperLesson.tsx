import { Paper, Box } from "@mui/material";
function PaperLesson() {
  return (
    <Box sx={{ display: "flex", gap: "10px" }}>
      <Paper sx={{ width: 100, height: 100, margin: 10 }} />
      <Paper sx={{ width: 100, height: 100, margin: 10 }} elevation={0} />
      <Paper sx={{ width: 100, height: 100, margin: 10 }} elevation={1} />
      <Paper sx={{ width: 100, height: 100, margin: 10 }} elevation={10} />
      <Paper sx={{ width: 100, height: 100, margin: 10 }} variant="outlined" />
      <Paper
        sx={{ width: 100, height: 100, margin: 10 }}
        variant="outlined"
        square
      />
    </Box>
  );
}

export default PaperLesson;
