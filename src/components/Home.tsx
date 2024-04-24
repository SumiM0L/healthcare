import React from "react";
import homeillustration from "../assets/illustration.png";
import { Box, Typography } from "@mui/joy";

function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: { xs: "column-reverse", md: "row" },
        gap: { xs: "20px", md: "40px" },
      }}
    >
      <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
        <Typography
          sx={{
            fontFamily: "volkhov",
            fontSize: { xs: "36px", md: "48px" },
            fontWeight: "bold",
            lineHeight: 1,
          }}
        >
          Virtual healthcare for you
        </Typography>

        <Typography
          sx={{
            fontFamily: "poppins",
            fontSize: "21px",
            color: "#7D7987",
            marginTop: "10px",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Trafalgar provides progressive, and affordable <br />
          healthcare, accessible on mobile and online for everyone
        </Typography>

        <Typography
          sx={{
            fontFamily: "poppins",
            fontSize: "18px",
            fontWeight: "bold",
            backgroundColor: "#458FF6",
            color: "#fff",
            borderRadius: "13px",
            display: "inline-block",
            padding: "10px 20px",
            marginTop: "20px",
            textAlign: "center",
          }}
        >
          Consult today
        </Typography>
      </Box>
      <Box>
        <img src={homeillustration} alt="home" style={{ maxWidth: "100%" }} />
      </Box>
    </Box>
  );
}

export default Home;
