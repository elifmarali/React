import { Button, Stack, ButtonGroup } from "@mui/material";
function ButtonGroupLesson() {
  return (
    <Stack>
      <Stack spacing={3} direction="row">
        <ButtonGroup variant="contained">
          <Button>Conteined 1</Button>
          <Button>Conteined 2</Button>
          <Button>Conteined 3</Button>
        </ButtonGroup>
        <ButtonGroup variant="text">
          <Button>Text 1</Button>
          <Button>Text 2</Button>
          <Button>Text 3</Button>
        </ButtonGroup>
        <ButtonGroup variant="outlined">
          <Button>Outlined 1</Button>
          <Button>Outlined 2</Button>
          <Button>Outlined 3</Button>
        </ButtonGroup>
        <ButtonGroup variant="outlined" orientation="vertical">
          <Button>Outlined 1</Button>
          <Button>Outlined 2</Button>
          <Button>Outlined 3</Button>
        </ButtonGroup>
        <ButtonGroup variant="outlined" orientation="vertical" size="small">
          <Button>Outlined 1</Button>
          <Button>Outlined 2</Button>
          <Button>Outlined 3</Button>
        </ButtonGroup>
        <ButtonGroup
          variant="text"
          orientation="vertical"
          size="large"
          color="error"
        >
          <Button>Outlined 1</Button>
          <Button>Outlined 2</Button>
          <Button>Outlined 3</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
}

export default ButtonGroupLesson;
