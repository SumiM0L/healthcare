import { Box, Typography } from "@mui/joy";
import React from "react";
import imageone from "../assets/imageone.png";
import iamgetwo from "../assets/imagetwo.png";
import imagethree from "../assets/imagethree.png";
import { FiArrowDownRight } from "react-icons/fi";

function AboutUs() {
  const services = [
    {
      id: 1,
      Image: imageone,
      title: "Disease detection, check up in the laboratory",
      content:
        "In this case, the role of the health laboratory is very important to do  a disease detection...",
      readmore: "Read more",
    },
    {
      id: 2,
      Image: iamgetwo,
      title: "Herbal medicines that are  safe for consumption",
      content:
        "Herbal medicine is very widely used at this time because of its very good for your health...",

      readmore: "Read more",
    },
    {
      id: 3,
      Image: imagethree,
      title: "Natural care for healthy facial skin",
      content:
        "A healthy lifestyle should start from now and also for your skin health There are some...",

      readmore: "Read more",
    },
  ];
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          marginBottom: "20px",
          fontSize: { xs: "24px", md: "36px" },
        }}
      >
        Check out our latest article
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
              //   cc

              marginBottom: "20px",
              ...(index < 3 && { gridColumn: "span 1" }),
            }}
          >
            <img
              src={service.Image}
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
            <Typography sx={{ color: "#7D7987", fontSize: "15px" }}>
              {service.content}
            </Typography>
            <Typography
              sx={{ marginBottom: "10px", fontSize: "14px", color: "#4089ED" }}
            >
              {service.readmore}{" "}
              <span>
                {" "}
                <FiArrowDownRight />
              </span>
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
          View All
        </Typography>
      </Box>
    </>
  );
}

export default AboutUs;
