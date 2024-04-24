import React from "react";
import Searchdoctor from "../assets/Searchdoctor.png";
import Onlinepharmacy from "../assets/Onlinepharmacy.png";
import Consultation from "../assets/Consultation.png";
import Detailsinfo from "../assets/Detailsinfo.png";
import Emergencycare from "../assets/Emergencycare.png";
import Tracking from "../assets/Tracking.png";
import { Box, Typography } from "@mui/joy";

function Ourservice() {
  const services = [
    {
      id: 1,
      image: Searchdoctor,
      title: "Search Doctor",
      description: "Find and consult with qualified doctors.",
    },
    {
      id: 2,
      image: Onlinepharmacy,
      title: "Online Pharmacy",
      description: "Order medicines online and get them delivered.",
    },
    {
      id: 3,
      image: Consultation,
      title: "Consultation",
      description: "Get expert advice and medical consultations.",
    },
    {
      id: 4,
      image: Detailsinfo,
      title: "Details Information",
      description: "Access detailed information about services and treatments.",
    },
    {
      id: 5,
      image: Emergencycare,
      title: "Emergency Care",
      description: "Receive immediate medical assistance in emergencies.",
    },
    {
      id: 6,
      image: Tracking,
      title: "Tracking",
      description: "Track your health progress and appointments.",
    },
  ];

  return (
    <Box>
      <Box sx={{ textAlign: "center" }}>
        <Typography sx={{ fontSize: "36px" }}>Our Service sx</Typography>
        <Typography sx={{ fontSize: "18px", color: "#7D7987" }}>
          We provide the best choices for you. Adjust it to your health needs
          and make sure you undergo treatment
          <br /> with our highly qualified doctors. Consult with us to determine
          the suitable service for your health.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))",
          gap: { xs: "10px", md: "78px" },
          justifyContent: "center",
          padding: " 40px 120px",
        }}
      >
        {services.map((service, index) => (
          <Box
            key={service.id}
            sx={{
              width: "100%",
              padding: "20px",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
              borderRadius: "30px",
              marginBottom: "20px",
              ...(index < 3 && { gridColumn: "span 1" }),
            }}
          >
            <img
              src={service.image}
              alt={service.title}
              style={{ marginBottom: "10px", maxWidth: "100%" }}
            />
            <Typography
              sx={{
                marginBottom: "10px",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              {service.title}
            </Typography>
            <Typography sx={{ color: "#7D7987", fontSize: "16px" }}>
              {service.description}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
          }}
        >
          Learn more
        </Typography>
      </Box>
    </Box>
  );
}

export default Ourservice;
