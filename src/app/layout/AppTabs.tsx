import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

// const CustomTab = withStyles({
//   root: {
//     backgroundColor: 'orange',
//   },
//   selected: {
//     backgroundColor: 'purple',
//   },
// })(Tab);

// const StyledTab = styled(Tab)(({ theme }) => ({
//   // '&:nth-of-type(odd)': {
//   //   backgroundColor: theme.palette.action.hover,
//   // },
//   // // hide last border
//   // '&:last-child td, &:last-child th': {
//   //   border: 0,
//   // },
//   '.Mui-selected': {
//     backgroundColor: 'purple',
//   },
// }));

const StyledTab = styled(Tab)(({ theme }) => ({
  // backgroundColor: 'purple',
  '.Mui-selected': { backgroundColor: '#FFFFFF' },
}));

// const StyledTab = styled(Tab)`
//   color: #20b2aa;

//   '.mui-selected' : {
//     backgroundcolor: '#2d2d2d';
//   }
//   // :hover {
//   //   color: #2e8b57;
//   // }
// `;

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function AppTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 0, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <StyledTab
            label="overview.md"
            {...a11yProps(0)}
            disableRipple
            sx={{ textTransform: 'none' }}
            iconPosition="start"
            // icon={<VscMarkdown />}
          />
          <StyledTab
            label="skills.md"
            {...a11yProps(1)}
            disableRipple
            sx={{ textTransform: 'none' }}
          />
          <Tab
            label="educations.md"
            {...a11yProps(2)}
            disableRipple
            sx={{ textTransform: 'none' }}
          />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}
