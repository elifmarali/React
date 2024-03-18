import { Button, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
function ButtonLesson() {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button variant="text" color="primary">
          Blue - Primary
        </Button>
        <Button variant="text" color="secondary">
          Purple - Secondary
        </Button>
        <Button variant="text" color="error">
          Red -Error
        </Button>
        <Button variant="text" color="info">
          Ligth Blue - Info
        </Button>
        <Button variant="text" color="success">
          Green - Success
        </Button>
        <Button variant="text" color="warning">
          {" "}
          Yellow - Warning
        </Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="primary">
          Blue - Primary
        </Button>
        <Button variant="contained" color="secondary">
          Purple - Secondary
        </Button>
        <Button variant="contained" color="error">
          Red -Error
        </Button>
        <Button variant="contained" color="info">
          Ligth Blue - Info
        </Button>
        <Button variant="contained" color="success">
          Green - Success
        </Button>
        <Button variant="contained" color="warning">
          {" "}
          Yellow - Warning
        </Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" color="primary">
          Blue - Primary
        </Button>
        <Button variant="outlined" color="secondary">
          Purple - Secondary
        </Button>
        <Button variant="outlined" color="error">
          Red -Error
        </Button>
        <Button variant="outlined" color="info">
          Ligth Blue - Info
        </Button>
        <Button variant="outlined" color="success">
          Green - Success
        </Button>
        <Button variant="outlined" color="warning">
          {" "}
          Yellow - Warning
        </Button>
      </Stack>
      <Stack direction="row" spacing={2} display="block">
        <Button variant="outlined" size="small">
          My Small Button
        </Button>
        <Button variant="outlined" size="medium">
          My Medium Button
        </Button>
        <Button variant="outlined" size="large">
          My Large Button
        </Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" startIcon={<AddIcon color="secondary" />}>
          Add
        </Button>
        <Button
          variant="contained"
          endIcon={<AddIcon color="secondary" />}
          onClick={() => alert("Clicked")}
        >
          Add
        </Button>
      </Stack>
    </Stack>
  );
}

export default ButtonLesson;
