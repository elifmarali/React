import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
function CardLesson() {
  return (
    <Card>
      <CardMedia component="img" image="https://source.unsplash.com/random" />
      <CardContent>
        <Typography variant="h5" component="div">
          Baslik
        </Typography>
        <Typography variant="body2" component="p">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
          deleniti mollitia, repellendus rem reprehenderit in ratione ex sed.
          Vero eius dicta ut rem at, maxime saepe. Iste corrupti accusamus
          laudantium.
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="error">Temizle</Button>
        <Button color="success">Kaydet</Button>
      </CardActions>
    </Card>
  );
}

export default CardLesson;
