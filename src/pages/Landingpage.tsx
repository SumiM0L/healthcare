import React from "react";
import Header from "../components/Header";
import Home from "../components/Home";
import Ourservice from "../components/Ourservice";
import FindDoctor from "../components/FindDoctor";
import DownloadApp from "../components/DownloadApp";
import Testmonial from "../components/Testmonial";
import { Box } from "@mui/joy";
import AboutUs from "../components/AboutUs";

function Landingpage() {
  return (
    <Box>
      <Header />
      <Home />
      <Ourservice />
      <FindDoctor />
      <DownloadApp />
      <Testmonial />
      <AboutUs />
    </Box>
  );
}

export default Landingpage;
