import "./App.css";
import Login from "./components/login";
import Signup from "./components/signup";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import { useState } from "react";
function App() {
  const [tab, setTab] = useState("login");
  return (
    <Box display="flex" justifyContent="center" sx={{ paddingTop: "70px" }}>
      <Box
        sx={{
          typography: "body1",
          width: "360px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          //alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TabContext
          value={tab}
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Box sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}>
            <TabList
              value={tab}
              onChange={() => {
                setTab(tab === "login" ? "register" : "login");
              }}
              textColor="secondary"
              indicatorColor="secondary"
              sx={{
                width: "100% !important",
                display: "flex",
                justifyContent: "space-around !important",
              }}
            >
              <Tab label="Sign In" value="login" sx={{ width: "50%" }} />
              <Tab label="Sign Up" value="register" sx={{ width: "50%" }} />
            </TabList>
          </Box>
          <TabPanel value="login" sx={{ padding: 0, margin: 0 }}>
            <Login setTab={setTab} />
          </TabPanel>
          <TabPanel value="register" sx={{ padding: 0 }}>
            <Signup />
          </TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
}

export default App;
