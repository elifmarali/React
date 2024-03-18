import { Typography } from "@mui/material";

function TypographyLesson() {
  return (
    <div>
      <Typography variant="body1">
        Body1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
        alias similique natus ratione tempore quibusdam dolorem, praesentium
        ipsam quia ut harum at sint neque odio ad. Unde nesciunt porro velit.
      </Typography>
      <Typography variant="body2">
        Body2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
        alias similique natus ratione tempore quibusdam dolorem, praesentium
        ipsam quia ut harum at sint neque odio ad. Unde nesciunt porro velit.
      </Typography>
      <Typography variant="h1">H1 Gorunumu</Typography>
      <Typography variant="h2">H2 Gorunumu</Typography>
      <Typography variant="h3">H3 Gorunumu</Typography>
      <Typography variant="h4">H4 Gorunumu</Typography>
      <Typography variant="h5">H5 Gorunumu</Typography>
      <Typography variant="h6">H6 Gorunumu</Typography>
      <Typography variant="h1" component="h4">
        H1 CSS ozellikleri gecerli HTML etiket h4
      </Typography>
      <Typography variant="h6" align="left">
        Align Left
      </Typography>
      <Typography variant="h6" align="right">
        Align Right
      </Typography>
      <Typography variant="subtitle1">Alt Baslik 1</Typography>
      <Typography variant="subtitle2">Alt Baslik 2</Typography>
    </div>
  );
}

export default TypographyLesson;
