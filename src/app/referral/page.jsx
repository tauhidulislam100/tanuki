import { Box, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const ReferralPage = () => {
  return (
    <>
      <Container maxWidth="xs">
        <Box className="py-10">
          <img src="/assets/star_1.png" className="w-[76px] max-w-full" />
          <Typography
            variant="body1"
            className="text-[70px] font-bold font-sans leading-[1.5] text-white text-center"
          >
            Referral
          </Typography>
          <Box className="flex justify-end">
            <img src="/assets/star_2.png" className="w-[76px] max-w-full" />
          </Box>
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Typography className="text-[55px] font-sans capitalize text-center leading-[1.5] text-white tracking-[8px] font-bold">
          Get <span className="text-[#01fd28]">Rewarded</span> For
          <br /> Selling $TANUKI To Your
          <br /> Audience!
        </Typography>
        <Box className="flex justify-center mt-4">
          <Link className="rf-button font-sans" href={"/"}>
            Go to Profile for Referral Link
          </Link>
        </Box>

        <Grid container spacing={5} className="items-center">
          <Grid xs={12} md={6} className="pt-10 pl-10">
            <Typography
              variant="body1"
              className="text-[40px] font-sans capitalize leading-[1.5] text-white font-bold"
            >
              Referral Rewards
            </Typography>
            <Typography
              variant="body1"
              className="text-[24px] font-sans leading-[1.5] text-[#ffffffa1] font-normal"
            >
              Share your referral link with your friends and business partners
              and get a bonus from every successful purchase.
            </Typography>
            <Box className="flex mt-4">
              <Link className="rf-button font-sans" href={"/"}>
                Go to Profile for Referral Link
              </Link>
            </Box>
          </Grid>
          <Grid xs={12} md={6} className="pl-10 pt-10">
            <img
              src="https://tanukilaunchpad.com/assets/ref-qj_mOXHv.png"
              className="max-w-full w-[95%]"
            />
          </Grid>
        </Grid>
        <Box className="bonus-info">
          <Box className="bonus-info-inner relative">
            <Box className="flex justify-between">
              <Typography
                variant="body1"
                className="text-[40px] font-sans capitalize leading-[1.5] text-white font-bold"
              >
                Amount in USDT
              </Typography>
              <Typography
                variant="body1"
                className="text-[40px] font-sans capitalize leading-[1.5] text-white font-bold"
              >
                Bonus %
              </Typography>
            </Box>
            <Box className="flex justify-between mt-4">
              <Typography
                variant="body1"
                className="text-[22px] font-sans capitalize leading-[1.5] text-white font-normal text-opacity-[0.63]"
              >
                Less than 1000 USDT
              </Typography>
              <Typography
                variant="body1"
                className="text-[22px] font-sans capitalize leading-[1.5] text-white font-normal text-opacity-[0.63]"
              >
                +5%
              </Typography>
            </Box>
            <Box className="flex justify-between mt-4">
              <Typography
                variant="body1"
                className="text-[22px] font-sans capitalize leading-[1.5] text-white font-normal text-opacity-[0.63]"
              >
                1000 -6000 USDT
              </Typography>
              <Typography
                variant="body1"
                className="text-[22px] font-sans capitalize leading-[1.5] text-white font-normal text-opacity-[0.63]"
              >
                +7%
              </Typography>
            </Box>
            <Box className="flex justify-between mt-4">
              <Typography
                variant="body1"
                className="text-[22px] font-sans capitalize leading-[1.5] text-white font-normal text-opacity-[0.63]"
              >
                6000-12000 USDT
              </Typography>
              <Typography
                variant="body1"
                className="text-[22px] font-sans capitalize leading-[1.5] text-white font-normal text-opacity-[0.63]"
              >
                +10%
              </Typography>
            </Box>
            <Box className="flex justify-between mt-4">
              <Typography
                variant="body1"
                className="text-[22px] font-sans capitalize leading-[1.5] text-white font-normal text-opacity-[0.63]"
              >
                12000-32000 USDT
              </Typography>
              <Typography
                variant="body1"
                className="text-[22px] font-sans capitalize leading-[1.5] text-white font-normal text-opacity-[0.63]"
              >
                +12%
              </Typography>
            </Box>
            <Box className="flex justify-between mt-4">
              <Typography
                variant="body1"
                className="text-[22px] font-sans capitalize leading-[1.5] text-white font-normal text-opacity-[0.63]"
              >
                32000-64000 USDT
              </Typography>
              <Typography
                variant="body1"
                className="text-[22px] font-sans capitalize leading-[1.5] text-white font-normal text-opacity-[0.63]"
              >
                +13%
              </Typography>
            </Box>
            <Box className="flex justify-between mt-4">
              <Typography
                variant="body1"
                className="text-[22px] font-sans capitalize leading-[1.5] text-white font-normal text-opacity-[0.63]"
              >
                64000-128000 USDT
              </Typography>
              <Typography
                variant="body1"
                className="text-[22px] font-sans capitalize leading-[1.5] text-white font-normal text-opacity-[0.63]"
              >
                +16%
              </Typography>
            </Box>
            <Box className="flex justify-between mt-4">
              <Typography
                variant="body1"
                className="text-[22px] font-sans capitalize leading-[1.5] text-white font-normal text-opacity-[0.63]"
              >
                Greater than 128000 USDT
              </Typography>
              <Typography
                variant="body1"
                className="text-[22px] font-sans capitalize leading-[1.5] text-white font-normal text-opacity-[0.63]"
              >
                +20%
              </Typography>
            </Box>

            <img
              src="https://tanukilaunchpad.com/assets/dcoin-rE-soUCZ.png"
              className="w-[200px] max-w-full bottom-[-18%] right-[25%] absolute"
            />
          </Box>
        </Box>

        <Grid container spacing={5} className="mt-[120px] items-center">
          <Grid item xs={12} md={6} className="pt-10 pl-10">
            <Typography
              variant="body1"
              className="text-[40px] font-sans capitalize leading-[1.5] text-white font-bold"
            >
              Marketing Rewards
            </Typography>
            <Typography
              variant="body1"
              className="text-[22px] font-sans capitalize leading-[1.5] text-white font-normal text-opacity-[0.63]"
            >
              Get Rewarded for Marketing
              <br /> $Tanukilaunchpad to Your Audience 🚀
            </Typography>
            <Box className="flex mt-10">
              <Box className="gr-line" />
              <Box className="pl-4">
                <Box className="circular-number-box">
                  <Box className="circular-number-box-inner font-sans">1</Box>
                </Box>
                <Typography
                  variant="body1"
                  className="text-[24px] font-sans capitalize leading-[1.5] text-white font-normal text-opacity-[0.63] pt-4 max-w-[304px]"
                >
                  Start now and get a unique referral link by connecting your
                  wallet
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} className="pt-10 pl-10">
            <img
              className="max-w-full w-[98%]"
              src="https://tanukilaunchpad.com/assets/trophy-C7j0fVop.png"
            />
          </Grid>
          <Grid item xs={12} md={6} className="mt-10">
            <Box className="flex">
              <Box className="gr-line" />
              <Box className="pl-4">
                <Box className="circular-number-box">
                  <Box className="circular-number-box-inner font-sans">2</Box>
                </Box>
                <Typography
                  variant="body1"
                  className="text-[24px] font-sans capitalize leading-[1.5] text-white font-normal text-opacity-[0.63] pt-4 max-w-[486px]"
                >
                  Using your marketing strategies, promote your referral link
                  Invite friends and family to Tanuki and more reward in dollars
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} className="mt-10">
            <Box className="flex">
              <Box className="gr-line" />
              <Box className="pl-4">
                <Box className="circular-number-box">
                  <Box className="circular-number-box-inner font-sans">3</Box>
                </Box>
                <Typography
                  variant="body1"
                  className="text-[24px] font-sans capitalize leading-[1.5] text-white font-normal text-opacity-[0.63] pt-4 max-w-[393px]"
                >
                  You will get USDT bonuses for each referral which uses your
                  link to purchase $Tanuki
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={5} className="mt-10 pb-20">
          <Grid item xs={12} md={6} className="pt-10 pl-10">
            <img
              className="max-w-full w-[95%]"
              src="https://tanukilaunchpad.com/assets/starcoin-hp6XA7lv.png"
            />
          </Grid>
          <Grid item xs={12} md={6} className="pt-10 pl-10">
            <Typography
              variant="body1"
              className="text-[40px] font-sans capitalize leading-[1.5] text-white font-bold"
            >
              Details about
              <br />
              our referral program
            </Typography>
            <Typography
              variant="body1"
              className="text-[24px] font-sans capitalize leading-[1.5] text-white font-normal text-opacity-[0.63] mt-8"
            >
              ● More friends And family = more rewards.
            </Typography>
            <Typography
              variant="body1"
              className="text-[24px] font-sans capitalize leading-[1.5] text-white font-normal text-opacity-[0.63] mt-8"
            >
              ● The more they purchase, the more rewards you get.
            </Typography>
            <Typography
              variant="body1"
              className="text-[24px] font-sans capitalize leading-[1.5] text-white font-normal text-opacity-[0.63] mt-8"
            >
              ● Get a commission of up to 15% on all holders attracted.
            </Typography>
            <Typography
              variant="body1"
              className="text-[24px] font-sans capitalize leading-[1.5] text-white font-normal text-opacity-[0.63] mt-8"
            >
              ● Review detailed stats in your profile to adjust your referral
              strategy. Withdrawals available starting from 100 USDT
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ReferralPage;
