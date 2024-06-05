"use client";

import { Box, Container, Typography, Grid, Button, Input } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Link from "next/link";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "rgba(86, 86, 96, 0.1)", py: 5 }}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} className="md:text-left text-center">
            <Typography
              variant="body1"
              className="font-bold text-white font-sans text-[36px] leading-[1.5] tracking-[0.00938em] mb-3"
            >
              Tanuki
            </Typography>
            <Box className="flex md:justify-start justify-center">
              {/* Replace placeholders with actual social media links */}
              {[
                {
                  href: "https://twitter.com/Tanukilaunchpad",
                  src: "/assets/twitter.svg",
                  alt: "Twitter",
                },
                {
                  href: "https://t.me/Tanukilaunchpad",
                  src: "/assets/telegram.svg",
                  alt: "Telegram",
                },
                {
                  href: "https://tanuki-whitepaper.gitbook.io/tanuki-whitepaper/",
                  src: "https://tanukilaunchpad.com/assets/gitbook-lcoKc4-a.svg",
                  alt: "Gitbook",
                },
                {
                  href: "mailto: supportTanukilaunchpad.com",
                  src: "https://tanukilaunchpad.com/assets/mail-pBfY61fU.svg",
                  alt: "Email",
                },
              ].map((link, index) => (
                <Box
                  component="a"
                  href={link.href}
                  target="_blank"
                  key={index}
                  sx={{ textDecoration: "none", mr: 2 }}
                  className="mb-3"
                >
                  <img src={link.src} width="40px" alt={link.alt} />
                </Box>
              ))}
            </Box>
            <Typography
              variant="body1"
              className="text-[#565660] font-bold text-base font-sans mb-3"
            >
              Copyright © 2024 Tanuki. All rights reserved.
            </Typography>
            <Typography
              variant="body1"
              className="text-[#b9b8bb] font-bold text-base font-sans mt-1"
            >
              Tanukilaunchpad@gmail.com
            </Typography>
          </Grid>
          <Grid item xs={6} md={2} className="md:text-left text-center">
            <Box>
              <Typography
                variant="body1"
                className="font-bold text-xl text-white font-sans mb-4"
              >
                About us
              </Typography>
              {/* Navigation Links */}
              {[
                { label: "Home", href: "/#home" },
                { label: "Token Allocation", href: "/#tokenomics" },
                { label: "Roadmap", href: "/#roadmap" },
                { label: "Partners", href: "/#partner" },
                {
                  label: "Apply",
                  href: "https://share-eu1.hsforms.com/1bioi9FlCQzqvqyBl1dC8Ww2duyxb",
                  target: "_blank",
                },
              ].map((link) => (
                <Link href={link.href} key={link.label} className="mb-3 block">
                  <Typography
                    variant="body1"
                    className="text-sm font-bold font-sans text-[#b9b8bb]"
                    target={link.target}
                  >
                    {link.label}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Grid>
          <Grid item xs={6} md={2} className="md:text-left text-center">
            <Box>
              <Typography
                variant="body1"
                className="font-bold text-xl text-white font-sans mb-4"
              >
                Utilities
              </Typography>
              {/* Navigation Links */}
              {[
                { label: "Farm", href: "/#utilities" },
                { label: "Staking", href: "/staking" },
                { label: "Tier System", href: "/tier" },
                { label: "Presale", href: "/presaleDetail" },
                { label: "Token Sale Stages", href: "/stages" },
                { label: "Launchpad", href: "/presale" },
              ].map((link) => (
                <Link href={link.href} key={link.label} className="mb-3 block">
                  <Typography
                    variant="body1"
                    className="text-sm font-bold font-sans text-[#b9b8bb]"
                  >
                    {link.label}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={4} className="md:text-left text-center">
            <Typography
              variant="body1"
              className="font-bold text-xl text-white font-sans mb-4"
            >
              Subscribe Us
            </Typography>
            <Typography
              variant="body1"
              className="text-sm font-bold font-sans text-[#b9b8bb]"
            >
              Signup for our newsletter to get the latest news in your inbox.
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              className="border border-[#a9a9c2] rounded-full mt-4"
            >
              <Input
                placeholder="Info@yourgmail.com"
                className="w-[85%] h-[48px] text-sm text-white border-none outline-none bg-transparent px-2 after:hidden before:hidden"
              />
              <Button className="bg-[#0000ff] h-[48px] w-[15%] rounded-r-full text-center hover:bg-[#0000ff]">
                <SendIcon sx={{ fontSize: 25 }} className="text-white" />
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
