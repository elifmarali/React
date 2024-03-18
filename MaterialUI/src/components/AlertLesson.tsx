import { Stack, Alert, AlertTitle } from "@mui/material";
function AlertLesson() {
  return (
    <Stack spacing={4}>
      <Alert>Default</Alert>
      <Alert severity="error">Error </Alert>
      <Alert severity="warning">Warning </Alert>
      <Alert severity="info">Info</Alert>
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        ABCskfks
      </Alert>
    </Stack>
  );
}

export default AlertLesson;
