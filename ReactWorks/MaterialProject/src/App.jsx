import "./App.css";
import { AppBar, Toolbar, Grid, Container } from "@mui/material";
import Course from "../src/Course";
import AngularImage from "../src/images/angular.jpg";
import BootstrapImage from "../src/images/bootstrap5.png";
import CSharpImage from "../src/images/ccsharp.png";
import WebImage from "../src/images/kompleweb.jpg";

function App() {
  return (
    <div>
      <AppBar>
        <Toolbar sx={{ fontSize: "30px", fontFamily: "inherit" }}>
          Kart Projesi
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{ marginTop: 10 }}>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={AngularImage}
              title="Angular"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque id accusantium ipsam quidem laboriosam et quisquam a voluptatem dolor officia earum unde error, fugiat facere repellat consequuntur ea. Maxime, accusamus."
            ></Course>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={BootstrapImage}
              title="Bootstrap 5"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque id accusantium ipsam quidem laboriosam et quisquam a voluptatem dolor officia earum unde error, fugiat facere repellat consequuntur ea. Maxime, accusamus."
            ></Course>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={CSharpImage}
              title="C#"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque id accusantium ipsam quidem laboriosam et quisquam a voluptatem dolor officia earum unde error, fugiat facere repellat consequuntur ea. Maxime, accusamus."
            ></Course>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={WebImage}
              title="Komple Web"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque id accusantium ipsam quidem laboriosam et quisquam a voluptatem dolor officia earum unde error, fugiat facere repellat consequuntur ea. Maxime, accusamus."
            ></Course>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
