import React from 'react';
import { Box, IconButton, Paper, Tooltip } from '@mui/material';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import Footer from './Footer';
import { VscFiles } from 'react-icons/vsc';
import SettingsIcon from '@mui/icons-material/Settings';

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
        backgroundColor: darkMode ? '#333333' : '#2c2c2c',
      }}
      justifyContent="space-between"
      display="flex"
      flexDirection="column"
      component={Paper}
      square
      elevation={0}
    >
      <Box sx={{ flexGrow: 0 }} display="flex" justifyContent="center">
        <IconButton
          onClick={() => setExpanded(!expanded)}
          sx={{ color: 'white' }}
        >
          {/* <FileCopyOutlinedIcon /> */}
          <VscFiles />
        </IconButton>
      </Box>
      <Box
        sx={{ flexGrow: 0, pb: 0.5 }}
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <IconButton sx={{ color: 'white' }}>
          <SettingsIcon />
        </IconButton>
        {darkMode ? (
          <Tooltip title="Turn on the light" placement="right" arrow>
            <IconButton
              onClick={handleThemeChange}
              color="inherit"
              sx={{ color: 'white' }}
            >
              <DarkModeOutlinedIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Turn off the light" placement="right" arrow>
            <IconButton
              onClick={handleThemeChange}
              color="inherit"
              sx={{ color: 'white' }}
            >
              <LightModeOutlinedIcon />
            </IconButton>
          </Tooltip>
        )}
      </Box>
    </Box>
  );
}
