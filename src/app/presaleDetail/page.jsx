"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import SecurityIcon from "@mui/icons-material/Security";

const PresaleDetail = () => {
  const [token, setToken] = useState("usdt");

  const handleChange = (event) => {
    setToken(event.target.value);
  };

  return (
    <Container maxWidth="lg" className="my-5">
      <Typography
        variant="body1"
        className="font-bold text-[75px] text-white font-sans leading-[1.5] mb-10"
      >
        Tanuki
      </Typography>
      <Grid container spacing={3}>
        <Grid xs={12} md={8} item>
          <Box className="info">
            <Box className="flex items-center gap-3 mb-4">
              <img
                src="https://tanukilaunchpad.com/assets/userlogo-S2mexJAC.png"
                className="w-[70px] rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold text-white font-sans">
                Tanuki
              </h3>
              <Button color="warning" className="live-button gap-2 font-medium">
                <InfoIcon className="text-lg" />
                Live
              </Button>
            </Box>
            <Box className="items-center flex gap-2 mb-5">
              <Button className="safu gap-1 flex items-center">
                <SecurityIcon className="text-lg leading-none" />
                <Typography className="text-sm leading-[1.5] font-sans font-normal">
                  SAFU
                </Typography>
              </Button>
              <Button className="bg-black rounded-full h-8 hover:bg-black">
                <img
                  src="https://tanukilaunchpad.com/assets/certik-bIKJ2Djc.png"
                  className="w-[80px]"
                />
              </Button>
            </Box>
            <Box className="flex gap-4">
              <Typography
                variant="body1"
                className="text-white font-sans text-[17px] leading-[1.5] mb-4"
              >
                Token Address
              </Typography>
              <Box className="bg-white bg-opacity-30 rounded-full h-8 text-center flex items-center justify-center px-10 gap-2">
                <Typography className="text-white font-sans text-[17px] leading-[1.5]">
                  7weXBXvB...hCMcqnHQ
                </Typography>

                <ContentCopyIcon className="text-white text-lg" />
              </Box>
            </Box>
            <Typography
              variant="body1"
              className="text-white font-sans text-[17px] leading-[1.5] mb-4"
            >
              Presale Stage 3 <br />
              Current Price $0.005 <br />
              Next Price $0.007 (40%) <br />
              Listing Price 0.015 (300%)
            </Typography>
            <Typography
              variant="body1"
              className="text-white font-sans text-[17px] leading-[1.5] mb-4"
            >
              Token Name: Tanuki Launchpad
              <br />
              Token Decimals: 8<br />
              Token Symbol: $TANUPAD
              <br />
              Token Supply: 2 Billion
              <br />
              Token Hardcap: $900,000 USDT
              <br />
              Total Allocated Tokens: 180,000,000
            </Typography>
            <Typography
              variant="body1"
              className="text-white font-sans text-[17px] leading-[1.5] mb-4"
            >
              Vesting: 60% claim after presale
              <br />
              40% claim by 5% each week
            </Typography>
            <Typography
              variant="body1"
              className="text-white font-sans text-[17px] leading-[1.5]"
            >
              Tokens will be sent to your wallet after the Presale ends.
            </Typography>
          </Box>
        </Grid>
        <Grid xs={12} md={4} item>
          <Box className="info-right">
            <Box className="info-right-inner">
              <Typography
                variant="body1"
                className="text-white font-sans font-bold text-[35px] leading-[1.5] mb-3"
              >
                Presale is Live now!
              </Typography>
              <Typography
                variant="body1"
                className="text-white font-sans font-bold text-xl leading-[1.5]"
              >
                Total Raised: $36441
              </Typography>
              <Typography
                variant="body1"
                className="text-white font-sans font-bold text-xl leading-[1.5] mb-6"
              >
                Min: 50 USDT
              </Typography>
              <Typography
                variant="body1"
                className="text-white font-sans font-bold text-xl leading-[1.5] mb-12"
              >
                Claimable: 0
              </Typography>
              <Box className="flex justify-between items-start mb-2">
                <Typography
                  variant="body1"
                  className="text-white font-sans font-bold text-xl leading-[1.5]"
                >
                  Contribute
                </Typography>
                <Select
                  value={token}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "Token" }}
                  className="combo-box-select"
                >
                  <MenuItem value={"usdt"}>USDT</MenuItem>
                  <MenuItem value={"usdc"}>USDC</MenuItem>
                </Select>
              </Box>

              <Box className="token-input-container">
                <input
                  type="text"
                  placeholder="Enter USDC Amount"
                  value=""
                  className="token-input font-sans font-medium"
                />
              </Box>
              <Typography
                variant="body1"
                className="text-white font-sans font-normal text-xl leading-[1.5] my-4"
              >
                Token Amount 2400
              </Typography>
              <Button className="buy-button">Buy</Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PresaleDetail;
