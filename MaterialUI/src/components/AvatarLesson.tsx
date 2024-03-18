import { Avatar, Stack, AvatarGroup } from "@mui/material";
import Image from "../assets/react.svg";
function AvatarLesson() {
  return (
    <Stack direction="row" spacing={13}>
      <AvatarGroup>
        <Avatar
          sx={{ marginRight: "10px" }}
          src="https://randomuser.me/api/portraits/women/56.jpg"
        />
        <Avatar src="https://randomuser.me/api/portraits/men/50.jpg" />
      </AvatarGroup>
      <AvatarGroup max={1}>
        <Avatar
          sx={{
            fontSize: "12px",
            bgcolor: "secondary.light",
            marginRight: "10px",
          }}
          variant="square"
        >
          Elif
        </Avatar>
        <Avatar
          variant="rounded"
          sx={{
            fontSize: "12px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
            bgcolor: "success.light",
          }}
        >
          Yunus Emre
        </Avatar>
        <Avatar
          sx={{
            fontSize: "12px",
            bgcolor: "secondary.light",
            marginRight: "10px",
          }}
          variant="square"
        >
          Elif
        </Avatar>
        <Avatar
          variant="rounded"
          sx={{
            fontSize: "12px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
            bgcolor: "success.light",
          }}
        >
          Yunus Emre
        </Avatar>
      </AvatarGroup>
    </Stack>
  );
}

export default AvatarLesson;
