import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import {
  VscRemote,
  VscError,
  VscWarning,
  VscBell,
  VscFeedback,
} from "react-icons/vsc";
import { IoIosGitBranch } from "react-icons/io";

export default function Footer() {
  return (
    <Box
      component={Paper}
      square
      elevation={0}
      // sx={{ height: '3vh' }}
      sx={{ height: "20px", color: "white" }}
      display="flex"
    >
      <Grid container>
        <Grid
          item
          sx={{
            width: "35px",
            backgroundColor: "#2E8461",
            justifyContent: "center",
            alignItems: "center",
          }}
          display="flex"
        >
          {/* <Box
            component={Paper}
            square
            elevation={0}
            // display="flex"
            // justifyContent="center"
            // alignItems="center"
            sx={{ backgroundColor: 'green' }}
          >
            <VscRemote />
          </Box> */}
          <VscRemote />
        </Grid>
        <Grid
          item
          sx={{ backgroundColor: "#3279CB", width: "200px" }}
          display="flex"
        >
          <Stack direction="row" spacing={1} sx={{ pl: 1 }}>
            <Stack direction="row" spacing={0.5}>
              <Box
                display="flex"
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  // pt: 0.3,
                }}
              >
                {/* <Button
                  startIcon={<IoIosGitBranch />}
                  sx={{
                    fontSize: 1,
                    color: 'white',
                    textTransform: 'none',
                    borderRadius: 0,
                    p: 0,
                  }}
                  // disableElevation
                  disableRipple
                  size="small"
                >
                  master
                </Button> */}
                <IoIosGitBranch />
                <Typography sx={{ fontSize: 5 }}>main</Typography>
              </Box>
            </Stack>
            <Stack direction="row" spacing={0.5}>
              <Box
                display="flex"
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  pt: 0.3,
                }}
              >
                <VscError fontSize="14px" />
              </Box>
              <Box
                display="flex"
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  pt: 0.3,
                }}
              >
                <Typography sx={{ fontSize: 5 }}>0</Typography>
              </Box>

              <Box
                display="flex"
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  pt: 0.3,
                }}
              >
                <VscWarning fontSize="14px" />
              </Box>
              <Box
                display="flex"
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  pt: 0.3,
                }}
              >
                <Typography sx={{ fontSize: 5 }}>0</Typography>
              </Box>
            </Stack>
          </Stack>
        </Grid>
        <Grid
          item
          // sx={{ backgroundColor: '#3279CB', minWidth: `calc(100% - 35px)` }}
          sx={{ backgroundColor: "#3279CB", minWidth: `calc(100% - 235px)` }}
          display="flex"
          justifyContent="flex-end"
        >
          <Box display="flex" justifyContent="flex-end">
            <Stack
              // display="flex"
              justifyContent="end"
              direction="row"
              spacing={1}
              sx={{ pr: 1.5 }}
            >
              <Box
                display="flex"
                sx={{ justifyContent: "center", alignItems: "center", pt: 0.3 }}
              >
                <VscFeedback fontSize="14px" />
              </Box>
              <Box
                display="flex"
                sx={{
                  width: "50%",
                  justifyContent: "center",
                  alignItems: "center",
                  pt: 0.3,
                }}
              >
                <VscBell fontSize="14px" />
              </Box>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
