import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  darkScrollbar,
  Grid,
  Stack,
  ThemeProvider,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import AppTree from './AppTree';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import AppButtons from './AppButtons';
import MDContainer from '../components/MDContainer';
import Home from '../pages/Home';
import { pages } from '../pages/pages';

interface Page {
  index: number;
  name: string;
  route: string;
}

// const pages = [
//   { index: 0, name: 'overview.md', route: '/overview' },
//   { index: 1, name: 'skills.md', route: '/skills' },
//   { index: 2, name: 'education.md', route: '/education' },
//   { index: 3, name: 'projects.md', route: '/projects' },
// ];

function initVisiblePageIndexs(pages: Page[]) {
  const tabs = [];
  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    tabs.push(page.index);
  }
  return tabs;
}

export default function App() {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [currentComponent, setCurrentComponent] = useState('');
  const [visiblePageIndexs, setVisiblePageIndexs] = useState(
    initVisiblePageIndexs(pages)
  );
  const [darkMode, setDarkMode] = useState(false);
  const [visiblePages, setVisiblePages] = useState(pages);
  const paletteType = darkMode ? 'dark' : 'light';

  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        // default: paletteType === 'light' ? '#FFFFFF' : '#1B1B1D',
        // default: paletteType === 'light' ? '#eaeaea' : '#121212',#1e1e1e
        // default: paletteType === 'light' ? '#eaeaea' : '#1e1e1e',
        default: paletteType === 'light' ? '#FFFFFF' : '#1e1e1e',
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: paletteType === 'dark' ? darkScrollbar() : null,
        },
      },
    },
  });

  function handleThemeChange() {
    setDarkMode(!darkMode);
    localStorage.setItem('theme', darkMode ? 'light' : 'dark');
  }

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    if (!currentTheme) setDarkMode(true);
    else setDarkMode(currentTheme === 'dark');
  }, []);

  useEffect(() => {
    const deletedIndex = visiblePages.find(
      (x) => !visiblePageIndexs.includes(x.index)
    )?.index;

    const newPages = [];

    for (const index of visiblePageIndexs) {
      const page = pages.find((x) => x.index === index);
      if (page) newPages.push(page);
    }
    setVisiblePages(newPages);
    // setVisiblePages(pages.filter((x) => visiblePageIndexs.includes(x.index)));

    if (visiblePageIndexs.length === 0) {
      setSelectedIndex(-1);
      navigate('/');
    } else if (
      deletedIndex === selectedIndex &&
      deletedIndex > Math.max(...visiblePageIndexs)
    ) {
      setSelectedIndex(Math.max(...visiblePageIndexs));
      const page = pages.find(
        (x) => x.index === Math.max(...visiblePageIndexs)
      );
      if (page) navigate(page.route);
    } else if (
      deletedIndex === selectedIndex &&
      deletedIndex < Math.max(...visiblePageIndexs)
    ) {
      setSelectedIndex(Math.min(...visiblePageIndexs));
      const page = pages.find(
        (x) => x.index === Math.min(...visiblePageIndexs)
      );
      if (page) navigate(page.route);
    } else {
    }
  }, [visiblePageIndexs]);

  return (
    <ThemeProvider theme={theme}>
      {/* <AppDrawer
        setExpanded={setExpanded}
        expanded={expanded}
        darkMode={darkMode}
        handleThemeChange={handleThemeChange}
      /> */}
      {/* <Router> */}
      <CssBaseline enableColorScheme />
      <Container
        sx={{ m: 0, p: 0, overflowY: 'hidden' }}
        maxWidth={false}
        disableGutters
      >
        <Grid container sx={{ overflow: 'auto', overflowY: 'hidden' }}>
          <Grid container sx={{ overflow: 'auto' }}>
            <Grid item sx={{ width: 50 }}>
              <Sidebar
                setExpanded={setExpanded}
                expanded={expanded}
                darkMode={darkMode}
                handleThemeChange={handleThemeChange}
              />
            </Grid>
            {expanded && (
              <Grid
                item
                sx={{
                  backgroundColor: darkMode ? '#252527' : '#f3f3f3',
                  width: 220,
                }}
              >
                <Stack sx={{ mt: 1 }}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ ml: 4 }}
                  >
                    EXPLORER
                  </Typography>
                  <AppTree
                    pages={pages}
                    selectedIndex={selectedIndex}
                    setSelectedIndex={setSelectedIndex}
                    currentComponent={currentComponent}
                    setCurrentComponent={setCurrentComponent}
                    visiblePageIndexs={visiblePageIndexs}
                    setVisiblePageIndexs={setVisiblePageIndexs}
                  />
                </Stack>
              </Grid>
            )}

            <Grid item xs zeroMinWidth>
              <Grid
                sx={{
                  height: '33px',
                }}
              >
                <AppButtons
                  // pages={pages}
                  pages={visiblePages}
                  selectedIndex={selectedIndex}
                  setSelectedIndex={setSelectedIndex}
                  currentComponent={currentComponent}
                  setCurrentComponent={setCurrentComponent}
                  visiblePageIndexs={visiblePageIndexs}
                  setVisiblePageIndexs={setVisiblePageIndexs}
                />
              </Grid>

              <Grid
                sx={{
                  scrollBehavior: 'smooth',
                  // overflow: 'scroll',
                  overflowY: 'auto',
                  height: `calc(100vh - 20px - 33px)`,
                }}
              >
                <Routes>
                  <Route
                    path="/"
                    element={<Home setSelectedIndex={setSelectedIndex} />}
                  />
                  {pages.map(({ index, name, route }) => (
                    <Route
                      key={index}
                      path={route}
                      element={<MDContainer path={`./pages/${name}`} />}
                    />
                  ))}
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </Container>
      {/* </Router> */}
    </ThemeProvider>
  );
}

// sx={{ backgroundColor: 'red' }}

{
  /* <Grid item lg={expanded ? 10 : 11.6}>
<Box sx={{ ml: 6, height: '100vh', mt: 1 }} display="flex">
<Box sx={{ mt: 1 }} display="flex">
  <Typography>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Molestias nihil saepe adipisci consequuntur quis vero, modi
    vel iure suscipit voluptas, qui, quas facere nulla aspernatur
    libero provident quasi recusandae repudiandae?
  </Typography>
</Box>
</Box>
</Grid> */
}
