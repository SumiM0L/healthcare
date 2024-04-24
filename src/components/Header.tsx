import React from "react";
import logo from "../assets/logo.png";
import { Box } from "@mui/joy";

function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff", // Added background color for visibility
      }}
    >
      <Box>
        <img src={logo} alt="logo" />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          columnGap: 4,
          flexWrap: "wrap", // Added flex-wrap for responsive behavior
        }}
      >
        <Box sx={{ color: "#7D7987", marginBottom: { xs: 1, sm: 0 } }}>
          Home
        </Box>
        <Box sx={{ color: "#7D7987", marginBottom: { xs: 1, sm: 0 } }}>
          Find a doctor
        </Box>
        <Box sx={{ color: "#7D7987", marginBottom: { xs: 1, sm: 0 } }}>
          Apps
        </Box>
        <Box sx={{ color: "#7D7987", marginBottom: { xs: 1, sm: 0 } }}>
          Testimonials
        </Box>
        <Box sx={{ color: "#7D7987", marginBottom: { xs: 1, sm: 0 } }}>
          About us
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
