import { Stack, Divider } from "@mui/material";
function StackLesson() {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 2, sm: 10, md: 20 }}
      justifyContent="flex-end "
      divider={<Divider orientation="vertical" flexItem />}
    >
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </Stack>
  );
}

export default StackLesson;
