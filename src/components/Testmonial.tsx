import React from "react";
import person from "../assets/person1.png";
import { Box, Typography } from "@mui/joy";

function Testimonial() {
  return (
    <Box
      sx={{
        maxWidth: "70%",
        height: "auto",
        background: "rgba(103, 195, 243, 1)",
        borderRadius: "18px",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        padding: "40px",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          marginBottom: "20px",
          fontSize: { xs: "24px", md: "36px" },
          color: "#fff",
        }}
      >
        What our customers are saying
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          gap: "20px",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Box>
              <img src={person} alt="avatar" />
            </Box>
            <Box>
              <Box>
                <Typography
                  sx={{ fontSize: { xs: "18px", md: "22px", color: "#fff" } }}
                >
                  Edward Newgate
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{ fontSize: { xs: "14px", md: "18px", color: "#fff" } }}
                >
                  Founder Circle
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: { xs: "16px", md: "19px" },
              textAlign: "center",
              marginTop: { xs: "20px", md: 0 },
              color: "#fff",
            }}
          >
            “Our dedicated patient engagement app <br />
            and web portal allow you to access information <br />
            instantaneously (no tedious forms, long calls, <br />
            or administrative hassle) and securely”
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Testimonial;
