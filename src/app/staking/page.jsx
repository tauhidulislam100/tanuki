import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StakeSymbol = ({ title = "$TANUPAD", subtitle = "Stake" }) => {
  return (
    <Box className="border border-[#373d46] rounded-[11px] bg-[#312640] p-2 h-[60px] flex items-center">
      <img
        src="https://tanukilaunchpad.com/assets/userlogo-S2mexJAC.png"
        className="w-[30px] max-w-full rounded-full"
      />
      <Typography
        variant="body1"
        className="text-sm font-bold font-sans text-white pl-2 leading-[1.5]"
      >
        {title}
        <br />
        <span className="text-[#a18cc0] font-medium">{subtitle}</span>
      </Typography>
    </Box>
  );
};

const NftBox = () => {
  return (
    <Box className="flex bg-[#312640] rounded-[11px] border border-[#373d46] h-[60px] w-[111px] ml-2 items-center justify-center">
      <img src="/assets/nft.png" className="w-[30px] max-w-full" />
      <Typography
        variant="body1"
        className="text-white text-[20px] font-bold font-sans leading-[1.5] pl-2"
      >
        Value
      </Typography>
    </Box>
  );
};
const StakingPage = () => {
  return (
    <>
      <Container maxWidth="xs">
        <Box className="py-10">
          <img src="/assets/star_1.png" className="w-[76px] max-w-full" />
          <Typography
            variant="body1"
            className="text-[70px] font-bold font-sans leading-[1.5] text-white text-center"
          >
            Staking
          </Typography>
          <Box className="flex justify-end">
            <img src="/assets/star_2.png" className="w-[76px] max-w-full" />
          </Box>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} className="pl-6 pt-6">
            <Typography
              variant="body1"
              className="text-[22px] font-medium font-sans leading-[1.5] text-white"
            >
              Compound bounty
            </Typography>
            <Box className="stake-box">
              <Typography
                variant="body1"
                className="text-xl font-medium font-sans leading-[1.5] text-white"
              >
                Claim $TANUPAD bounty for helping to compound staking rewards
                for everyone(coming soon).
              </Typography>

              <Box className="flex justify-between mt-8 items-center">
                <Box>
                  <Typography
                    variant="body1"
                    className="text-[27px] font-bold font-sans leading-[1.5] text-white"
                  >
                    0.0 SOL
                    <br />
                    <span className="text-xl font-normal leading-[1.5] text-[#a18cc0]">
                      ~0.0 USD
                    </span>
                  </Typography>
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    color="primary"
                    className="stake-button font-sans"
                  >
                    Select Wallet
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} className="pl-6 pt-6">
            <Typography
              variant="body1"
              className="text-[22px] font-medium font-sans leading-[1.5] text-white"
            >
              Platform
            </Typography>
            <Box className="stake-box-2 mt-4">
              <Box className="stake-box-inner p-6">
                <Typography
                  variant="body1"
                  className="text-[27px] font-bold font-sans leading-[1.5] text-white"
                >
                  0
                  <br />
                  <span className="text-[#a18cc0] text-xl font-medium">
                    Total Rewards Distributed
                  </span>
                </Typography>
                <Typography
                  variant="body1"
                  className="text-[27px] font-bold font-sans leading-[1.5] text-white"
                >
                  0
                  <br />
                  <span className="text-[#a18cc0] text-xl font-medium">
                    Total Value Staked
                  </span>
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} className="pl-6 pt-6">
            <Typography
              variant="body1"
              className="text-[22px] font-medium font-sans leading-[1.5] text-white"
            >
              My account
            </Typography>
            <Box className="stake-box-2 mt-4">
              <Box className="stake-box-inner p-6">
                <Typography
                  variant="body1"
                  className="text-[27px] font-bold font-sans leading-[1.5] text-white"
                >
                  0
                  <br />
                  <span className="text-[#a18cc0] text-xl font-medium">
                    Total Rewards Distributed
                  </span>
                </Typography>
                <Typography
                  variant="body1"
                  className="text-[27px] font-bold font-sans leading-[1.5] text-white"
                >
                  0
                  <br />
                  <span className="text-[#a18cc0] text-xl font-medium">
                    Total Value Staked
                  </span>
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Typography
            variant="body1"
            className="text-[36px] font-bold font-sans leading-[1.5] text-white mt-40 mb-4"
          >
            Active pools
          </Typography>
        </Grid>
        <TableContainer component={Paper} className="table-container">
          <Table className="staking-table">
            <TableHead>
              <TableRow className="staking-table-head-row">
                <TableCell className="cell">
                  <Typography variant="h2" className="table-heading-text">
                    Composition
                  </Typography>
                </TableCell>
                <TableCell className="cell">
                  <Typography variant="h2" className="table-heading-text">
                    Reward (APY)
                  </Typography>
                </TableCell>
                <TableCell className="cell">
                  <Typography variant="h2" className="table-heading-text">
                    Boost
                  </Typography>
                </TableCell>
                <TableCell className="cell">
                  <Typography variant="h2" className="table-heading-text">
                    Lock term
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <Box className="mt-10" />
              <TableRow className="bg-[#241b31] border-b-2 border-transparent h-[107px] mt-5">
                <TableCell size="medium">
                  <Box className="flex gap-2">
                    <StakeSymbol />
                    <StakeSymbol subtitle="Earn" />
                  </Box>
                </TableCell>
                <TableCell size="medium">
                  <Typography
                    variant="body1"
                    className="text-white text-[22px] font-bold font-sans leading-[1.5]"
                  >
                    1.5%
                  </Typography>
                </TableCell>
                <TableCell size="medium">
                  <Box className="flex gap-2">
                    <NftBox />
                    <Box className="flex nft-box-gr rounded-[11px] h-[60px] w-[111px] ml-2 items-center justify-center">
                      <img
                        src="/assets/thunder.png"
                        className="w-[30px] max-w-full"
                      />
                      <Typography
                        variant="body1"
                        className="text-white text-[20px] font-bold font-sans leading-[1.5] pl-2"
                      >
                        0%
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell size="medium">
                  <Typography
                    variant="body1"
                    className="text-white text-[20px] font-medium font-sans leading-[1.5]"
                  >
                    30days
                  </Typography>
                </TableCell>
                <TableCell size="medium">
                  <Button
                    variant="text"
                    className="text-white text-sm font-medium font-sans leading-[1.5]"
                  >
                    Stake
                  </Button>
                </TableCell>
              </TableRow>
              <Box className="mt-10" />
              <TableRow className="bg-[#241b31] border-b-2 border-transparent h-[107px] mt-5">
                <TableCell size="medium">
                  <Box className="flex gap-2">
                    <StakeSymbol />
                    <StakeSymbol subtitle="Earn" />
                  </Box>
                </TableCell>
                <TableCell size="medium">
                  <Typography
                    variant="body1"
                    className="text-white text-[22px] font-bold font-sans leading-[1.5]"
                  >
                    3%
                  </Typography>
                </TableCell>
                <TableCell size="medium">
                  <Box className="flex gap-2">
                    <NftBox />
                    <Box className="flex nft-box-gr rounded-[11px] h-[60px] w-[111px] ml-2 items-center justify-center">
                      <img
                        src="/assets/thunder.png"
                        className="w-[30px] max-w-full"
                      />
                      <Typography
                        variant="body1"
                        className="text-white text-[20px] font-bold font-sans leading-[1.5] pl-2"
                      >
                        0%
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell size="medium">
                  <Typography
                    variant="body1"
                    className="text-white text-[20px] font-medium font-sans leading-[1.5]"
                  >
                    90days
                  </Typography>
                </TableCell>
                <TableCell size="medium">
                  <Button
                    variant="text"
                    className="text-white text-sm font-medium font-sans leading-[1.5]"
                  >
                    Stake
                  </Button>
                </TableCell>
              </TableRow>
              <Box className="mt-10" />
              <TableRow className="bg-[#241b31] border-b-2 border-transparent h-[107px] mt-5">
                <TableCell size="medium">
                  <Box className="flex gap-2">
                    <StakeSymbol />
                    <StakeSymbol subtitle="Earn" />
                  </Box>
                </TableCell>
                <TableCell size="medium">
                  <Typography
                    variant="body1"
                    className="text-white text-[22px] font-bold font-sans leading-[1.5]"
                  >
                    6%
                  </Typography>
                </TableCell>
                <TableCell size="medium">
                  <Box className="flex gap-2">
                    <NftBox />
                    <Box className="flex nft-box-gr rounded-[11px] h-[60px] w-[111px] ml-2 items-center justify-center">
                      <img
                        src="/assets/thunder.png"
                        className="w-[30px] max-w-full"
                      />
                      <Typography
                        variant="body1"
                        className="text-white text-[20px] font-bold font-sans leading-[1.5] pl-2"
                      >
                        0%
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell size="medium">
                  <Typography
                    variant="body1"
                    className="text-white text-[20px] font-medium font-sans leading-[1.5]"
                  >
                    180days
                  </Typography>
                </TableCell>
                <TableCell size="medium">
                  <Button
                    variant="text"
                    className="text-white text-sm font-medium font-sans leading-[1.5]"
                  >
                    Stake
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      <Box className="mt-32" />
    </>
  );
};

export default StakingPage;
