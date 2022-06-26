import {
  Box,
  Grid,
  IconButton,
  Link,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import React, { useEffect } from 'react';
import logo from '../../static/favicon.png';
import {
  FaMedium,
  FaBlog,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

interface Props {
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default function Home({ setSelectedIndex }: Props) {
  const { pathname } = useLocation();
  useEffect(() => {
    setSelectedIndex(-1);
  }, [setSelectedIndex]);

  useEffect(() => {
    document.title = process.env.REACT_APP_NAME!;
  }, [pathname]);

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: `calc(100vh - 20px - 33px)` }}
    >
      <Grid item xs={3}>
        <Stack direction={{ xs: 'column', sm: 'row-reverse' }} spacing={2}>
          <Box display="flex" sx={{ justifyContent: 'center' }}>
            <img src={logo} width="100px" />
          </Box>
          <Box>
            <Grid
              display="flex"
              justifyContent={{ xs: 'center', sm: 'flex-start' }}
            >
              <Typography variant="h3">Yan-Ying Liao</Typography>
            </Grid>
            <Grid
              display="flex"
              justifyContent={{ xs: 'center', sm: 'flex-start' }}
            >
              <Typography variant="subtitle1" gutterBottom>
                Always difficult, always beautiful
                {/* Better an{' '}
                <Box fontWeight="fontWeightMedium" display="inline">
                  oops
                </Box>{' '}
                than a{' '}
                <Box fontWeight="fontWeightMedium" display="inline">
                  what if
                </Box> */}
              </Typography>
            </Grid>
            <Grid
              display="flex"
              justifyContent={{ xs: 'center', sm: 'flex-start' }}
            >
              <Stack direction="row" spacing={0.4}>
                <Tooltip title="Github" arrow>
                  <Link
                    target="_blank"
                    href={'https://github.com/noworneverev'}
                    underline="none"
                    color="inherit"
                  >
                    <IconButton color="inherit">
                      <FaGithub />
                    </IconButton>
                  </Link>
                </Tooltip>
                <Tooltip title="LinkedIn" arrow>
                  <Link
                    target="_blank"
                    href={'https://www.linkedin.com/in/yan-ying-liao/'}
                    underline="none"
                    color="inherit"
                  >
                    <IconButton color="inherit">
                      <FaLinkedin />
                    </IconButton>
                  </Link>
                </Tooltip>
                <Tooltip title="Mail" arrow>
                  <Link
                    target="_blank"
                    href={'mailto:n9102125@gmail.com'}
                    underline="none"
                    color="inherit"
                  >
                    <IconButton color="inherit">
                      <FaEnvelope />
                    </IconButton>
                  </Link>
                </Tooltip>
                <Tooltip title="Medium" arrow>
                  <Link
                    target="_blank"
                    href={'https://medium.com/@noworneverev'}
                    underline="none"
                    color="inherit"
                  >
                    <IconButton color="inherit">
                      <FaMedium />
                    </IconButton>
                  </Link>
                </Tooltip>
                <Tooltip title="Blog" arrow>
                  <Link
                    target="_blank"
                    href={'https://noworneverev.github.io/blog/'}
                    underline="none"
                    color="inherit"
                  >
                    <IconButton color="inherit">
                      <FaBlog />
                    </IconButton>
                  </Link>
                </Tooltip>
              </Stack>
            </Grid>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
}
