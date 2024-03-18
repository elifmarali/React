import { Box, Grid } from "@mui/material";
function GridLesson() {
  return (
    <Box>
      {" "}
      <Grid container>
        <Grid xs={12} md={8}>
          8 Birimlik Yer
        </Grid>
        <Grid xs={12} md={4}>
          4 Birimlik Yer
        </Grid>
        <Grid xs={12} md={8}>
          8 Birimlik Yer
        </Grid>
        <Grid xs={12} md={4}>
          4 Birimlik Yer
        </Grid>
      </Grid>
      {/* <Grid container>
        <Grid xs={8}>8 Birimlik Yer</Grid>
        <Grid xs={4}>4 Birimlik Yer</Grid>
        <Grid xs={8}>8 Birimlik Yer</Grid>
        <Grid xs={4}>4 Birimlik Yer</Grid>
      </Grid> */}
    </Box>
  );
}

export default GridLesson;
