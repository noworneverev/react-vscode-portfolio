import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import { IconButton, Stack, Tooltip } from '@mui/material';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import { useState } from 'react';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

const drawerWidth = 240;

interface Props {
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  darkMode: boolean;
  handleThemeChange: () => void;
}

export default function AppDrawer({
  expanded,
  setExpanded,
  darkMode,
  handleThemeChange,
}: Props) {
  // const [expand, setExpand] = useState(false);

  return (
    <Drawer variant="permanent" anchor="left">
      <Box
        sx={{ p: 1 }}
        justifyContent="space-between"
        display="flex"
        flexDirection="column"
      >
        <IconButton onClick={() => setExpanded(!expanded)}>
          <FileCopyOutlinedIcon />
        </IconButton>

        <Box sx={{ flexGrow: 0 }}>
          {darkMode ? (
            <Tooltip title="Turn on the light">
              <IconButton onClick={handleThemeChange} color="inherit">
                <DarkModeOutlinedIcon />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title="Turn off the light">
              <IconButton onClick={handleThemeChange} color="inherit">
                <LightModeOutlinedIcon />
              </IconButton>
            </Tooltip>
          )}
        </Box>
      </Box>
    </Drawer>
  );
}

{
  /* <Box display="flex" justifyContent="space-between"></Box> */
}

{
  /* <Box
component="main"
sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
>
<Toolbar />
<Typography paragraph>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
  dolor purus non enim praesent elementum facilisis leo vel. Risus at
  ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
  quisque non tellus. Convallis convallis tellus id interdum velit
  laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
  adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
  integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
  eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
  quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
  vivamus at augue. At augue eget arcu dictum varius duis at consectetur
  lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
  faucibus et molestie ac.
</Typography>
<Typography paragraph>
  Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
  ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
  elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
  sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
  mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
  risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
  purus viverra accumsan in. In hendrerit gravida rutrum quisque non
  tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
  morbi tristique senectus et. Adipiscing elit duis tristique
  sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
  eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
  posuere sollicitudin aliquam ultrices sagittis orci a.
</Typography>
</Box> */
}
