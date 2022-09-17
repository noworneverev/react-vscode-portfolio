import React from "react";
import { Box, IconButton, Link, Paper, Tooltip } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { VscFiles, VscSettingsGear } from "react-icons/vsc";
import { BiGitBranch } from "react-icons/bi";
import Divider from "@mui/material/Divider";
import {
  FaMedium,
  FaBlog,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { links } from "../pages/links";

interface Props {
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  darkMode: boolean;
  handleThemeChange: () => void;
}

export default function Sidebar({
  expanded,
  setExpanded,
  darkMode,
  handleThemeChange,
}: Props) {
  return (
    <Box
      sx={{
        height: `calc(100vh - 20px)`,
        pt: 1,
        backgroundColor: darkMode ? "#333333" : "#2c2c2c",
      }}
      justifyContent="space-between"
      display="flex"
      flexDirection="column"
      component={Paper}
      square
      elevation={0}
    >
      <Box
        sx={{ flexGrow: 0 }}
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <Box
          sx={{ flexGrow: 0, m: 0.5 }}
          display="flex"
          justifyContent="center"
        >
          <IconButton
            onClick={() => setExpanded(!expanded)}
            sx={{ color: "white" }}
          >
            <VscFiles />
          </IconButton>
        </Box>

        <Box
          sx={{ flexGrow: 0, m: 0.5 }}
          display="flex"
          justifyContent="center"
        >
          <Tooltip title="Source of this project" arrow placement="right">
            <Link
              target="_blank"
              href={"https://github.com/noworneverev/react-vscode-portfolio"}
              underline="none"
              color="inherit"
            >
              <IconButton sx={{ color: "white" }}>
                <BiGitBranch />
              </IconButton>
            </Link>
          </Tooltip>
        </Box>

        <Divider sx={{ m: 0.5 }} />

        {links.map((link) => (
          <Box
            sx={{ flexGrow: 0, m: 0.5 }}
            display="flex"
            justifyContent="center"
          >
            <Tooltip title={link.title} arrow placement="right">
              <Link
                target="_blank"
                href={link.href}
                underline="none"
                color="inherit"
              >
                <IconButton sx={{ color: "white" }}>{link.icon}</IconButton>
              </Link>
            </Tooltip>
          </Box>
        ))}
      </Box>

      <Box
        sx={{ flexGrow: 0, pb: 0.5 }}
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <Box sx={{ flexGrow: 0 }} display="flex" justifyContent="center">
          {darkMode ? (
            <Tooltip title="Turn on the light" placement="right" arrow>
              <IconButton
                onClick={handleThemeChange}
                color="inherit"
                sx={{ color: "white" }}
              >
                <DarkModeOutlinedIcon />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title="Turn off the light" placement="right" arrow>
              <IconButton
                onClick={handleThemeChange}
                color="inherit"
                sx={{ color: "white" }}
              >
                <LightModeOutlinedIcon />
              </IconButton>
            </Tooltip>
          )}
        </Box>
        <Box sx={{ flexGrow: 0 }} display="flex" justifyContent="center">
          <IconButton sx={{ color: "white" }}>
            <VscSettingsGear />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
