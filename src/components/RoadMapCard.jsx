import React from "react";
import { Box, Typography } from "@mui/material";

const RoadMapCard = ({ title, description }) => {
  return (
    <Box className="roadmap-card overflow-hidden">
      <Typography
        variant="body1"
        className="text-center font-bold font-sans text-[50px] leading-[1.5] text-[#3b0f75] mb-5"
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        className="text-center font-normal font-sans text-[19px] leading-[1.5] text-black mb-5"
      >
        {description}
      </Typography>
    </Box>
  );
};

export default RoadMapCard;
