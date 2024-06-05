"use client";

import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  Drawer,
  Paper,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "next/link";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Container maxWidth="xl">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Link
            href="/"
            className="font-bold text-white font-sans text-[36px] leading-[1.5] tracking-[0.00938em]"
          >
            Tanuki
          </Link>
          <Box display="flex" alignItems="center">
            {/* Navigation Links */}
            {[
              { label: "Home", href: "/#home" },
              { label: "Tiers", href: "/tier" },
              { label: "Referral", href: "/referral" },
              { label: "Giveaway", href: "/giveaway" },
              { label: "Staking", href: "/staking" },
              { label: "Presale", href: "/presaleDetail" },
              { label: "Stages", href: "/stages" },
              { label: "Launchpad", href: "/presale" },
            ].map((link) => (
              <Link
                href={link.href}
                key={link.label}
                className="mr-6 xl:block hidden"
              >
                <Typography
                  variant="body1"
                  className="font-sans font-bold text-lg text-white "
                >
                  {link.label}
                </Typography>
              </Link>
            ))}
            {/* Account Icon */}
            <Box component="a" href="/profile" className="mr-6">
              <AccountCircleIcon className="text-white text-[40px]" />
            </Box>
            {/* Wallet Button */}
            <button className="bg-[#1f1f2c] hidden xl:block rounded-full text-white border border-[#28303f] py-3 px-10 font-sans font-bold text-base shadow-md">
              Select Wallet
            </button>
            <button
              onClick={() => setOpenDrawer((p) => !p)}
              className="xl:hidden block  text-white"
            >
              <MenuIcon className="text-4xl" />
            </button>
          </Box>
        </Box>
      </Container>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <Box className="min-h-screen w-[250px] bg-black text-center">
          <Link
            href="/"
            className="font-bold text-white font-sans text-[36px] leading-[1.5] tracking-[0.00938em] block text-center my-4"
          >
            Tanuki
          </Link>
          <Link
            href="/"
            className="font-normal text-white font-sans text-base leading-[1.5] tracking-[0.00938em] text-center block mb-4"
          >
            Home
          </Link>
          <Link
            href="/presaleDetail"
            className="font-normal text-white font-sans text-base leading-[1.5] tracking-[0.00938em] text-center block mb-4"
          >
            Presale
          </Link>
          <Link
            href="/referral"
            className="font-normal text-white font-sans text-base leading-[1.5] tracking-[0.00938em] text-center block mb-4"
          >
            Referral
          </Link>
          <Link
            href="/staking"
            className="font-normal text-white font-sans text-base leading-[1.5] tracking-[0.00938em] text-center block mb-4"
          >
            Staking
          </Link>
          <button className="bg-[#1f1f2c] mt-20 rounded-full text-white border border-[#28303f] py-3 px-10 font-sans font-bold text-base shadow-md">
            Select Wallet
          </button>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
