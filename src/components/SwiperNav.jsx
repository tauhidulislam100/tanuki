"use client";

import React, { useEffect } from "react";
import { Box, Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const SwiperNav = ({ swiper }) => {
  useEffect(() => {
    console.log(swiper);
  }, [swiper]);

  return (
    <Box display="flex" justifyContent="center" mt={3}>
      <Button
        className="swiper-button-prev"
        sx={{ mr: 2 }}
        onClick={() => swiper?.slidePrev()}
      >
        <ArrowBackIosNewIcon />
      </Button>
      <Button
        className="swiper-button-next"
        onClick={() => swiper?.slideNext()}
      >
        <ArrowForwardIosIcon />
      </Button>
    </Box>
  );
};

export default SwiperNav;
