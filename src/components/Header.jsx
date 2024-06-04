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
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Input,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "next/link";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
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
            <Link href={link.href} key={link.label} className="mr-6">
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
          <button
            onClick={handleClick}
            aria-controls={open ? "wallet-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            className="bg-[#1f1f2c] rounded-full text-white border border-[#28303f] py-3 px-10 font-sans font-bold text-base shadow-md"
          >
            Select Wallet
          </button>
          <Menu
            id="wallet-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem>
              <Button variant="contained" color="primary" fullWidth>
                {/* Replace with actual wallet connection logic */}
                Connect Wallet
              </Button>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <SwapHorizIcon />
              </ListItemIcon>
              Change wallet
            </MenuItem>
          </Menu>
        </Box>
      </Box>
    </Container>
  );
};

export default Header;
