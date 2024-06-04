"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Marquee from "react-fast-marquee";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import RoadMapCard from "@/components/RoadMapCard";
import SwiperNav from "@/components/SwiperNav";

const roadmap = [
  {
    title: "Preparation",
    description:
      "- Website & Smart Contract Testing: Conduct comprehensive testing of our website and smart contracts, ensuring both security and functionality.- Social Media Creation: Establish a robust social media presence, engaging with our community on platforms such as Twitter, Telegram, and more.",
  },
  {
    title: "Phase 1: Foundation",
    description:
      "- Contract Audit: Prioritize security with a comprehensive audit to ensure the integrity of our systems.<br>-Global Visibility: Launch impactful marketing campaigns on prominent platforms like YouTube, X, and Telegram.<br>-Token Presale on Launchpad: Initiate the launchpad token sale on our platform.<br>-Listing on DEX &amp; CEX: Secure a listing on a centralized exchange to broaden our reach.<br>-Staking Platform Launch: Introduce a robust staking platform, empowering the community to participate and earn rewards.",
  },
  {
    title: "Phase 2:  Expansion",
    description:
      "- Strong Partnerships: Forge strategic partnerships to strengthen our ecosystem.<br>-Tanuki Launchpad Release: Unveil the Tanuki Launchpad, laying the foundation for innovative projects.<br>- Application Acceptance for Launchpad Projects: Open doors for project applications, fostering a diverse and vibrant ecosystem.",
  },
  {
    title: "Phase 3: Assurance",
    description:
      "- Audit: Conduct regular audits to maintain the security and reliability of our systems.<br>-$TANUPAD LaunchPad Expansion: Extend support for all non-EVM chains like SEI, SUI, and more.<br>-Strong Worldwide Marketing: Expand our outreach globally, establishing Tanuki as a recognized and vibrant presence in the crypto space.",
  },
  {
    title: "Phase 4: Integration",
    description:
      "-lntegration of SUI and SEI Networks in $TANUPAD Launchpad IDOs: Optimize business structure to generate new revenue.<br>-Buyback &amp; Burn of $TANUPAD Tokens<br>-$TANUPAD on-boards new blockchain ecosystems: Explore integration with Metis and other emerging networks.<br>-$TANUPAD DAO Support: Introduce community governance and $TANUPAD Vaults.<br>-Tanuki Launchpad Swap Launch: Unveil Tanuki's decentralized exchange, offering a new dimension to our ecosystem.",
  },
];
const Index = () => {
  const [swiper, setSwiper] = useState(null);

  return (
    <>
      {/* Hero Section */}
      <Box id="home">
        <Container maxWidth="lg">
          <Grid container>
            <img
              src="/assets/star_1.png"
              className="max-w-full w-[86px]"
              alt="star1"
            />
            {/* Add missing raccoon logo */}
            <Typography
              variant="body1"
              className="text-[55px] font-bold text-white text-center font-sans capitalize leading-[1.5] tracking-[0.00938em]"
            >
              Tanuki, the cheeky crypto project on the Solana chain
            </Typography>
          </Grid>
          <Grid container>
            <Box className="mt-2 w-full relative">
              <Box className="w-[852px] max-w-full text-center mx-auto">
                <Typography
                  variant="body1"
                  className="text-[#e5e5e5] text-center font-sans font-bold text-base  leading-[1.5] tracking-[0.00938em] "
                >
                  With a total supply of 2 billion token. In the mystical world
                  of Tanuki, where raccoon dogs rule the blockchain, we're not
                  just about memes; we're pioneers of hilarity in the crypto
                  cosmos. Prepare for a wild ride as we redefine the meme game
                  and bring joy to the community like never before. But that's
                  not all! Tanuki boasts.
                </Typography>

                <Typography
                  variant="body1"
                  className="text-[#e5e5e5] text-center font-sans font-bold text-base leading-[1.5] tracking-[0.00938em] mt-5"
                >
                  A launchpad that supports
                  Solana,Ethereum,BNB,Avalanch,Arbitrum,SEI, SUI, Cardano, and
                  Metis blockchains – because diversity is our middle name, or
                  at least it should be.
                </Typography>
              </Box>
              <img
                src="/assets/star_2.png"
                className="max-w-full w-[86px] absolute right-0 top-3"
                alt="star2"
              />
            </Box>
          </Grid>
        </Container>
        <Container maxWidth="xl">
          <Grid container alignItems={"center"} justifyContent={"center"}>
            <Grid xs={12} md={6}>
              <img
                src="https://tanukilaunchpad.com/assets/dog-953LSZDO.png"
                width="100%"
                alt=""
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Our Utilities Section */}
      <Box id="utilities" className="py-4">
        <Container maxWidth="lg">
          {/* Add a grid to structure your content */}
          <Grid container spacing={5} alignItems={"center"}>
            {/* Title */}
            <Grid item xs={12} md={5}>
              <Typography
                variant="body1"
                className="text-[70px] font-bold font-sans text-center text-white"
              >
                Our Utilities
              </Typography>
            </Grid>
            {/* Launch */}
            <Grid item xs={12} md={7}>
              <Box className="flex items-center utility-box relative">
                <img
                  src="https://tanukilaunchpad.com/assets/rocket-UtJZshGO.png"
                  className="max-w-full w-[250px] h-full -mt-16 -ml-16"
                  alt=""
                />

                <Box className="ml-2">
                  <Typography
                    variant="body1"
                    className="text-white font-sans font-semibold text-[60px]"
                  >
                    Launch
                  </Typography>
                  <Typography
                    variant="body1"
                    className="text-[#d2d2d2] text-base leading-[1.5] font-sans font-normal"
                  >
                    We're the Tanukilaunchpad platform, the first to support
                    various blockchains like Solana, Sui, Sei, Metis, ADA, AVAX,
                    But we will now start working on the Ethereum, BNB Smart
                    Chain,Polygon Avalanche, and Solana at the present time.Stay
                    tuned for more details soon.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            {/* Insure */}

            <Grid item xs={12} md={7}>
              <Box className="flex items-center utility-box relative">
                <img
                  src="https://tanukilaunchpad.com/assets/Lock-vQ-9qxsC.png"
                  className="max-w-full w-[250px] h-full -mt-20 -ml-16"
                  alt=""
                />
                <Box ml={3}>
                  <Typography
                    variant="body1"
                    className="text-white font-sans font-semibold text-[60px]"
                  >
                    Insure
                  </Typography>
                  <Typography
                    variant="body1"
                    className="text-[#d2d2d2] text-base leading-[1.5] font-sans font-normal"
                  >
                    The safety of our investors is our first priority so we have
                    setup systems to help control participation in launchpads
                    and prevents possible dumps, we also have systems that
                    safeguards project launches from potential rug pulls.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={5} alignItems={"center"} className="pt-10">
            {/* Staking */}
            <Grid item xs={12} md={7} className="ml-auto">
              <Box className="flex items-center utility-box relative">
                <img
                  src="https://tanukilaunchpad.com/assets/bar-QKK9Vvw6.png"
                  className="max-w-full w-[250px] h-full -ml-10"
                  alt=""
                />

                <Box ml={3}>
                  <Typography
                    variant="body1"
                    className="text-white font-sans font-semibold text-[60px]"
                  >
                    Staking
                  </Typography>
                  <Typography
                    variant="body1"
                    className="text-[#d2d2d2] text-base leading-[1.5] font-sans font-normal"
                  >
                    Tanuki staking mechanism: By staking Tanuki, holders
                    effectively bolster the network's security and, in return,
                    reap staking rewards over time.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={5} alignItems={"center"} className="pt-10">
            {/* Farm */}
            <Grid item xs={12} md={7}>
              <Box className="flex items-center utility-box relative">
                <img
                  src="https://tanukilaunchpad.com/assets/fly-ZVBUVhWr.png"
                  className="max-w-full w-[250px] h-full -ml-20 -mt-24"
                  alt=""
                />

                <Box ml={3}>
                  <Typography
                    variant="body1"
                    className="text-white font-sans font-semibold text-[60px]"
                  >
                    Farm
                  </Typography>
                  <Typography
                    variant="body1"
                    className="text-[#d2d2d2] text-base leading-[1.5] font-sans font-normal"
                  >
                    Tanuki farms allows users to earn rewards by staking their
                    cryptocurrency tokens
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Box mt={5}>
            <img
              src="https://tanukilaunchpad.com/assets/partners-aY69gFvH.png"
              width="100%"
              alt=""
            />
          </Box>
        </Container>
      </Box>

      {/* Token Allocation Section */}
      <Box id="tokenomics" className="py-4">
        <Container maxWidth="lg">
          <Typography
            variant="body1"
            className="text-center text-white text-[70px] font-sans font-bold mb-10"
          >
            Token Allocation
          </Typography>
          <Box display="flex" justifyContent="center" mb={3}>
            <img
              src="https://tanukilaunchpad.com/assets/token-cfL_5-VH.png"
              width="80%"
              alt=""
            />
          </Box>
          <Typography
            variant="body1"
            className="font-bold font-sans text-[#1c6cff] text-[36px] leading-[1.5] text-center my-10"
          >
            All minting and freezing features are removed from contract. So ,
            owner can’t control anything within contract. All rights for owner
            is waived in Tanuki token
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Box
                component="a"
                href="https://github.com/solidproof/projects/tree/main/2024/Tanuki"
                target="_blank"
              >
                <Box className="flex items-center justify-center gap-10">
                  <img
                    src="https://tanukilaunchpad.com/assets/part30-a8K-te8P.png"
                    className="max-w-full w-[130px]"
                    alt=""
                  />
                  <Typography
                    variant="body1"
                    className="text-white font-sans text-[70px] leading-[1.5] font-bold"
                  >
                    Audit
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="a"
                href="https://skynet.certik.com/zh-CN/projects/tanuki"
                target="_blank"
              >
                <Box className="flex items-center justify-center">
                  <img
                    src="https://tanukilaunchpad.com/assets/certik-bIKJ2Djc.png"
                    width="100%"
                    alt=""
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Press Release Section */}
      <Box className="py-4">
        <Container maxWidth="lg" className="mb-8 mt-20">
          <Typography
            variant="body1"
            className="text-white text-center font-sans text-[70px] font-bold leading-[1.5]"
          >
            Press Release
          </Typography>
        </Container>
        {/* News Marquee */}
        <Marquee pauseOnHover>
          <Box
            component="a"
            href="https://skynet.certik.com/zh-CN/projects/tanuki"
            target="_blank"
          >
            <Box className="flex items-center justify-center">
              <img
                src="/assets/news-1.svg"
                className="w-[130px] max-w-full mr-8"
                alt=""
              />
            </Box>
          </Box>
          <Box
            component="a"
            href="https://skynet.certik.com/zh-CN/projects/tanuki"
            target="_blank"
          >
            <Box className="flex items-center justify-center">
              <img
                src="/assets/news-2.png"
                className="w-[130px] max-w-full mr-8"
                alt=""
              />
            </Box>
          </Box>
          <Box
            component="a"
            href="https://skynet.certik.com/zh-CN/projects/tanuki"
            target="_blank"
          >
            <Box className="flex items-center justify-center">
              <img
                src="/assets/news-3.png"
                className="w-[130px] max-w-full mr-8"
                alt=""
              />
            </Box>
          </Box>
          <Box
            component="a"
            href="https://skynet.certik.com/zh-CN/projects/tanuki"
            target="_blank"
          >
            <Box className="flex items-center justify-center">
              <img
                src="/assets/news-4.svg"
                className="w-[130px] max-w-full mr-8"
                alt=""
              />
            </Box>
          </Box>
          <Box
            component="a"
            href="https://skynet.certik.com/zh-CN/projects/tanuki"
            target="_blank"
          >
            <Box className="flex items-center justify-center">
              <img
                src="/assets/news-5.svg"
                className="w-[130px] max-w-full mr-8"
                alt=""
              />
            </Box>
          </Box>
          <Box
            component="a"
            href="https://skynet.certik.com/zh-CN/projects/tanuki"
            target="_blank"
          >
            <Box className="flex items-center justify-center">
              <img
                src="/assets/news-6.webp"
                className="w-[130px] max-w-full mr-8"
                alt=""
              />
            </Box>
          </Box>
          <Box
            component="a"
            href="https://skynet.certik.com/zh-CN/projects/tanuki"
            target="_blank"
          >
            <Box className="flex items-center justify-center">
              <img
                src="/assets/news-7.svg"
                className="w-[130px] max-w-full mr-8"
                alt=""
              />
            </Box>
          </Box>
          <Box
            component="a"
            href="https://skynet.certik.com/zh-CN/projects/tanuki"
            target="_blank"
          >
            <Box className="flex items-center justify-center">
              <img
                src="/assets/news-8.svg"
                className="w-[130px] max-w-full mr-8"
                alt=""
              />
            </Box>
          </Box>
          <Box
            component="a"
            href="https://skynet.certik.com/zh-CN/projects/tanuki"
            target="_blank"
          >
            <Box className="flex items-center justify-center">
              <img
                src="/assets/news-9.svg"
                className="w-[130px] max-w-full mr-8"
                alt=""
              />
            </Box>
          </Box>
        </Marquee>
        <Marquee pauseOnHover direction="right" className="mt-4">
          <Box
            component="a"
            href="https://skynet.certik.com/zh-CN/projects/tanuki"
            target="_blank"
          >
            <Box className="flex items-center justify-center">
              <img
                src="/assets/news-1.svg"
                className="w-[130px] max-w-full mr-8"
                alt=""
              />
            </Box>
          </Box>
          <Box
            component="a"
            href="https://skynet.certik.com/zh-CN/projects/tanuki"
            target="_blank"
          >
            <Box className="flex items-center justify-center">
              <img
                src="/assets/news-10.svg"
                className="w-[130px] max-w-full mr-8"
                alt=""
              />
            </Box>
          </Box>
          <Box
            component="a"
            href="https://skynet.certik.com/zh-CN/projects/tanuki"
            target="_blank"
          >
            <Box className="flex items-center justify-center">
              <img
                src="/assets/news-11.svg"
                className="w-[130px] max-w-full mr-8"
                alt=""
              />
            </Box>
          </Box>
          <Box
            component="a"
            href="https://skynet.certik.com/zh-CN/projects/tanuki"
            target="_blank"
          >
            <Box className="flex items-center justify-center">
              <img
                src="/assets/news-12.svg"
                className="w-[130px] max-w-full mr-8"
                alt=""
              />
            </Box>
          </Box>
          <Box
            component="a"
            href="https://skynet.certik.com/zh-CN/projects/tanuki"
            target="_blank"
          >
            <Box className="flex items-center justify-center">
              <img
                src="/assets/news-13.svg"
                className="w-[130px] max-w-full mr-8"
                alt=""
              />
            </Box>
          </Box>
          <Box
            component="a"
            href="https://skynet.certik.com/zh-CN/projects/tanuki"
            target="_blank"
          >
            <Box className="flex items-center justify-center">
              <img
                src="/assets/news-14.svg"
                className="w-[130px] max-w-full mr-8"
                alt=""
              />
            </Box>
          </Box>
          <Box
            component="a"
            href="https://skynet.certik.com/zh-CN/projects/tanuki"
            target="_blank"
          >
            <Box className="flex items-center justify-center">
              <img
                src="/assets/news-15.svg"
                className="w-[130px] max-w-full mr-8"
                alt=""
              />
            </Box>
          </Box>
          <Box
            component="a"
            href="https://skynet.certik.com/zh-CN/projects/tanuki"
            target="_blank"
          >
            <Box className="flex items-center justify-center">
              <img
                src="/assets/news-16.svg"
                className="w-[130px] max-w-full mr-8"
                alt=""
              />
            </Box>
          </Box>
          <Box
            component="a"
            href="https://skynet.certik.com/zh-CN/projects/tanuki"
            target="_blank"
          >
            <Box className="flex items-center justify-center">
              <img
                src="/assets/news-17.svg"
                className="w-[130px] max-w-full mr-8"
                alt=""
              />
            </Box>
          </Box>
        </Marquee>
        <Container maxWidth="lg" className="my-10 mt-32">
          <Typography
            variant="body1"
            className="text-center font-bold font-sans text-[70px] text-white mb-5"
          >
            CEX LISTING PARTNERS
          </Typography>
          <Grid container spacing={3}>
            {/* Replace placeholders with actual CEX partner links and images */}
            {[
              {
                href: "https://twitter.com/LBank_Exchange/status/1773712494110064958?t=9qwH4AyQfKfUJz9vtvqe5g&s=19",
                src: "https://tanukilaunchpad.com/assets/lbank-wMuJdWJO.png",
                alt: "LBank",
              },
              {
                href: "https://twitter.com/latokens/status/1782479476166709532?t=ZQ6PsHrphbSp5rqU28GlfQ&s=19",
                src: "https://tanukilaunchpad.com/assets/Latoken-j1MV8Gc-.png",
                alt: "Latoken",
              },
              {
                href: "https://twitter.com/XT_updates/status/1777158044532797444?t=MMeSdDdVbe34WPG7vNVlQg&s=19",
                src: "https://tanukilaunchpad.com/assets/xt-ynkffqnB.png",
                alt: "XT.com",
              },
              {
                href: "https://cryptorank.io/earn/quests/tanuki-raffle",
                src: `data:image/svg+xml,%3csvg%20width='135'%20height='22'%20viewBox='0%200%20135%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M23.411%204.488V7.04h-.804c-2.504%200-4.114%201.761-4.114%204.403v5.987h-2.772V4.664h2.772v3.258c.448-1.937%201.7-3.522%204.114-3.522.268%200%20.536%200%20.804.088zM38.62%204.657L33.2%2017.422%2031.156%2022H28.49l2.133-4.754-5.332-12.59h2.755l3.821%209.42%203.91-9.507h2.843v.088zM54.513%2011c0%204.4-3.198%206.6-6.218%206.6-2.309%200-3.996-1.232-4.44-2.288h-.09V22h-2.752V4.664h2.753v2.024h.089c.444-.968%202.131-2.288%204.44-2.288%203.109%200%206.218%202.2%206.218%206.6zm-2.665%200c0-2.728-2.043-4.136-4.085-4.136-2.043%200-4.086%201.408-4.086%204.136s2.043%204.136%204.086%204.136c2.131%200%204.085-1.408%204.085-4.136zM60.829%206.8v6.941c0%20.703.355%201.318%201.418%201.318.266%200%20.709-.088%201.152-.264v2.109c-.443.351-1.33.527-2.038.527-1.95%200-3.367-.966-3.367-3.25V6.8H56.22V4.605h1.773V1.354h2.746v3.25h2.57v2.197h-2.481zM65.62%2011c0-4.312%203.355-6.6%206.62-6.6%203.355%200%206.71%202.288%206.71%206.6%200%204.312-3.355%206.6-6.71%206.6-3.265%200-6.62-2.288-6.62-6.6zm10.593%200c0-2.64-1.854-4.136-3.972-4.136-2.119%200-3.972%201.496-3.972%204.136s1.941%204.136%203.972%204.136c2.03%200%203.972-1.496%203.972-4.136zM89.374%204.488V7.04h-.805c-2.504%200-4.114%201.761-4.114%204.403v5.987h-2.771V4.664h2.772v3.258c.447-1.937%201.698-3.522%204.113-3.522.268%200%20.536%200%20.805.088zM119.449%209.944v7.486h-2.748v-7.045c0-2.202-1.241-3.435-3.103-3.435s-3.192%201.233-3.192%203.435v7.045h-2.748V4.748h2.748v1.938c.71-1.145%202.039-2.114%204.078-2.114%202.749-.088%204.965%201.585%204.965%205.372zM127.246%2012.237l-1.784%201.937v3.257h-2.766V0h2.766v10.652l5.442-5.986h3.301l-5.264%205.722%205.888%207.043h-3.122l-4.461-5.194zM104.924%2010.899V4.327h-2.753v2.037h-.089c-.444-1.063-2.132-2.302-4.44-2.302-3.02%200-6.218%202.213-6.218%206.64s3.197%206.64%206.217%206.729c.321%200%20.63-.026.925-.073.556-.341%201.17-.886%201.903-1.713-.437-.066-.79-.113-1.09-.154-1.055-.142-1.489-.201-2.758-.653-.646-.23-1.788-1.252-2.13-2.212-.255-.545-.403-1.186-.403-1.924%200-2.745%202.043-4.161%204.086-4.161s4.086%201.416%204.086%204.16l-.001.088c1.002.034%201.939.075%202.665.11z'%20fill='%230587FF'/%3e%3cpath%20d='M100.686%2018.445l-.538-.522%202.332-2.526-2.512-2.352.539-.522%203.05%202.874-2.871%203.048z'%20fill='%230587FF'%20stroke='%230587FF'%20stroke-width='1.196'%20stroke-miterlimit='10'/%3e%3cpath%20d='M5.542%2015.03c-.626-.238-1.273-.595-1.735-1.125a4.457%204.457%200%2001-1.062-2.904c0-2.64%201.86-4.137%203.984-4.137%201.063%200%202.125.352%202.834%201.144.21.21.38.427.516.648l.498-.188c.69-.26%201.379-.521%202.069-.787C11.446%205.524%209.088%204.4%206.729%204.4%203.365%204.4%200%206.688%200%2011c0%204.243%203.256%206.527%206.565%206.6.58-.49%201.24-1.155%201.732-1.652l.341-.344c-1.14%200-2.28-.191-3.096-.574z'%20fill='%230587FF'/%3e%3cpath%20d='M8.75%2018.784l-.539-.522%202.333-2.526-2.512-2.352.538-.523%203.05%202.875-2.87%203.048z'%20fill='%230587FF'%20stroke='%230587FF'%20stroke-width='1.196'%20stroke-miterlimit='10'/%3e%3c/svg%3e`,
                // Replace with Cryptorank logo
                alt: "Cryptorank",
              },
            ].map((partner, index) => (
              <Grid item xs={12} md={3} key={index}>
                <Box
                  component="a"
                  href={partner.href}
                  target="_blank"
                  sx={{
                    textDecoration: "none",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img src={partner.src} width="80%" alt={partner.alt} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Roadmap Section */}
      <Box id="roadmap" className="py-4">
        <Container maxWidth="xl">
          <Typography
            variant="body1"
            className="text-center font-bold font-sans text-[70px] text-white mb-5"
          >
            Roadmap
          </Typography>
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            modules={[Navigation]}
            navigation
            onSwiper={(sw) => {
              setSwiper(sw);
            }}
          >
            {roadmap.map((item, key) => (
              <SwiperSlide key={key}>
                <RoadMapCard
                  title={item.title}
                  description={item.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <SwiperNav swiper={swiper} />
        </Container>
      </Box>

      {/* Our Team Section */}
      <Box id="team" className="py-4">
        <Container maxWidth="lg">
          <Typography
            variant="body1"
            className="text-center font-bold font-sans text-[70px] text-white mb-5"
          >
            Our Team
          </Typography>
          <Grid container spacing={10} justifyContent={"center"}>
            {/* Replace placeholders with actual team member images */}
            {[
              "https://tanukilaunchpad.com/assets/team1-OgyfcjpZ.png",
              "https://tanukilaunchpad.com/assets/team2-p-2O1CxF.png",
              "https://tanukilaunchpad.com/assets/team3-MREqHPUV.png",
              "https://tanukilaunchpad.com/assets/team4-tKrmFPuM.png",
              "https://tanukilaunchpad.com/assets/team5-pthjmjsc.png",
              "https://tanukilaunchpad.com/assets/team6-ygftDEtl.png",
              "https://tanukilaunchpad.com/assets/team7-toB77axC.png",
              // Add more team member images
            ].map((image, index) => (
              <Grid item xs={6} md={4} key={index}>
                <img
                  src={image}
                  width="100%"
                  alt={`Team Member ${index + 1}`}
                />
              </Grid>
            ))}
          </Grid>
          <Box display="flex" justifyContent="center" mt={5}>
            <Button
              variant="text"
              color="primary"
              href="https://t.me/TanukilaunchpadOffice"
              className="h-[43px] rounded-[14px] w-[200px] text-white bg-[#1C6CFF]"
            >
              Telegram CEO
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Our Partners Section */}
      <Box id="partner" className="py-4">
        <Container maxWidth="lg">
          <Typography
            variant="body1"
            className="text-center font-bold font-sans text-[70px] text-white mb-5"
          >
            Our Partners
          </Typography>
          <Grid
            container
            spacing={3}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {/* Replace placeholders with actual partner images */}
            {[
              "https://tanukilaunchpad.com/assets/part1-p0JpoDd8.png",
              "https://tanukilaunchpad.com/assets/part2-EWHxHfdc.png",
              "https://tanukilaunchpad.com/assets/part3-_HwwWN_e.png",
              "https://tanukilaunchpad.com/assets/part4-QeKgN-AT.png",
              "https://tanukilaunchpad.com/assets/part5-76XmWDvE.png",
              "https://tanukilaunchpad.com/assets/part6-qVJi5DfX.png",
              "https://tanukilaunchpad.com/assets/part7-y7LTrRaV.png",
              "https://tanukilaunchpad.com/assets/part8-zvlWmE-q.png",
              "https://tanukilaunchpad.com/assets/part9-HBMBZI3E.png",
              "https://tanukilaunchpad.com/assets/part10-c72IltBp.png",
              "https://tanukilaunchpad.com/assets/part11-De0W9kCG.png",
              "https://tanukilaunchpad.com/assets/part12-gckLe92Y.png",
              "https://tanukilaunchpad.com/assets/part13-vdxJWYzJ.png",
              "https://tanukilaunchpad.com/assets/partcat---JIWhBm.png",
              "https://tanukilaunchpad.com/assets/part14-tFIbidnZ.png",
              "https://tanukilaunchpad.com/assets/part15-wcNyj6uJ.png",
              "https://tanukilaunchpad.com/assets/part16---C9wQZZ.png",
              "https://tanukilaunchpad.com/assets/part17-nbgLVe9U.png",
              "https://tanukilaunchpad.com/assets/part18--P0Wwm__.png",
              "https://tanukilaunchpad.com/assets/part19-v0DrcePD.png",
              "https://tanukilaunchpad.com/assets/part20-SkiRfluJ.png",
              "https://tanukilaunchpad.com/assets/part21-zhyfMsiz.png",
              "https://tanukilaunchpad.com/assets/part22-6WTfSsqR.png",
              "https://tanukilaunchpad.com/assets/part23-iBJ5RMYB.png",
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAABOCAYAAAD7LgnSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAToSURBVHgB7d1PaFxVFMfx895kbNM2bZqIrrJw41okqItkMZiZgQQScBEQozsFKbiL/YNtY1EEcWWlKy2FoNVshCwmmcmESchChCIusgsYdJFstOk0ycRMJzOeCyrS1EVfc04sfj8w3DeBcN/993uP2ZyoVCoVRSQnOAjf5nK5VySBubm571qt1kvi42u9z1fFiY4rKpfLt7R9XnxM6vjekAT0PHyvzQviQOfjq3w+/5o4Ceug++wHvXxOHMRxfCPWNis4KC9LApVK5YRjuAQD4qhYLJ52DJcg0TpMTU2dEqdwCaIocl2HmZmZJ8UpXIJms5kNARMJDkosCezs7CT6v0fg2l+9XnftT8MsUX/pdNr7LLjOSyqV8h5f5L2xAfyPEDAAzBAwAMwQMADMEDAAzBAwAMwQMADMEDAAzBAwAMwQMADMEDAAzBAwAMwQMADMEDAAzBAwAMwQMADMEDAAzBAwAMwQMADMEDAAzBAwAMwQMDC3vr5e1aYqTuI4/lkS6Ozs3NLmtvhJdJ9J7e3tVVut1l3x80ub+KvrIH+KomhTDGkfKe3DsxbPY0PnJl0sFl8UB41GY29oaOiW9jem63FW/3REDOnY7jSbzXFJIJPJNEql0ut6eV7s77OqB/7dSqVyVOfoGf2cEEOpVOpeLpf7cX5+fiz0K8bjUxsa9OORTmhLHOnEnsnn89fEgW7qc7qpPxI/W7qIHfKQCoXCyba2NrcnvDddg4vZbPYDwT56/ia1GRMHevbG9ex9Io68C2I1NT2/ED9XBYdO3yjOCPYpl8vd2riVjtWgf0ecuQaMDrA5ODi4K07W1tb2BIdO153f+h5AH7Yp8a2smhJnLDwAMwQMADMEDAAzBAwAMwQMADMEDAAzBAwAMwQMADMEDAAzBAwAMwQMADMEDAAzBAwAMwQMADMEDAAzBAwAMwQMADMEDAAzBAwAMwQMADMEDAAz3gGTKhQK1gWf/tbd3f2U4L/gV8E+1Wo1FB/0rEv2mzjzruwYpdPpT2dnZ8/X6/XfxVBHR8cx7eOs4EFaakscRFF0Vz8fhutKpRL2m+meW1xcbExMTDTkEXjd5+jo6E6pVDqnXy/oelg/eO/oOnwcLrSvtoWFBZd1cK/s+KdQxdC0PpJO4lGd0JPi63Gp7Hg7juNnxUGtVtsZHh6u6T67qF/f0k9aDOmah9Kxl/P5/DeSgN7nBW3eFof71D36vu6Xm0tLS6d3d3efEEPb29u1kZGRzWKxeFn7flPsXy429HPpMGpTB6fEmE6i4N8NDAy4vS5PT08f0+aSOLwx66F9Wtf+il4+dMCsrKwcWV1dnRDjcAnCfWoTyune7O/v3xAHGi7H9cHyXniDEXthfFf4kRceQsC4Pcz0ACV6c11eXm4Xh3D5B+837ONO4fKXkwQMADMEDAAzBAwAMwQMADMEDAAzBAwAMwQMADMEDAAzBAwAMwQMADMEDAAzBAwAMwQMADMEDAAzBAwAMwQMADMEDAAzBAwAMwQMADMEDAAzBAwAMyFg7gkOSqJaT+3t7XVtmuLHtOjd/bq6usK8uNXfiqIo0Tr09PSEdfCsE2ZaG+x+cRzv6ty4ji8EzFXBQflcEshkMuHAfyZOdJNdE0d9fX2b2uek+LkuCfT29ta0uSFOdE4S7ZekstlstdVqfSlOtK/rfwAcUnt7kYTlnwAAAABJRU5ErkJggg==",
              "https://tanukilaunchpad.com/assets/part25-gmFOZPCW.png",
              "https://tanukilaunchpad.com/assets/part26-bSo0Q6Zx.png",
              "https://tanukilaunchpad.com/assets/part27-irXUtcIO.png",
              "https://tanukilaunchpad.com/assets/part28-UwHUw4n_.png",
              "https://tanukilaunchpad.com/assets/part29-fWcll7Ue.png",
              "https://tanukilaunchpad.com/assets/part30-a8K-te8P.png",
              "https://tanukilaunchpad.com/assets/part31-U_REyvIU.png",
              "https://tanukilaunchpad.com/assets/part35-s5zgj4PI.png",
              "data:image/svg+xml,%3csvg%20width='135'%20height='22'%20viewBox='0%200%20135%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M23.411%204.488V7.04h-.804c-2.504%200-4.114%201.761-4.114%204.403v5.987h-2.772V4.664h2.772v3.258c.448-1.937%201.7-3.522%204.114-3.522.268%200%20.536%200%20.804.088zM38.62%204.657L33.2%2017.422%2031.156%2022H28.49l2.133-4.754-5.332-12.59h2.755l3.821%209.42%203.91-9.507h2.843v.088zM54.513%2011c0%204.4-3.198%206.6-6.218%206.6-2.309%200-3.996-1.232-4.44-2.288h-.09V22h-2.752V4.664h2.753v2.024h.089c.444-.968%202.131-2.288%204.44-2.288%203.109%200%206.218%202.2%206.218%206.6zm-2.665%200c0-2.728-2.043-4.136-4.085-4.136-2.043%200-4.086%201.408-4.086%204.136s2.043%204.136%204.086%204.136c2.131%200%204.085-1.408%204.085-4.136zM60.829%206.8v6.941c0%20.703.355%201.318%201.418%201.318.266%200%20.709-.088%201.152-.264v2.109c-.443.351-1.33.527-2.038.527-1.95%200-3.367-.966-3.367-3.25V6.8H56.22V4.605h1.773V1.354h2.746v3.25h2.57v2.197h-2.481zM65.62%2011c0-4.312%203.355-6.6%206.62-6.6%203.355%200%206.71%202.288%206.71%206.6%200%204.312-3.355%206.6-6.71%206.6-3.265%200-6.62-2.288-6.62-6.6zm10.593%200c0-2.64-1.854-4.136-3.972-4.136-2.119%200-3.972%201.496-3.972%204.136s1.941%204.136%203.972%204.136c2.03%200%203.972-1.496%203.972-4.136zM89.374%204.488V7.04h-.805c-2.504%200-4.114%201.761-4.114%204.403v5.987h-2.771V4.664h2.772v3.258c.447-1.937%201.698-3.522%204.113-3.522.268%200%20.536%200%20.805.088zM119.449%209.944v7.486h-2.748v-7.045c0-2.202-1.241-3.435-3.103-3.435s-3.192%201.233-3.192%203.435v7.045h-2.748V4.748h2.748v1.938c.71-1.145%202.039-2.114%204.078-2.114%202.749-.088%204.965%201.585%204.965%205.372zM127.246%2012.237l-1.784%201.937v3.257h-2.766V0h2.766v10.652l5.442-5.986h3.301l-5.264%205.722%205.888%207.043h-3.122l-4.461-5.194zM104.924%2010.899V4.327h-2.753v2.037h-.089c-.444-1.063-2.132-2.302-4.44-2.302-3.02%200-6.218%202.213-6.218%206.64s3.197%206.64%206.217%206.729c.321%200%20.63-.026.925-.073.556-.341%201.17-.886%201.903-1.713-.437-.066-.79-.113-1.09-.154-1.055-.142-1.489-.201-2.758-.653-.646-.23-1.788-1.252-2.13-2.212-.255-.545-.403-1.186-.403-1.924%200-2.745%202.043-4.161%204.086-4.161s4.086%201.416%204.086%204.16l-.001.088c1.002.034%201.939.075%202.665.11z'%20fill='%230587FF'/%3e%3cpath%20d='M100.686%2018.445l-.538-.522%202.332-2.526-2.512-2.352.539-.522%203.05%202.874-2.871%203.048z'%20fill='%230587FF'%20stroke='%230587FF'%20stroke-width='1.196'%20stroke-miterlimit='10'/%3e%3cpath%20d='M5.542%2015.03c-.626-.238-1.273-.595-1.735-1.125a4.457%204.457%200%2001-1.062-2.904c0-2.64%201.86-4.137%203.984-4.137%201.063%200%202.125.352%202.834%201.144.21.21.38.427.516.648l.498-.188c.69-.26%201.379-.521%202.069-.787C11.446%205.524%209.088%204.4%206.729%204.4%203.365%204.4%200%206.688%200%2011c0%204.243%203.256%206.527%206.565%206.6.58-.49%201.24-1.155%201.732-1.652l.341-.344c-1.14%200-2.28-.191-3.096-.574z'%20fill='%230587FF'/%3e%3cpath%20d='M8.75%2018.784l-.539-.522%202.333-2.526-2.512-2.352.538-.523%203.05%202.875-2.87%203.048z'%20fill='%230587FF'%20stroke='%230587FF'%20stroke-width='1.196'%20stroke-miterlimit='10'/%3e%3c/svg%3e",
              // Add more partner images
            ].map((image, index) => (
              <Grid
                item
                xs={6}
                md={3}
                key={index}
                className="flex items-center justify-center"
              >
                <img
                  src={image}
                  className={`max-w-full ${
                    index > 19 ? "w-[40%] -mt-4" : "w-full"
                  }`}
                  alt={`Partner ${index + 1}`}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* How to Buy Section */}
      <Box id="team" className="py-4">
        <Container maxWidth="lg">
          <Typography
            variant="body1"
            className="text-center font-bold font-sans text-[70px] text-white mb-20 my-10"
          >
            How to Buy
          </Typography>
          <Grid container spacing={5} alignItems={"center"}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="body1"
                className="font-sans font-bold text-[26px] text-white leading-[1.5]"
              >
                BUY WITH SOL AND USDT
              </Typography>
              {/* Numbered steps for buying tokens */}
              {[
                `1. Ensure that you have the Phantom or solfare Wallet extension installed on your desktop. Log in to the website and navigate to the "Buy Token" section. Choose the solana Chain network and select solana or usdt on solana chain as the token. Input the desired amount and click on the "Confirm" button.`,
                '2. Once you click "Confirm," a confirmation window with transaction details and gas fees will automatically appear in your wallet.',
                "3. Verify that you have sufficient usdt and sol in your wallet to cover the purchase and gas fees. Gas fees are payments to network validators for processing blockchain transactions.",
              ].map((step, index) => (
                <Typography
                  key={index}
                  variant="body1"
                  className="font-sans font-normal text-[24px] text-white leading-[1.5] mb-2"
                >
                  {step}
                </Typography>
              ))}
            </Grid>
            <Grid item xs={12} md={6}>
              {/* Replace placeholder with a relevant image */}
              <img
                src="https://tanukilaunchpad.com/assets/dcoin-rE-soUCZ.png"
                width="98%"
                alt="Buying Process"
              />
            </Grid>
          </Grid>
          <Grid container spacing={5} mt={5} alignItems={"center"}>
            <Grid item xs={12} md={6}>
              {/* Replace placeholder with a relevant image */}
              <img
                src="https://tanukilaunchpad.com/assets/starcoin-hp6XA7lv.png"
                width="80%"
                alt="Transaction Confirmation"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              {/* Numbered steps (continued) for buying tokens */}
              {[
                '4. Once you are satisfied with the transaction details, click "Confirm" within your wallet.',
                "5. Your purchase is now finalized. Please allow a brief period for the transaction to be processed. ",
                "6. After successfully completing the purchase, you can review your transaction on solscan. Please note that for the mobile version, you can connect using either an external or internal browser within your wallet app.",
              ].map((step, index) => (
                <Typography
                  key={index}
                  variant="body1"
                  className="font-sans font-normal text-[24px] text-white leading-[1.5] mb-2"
                >
                  {step}
                </Typography>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* FAQs Section */}
      <Container maxWidth="md" className="py-4">
        <Box sx={{ mb: 5 }}>
          <Typography
            variant="body1"
            className="text-center font-bold font-sans text-[70px] text-white mb-5"
          >
            FAQs
          </Typography>
          {/* Accordion for FAQs */}
          {[
            {
              summary: "What do I need to do to participate in the sale?",
              details: `1 Fund your Web3 Wallet: Fund your Phantom & Solflare wallet with Solana for gas fees and USDT for deposits.
 2 Register for the sale: Make sure you click the registration button within the specified time period. This is only required for Guaranteed Round deposits. No need to register for FCFS round.
 3 Guaranteed Allocation Round: Stake $TANUPAD tokens to access the Guaranteed Allocation Round. The more and longer you stake $TANUPAD, the larger your allocation will be.
 4 First-come-first-serve Round: If you missed the previous round, you can still participate in the FCFS Round if there are any unsold tokens left from the previous round, on a first-come-first-serve basis.
 5 Claim: After the deposits are closed, follow the token distribution period to claim your tokens.`,
            },
            {
              summary: "Is KYC required to participate in the sales?",
              details: "You do not need KYC",
            },
            {
              summary: "How can I claim purchased tokens?",
              details:
                "All token claims will be operated and managed by the TANUPAD portal.",
            },
            // Add more FAQs
          ].map((faq, index) => (
            <Accordion
              key={index}
              sx={{
                backgroundColor: "transparent",
                borderBottom: "1px solid #373D41",
                "&:before": {
                  display: "none",
                },
              }}
            >
              <AccordionSummary
                expandIcon={
                  <KeyboardArrowDownIcon
                    sx={{ color: "white", fontSize: 30 }}
                  />
                }
                aria-controls={`panel${index + 1}bh-content`}
                id={`panel${index + 1}bh-header`}
              >
                <Box display="flex" alignItems="center" className="my-3">
                  <Typography
                    variant="body1"
                    className="font-serif text-[36px] font-normal text-[#A09FB1] mr-2"
                  >
                    {`0${index + 1}`}
                  </Typography>
                  <Typography
                    variant="body1"
                    className="text-white text-2xl  leading-[1.5] font-sans font-bold"
                  >
                    {faq.summary}
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box>
                  <Typography
                    variant="body1"
                    className="text-lg text-[#a09faf] font-normal mb-2"
                  >
                    {faq.details}
                  </Typography>
                </Box>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </>
  );
};

export default Index;
