import React from "react";
import downloadappimage from "../assets/Downloadapp.png";
import { Box, Typography } from "@mui/joy";
import { LiaDownloadSolid } from "react-icons/lia";

function DownloadApp() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        flexDirection: { xs: "column-reverse", md: "row" },
        alignItems: "center",
      }}
    >
      <Box>
        <Typography
          sx={{
            fontSize: { xs: "28px", md: "36px" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Download our mobile apps
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            color: "#7D7987",
            textAlign: { xs: "center", md: "left" },
            marginTop: "10px",
          }}
        >
          Our dedicated patient engagement app and <br /> web portal allow you
          to access information
          <br /> instantaneously (no tedious forms, long calls, <br />
          or administrative hassle) and securely.
        </Typography>
        <Typography
          sx={{
            fontFamily: "poppins",
            fontSize: "18px",
            fontWeight: "bold",
            border: "1px solid #458FF6",
            color: "#458FF6",
            borderRadius: "13px",
            display: "inline-block",
            padding: "10px 20px",
            marginTop: "20px",
            textAlign: "center",
          }}
        >
          Downloads{" "}
          <span style={{ verticalAlign: "middle", marginLeft: "5px" }}>
            <LiaDownloadSolid />
          </span>
        </Typography>
      </Box>
      <Box>
        <img
          src={downloadappimage}
          alt="illustration"
          style={{ maxWidth: "100%" }}
        />
      </Box>
    </Box>
  );
}

export default DownloadApp;
