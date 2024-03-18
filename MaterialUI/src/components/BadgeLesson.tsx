import { Badge, Stack } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
function BadgeLesson() {
  return (
    <Stack direction="row" spacing={20}>
      <Badge badgeContent={50} sx={{ color: "salmon" }}>
        <MailIcon />
      </Badge>
      <Badge
        badgeContent={50}
        max={40}
        sx={{ color: "salmon" }}
        color="success"
      >
        <MailIcon />
      </Badge>
      <Badge
        badgeContent={50}
        max={40}
        sx={{ color: "salmon" }}
        color="success"
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <MailIcon />
      </Badge>
    </Stack>
  );
}

export default BadgeLesson;
