import React from "react";
import finadadoctorimage from "../assets/findadoctor.png";
import { Box, Typography } from "@mui/joy";

function FindDoctor() {
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
        <img
          src={finadadoctorimage}
          alt="illustration"
          style={{ maxWidth: "100%" }}
        />
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: { xs: "28px", md: "36px" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Leading healthcare providers
        </Typography>

        <Typography
          sx={{
            fontSize: "18px",
            color: "#7D7987",
            textAlign: { xs: "center", md: "left" },
            marginTop: "10px",
          }}
        >
          Trafalgar provides progressive and affordable <br />
          healthcare, accessible on mobile and online for
          <br /> everyone. To us, it’s not just work. We take pride
          <br /> in the solutions we deliver.
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
          Learn more
        </Typography>
      </Box>
    </Box>
  );
}

export default FindDoctor;
