import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Grid, Link, Divider, Container, Typography, Stack, Button } from '@mui/material';
// components
import Logo from '../../components/Logo';
import SocialsButton from '../../components/SocialsButton';

// ----------------------------------------------------------------------

const LINKS = [
  {
    headline: 'Solutions',
    children: [
      { name: 'Marketing', href: '#' },
      { name: 'Analytics', href: '#' },
      { name: 'Insights', href: '#' },
    ],
  },
  {
    headline: 'Support',
    children: [
      { name: 'Pricing', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Guides', href: '#' },
      { name: 'Api Status', href: '#' },
    ],
  },
  {
    headline: 'Company',
    children: [
      { name: 'About', href: '#' },
      { name: 'Jobs', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Partners', href: '#' },
    ],
  },
  {
    headline: 'Legal',
    children: [
      { name: 'Claim', href: '#' },
      { name: 'Privacy', href: '#' },
      { name: 'Terms', href: '#' },
    ],
  },
];

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function MainFooter() {
  return (
    <RootStyle>
      <Divider />
      <Container sx={{ pt: 10 }}>
        <Grid
          container
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ textAlign: { xs: 'center', md: 'left' } }}
        >
          {/*  */}

          <Grid item xs={12} md={7}>
            <Stack spacing={5} direction={{ xs: 'column', md: 'row' }} justifyContent="space-between">
              {LINKS.map((list) => (
                <Stack key={list.headline} spacing={2}>
                  <Typography component="p" variant="h5">
                    {list.headline}
                  </Typography>
                  {list.children.map((link) => (
                    <Link
                      to={link.href}
                      key={link.name}
                      color="inherit"
                      variant="body2"
                      component={RouterLink}
                      sx={{ display: 'block' }}
                    >
                      {link.name}
                    </Link>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={8} md={3}>
            <Grid item xs={12} sx={{ mb: 2 }}>
              <Logo sx={{ mx: { xs: 'auto', md: 'inherit' } }} />
            </Grid>

            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              Have custom request or questions?
            </Typography>

            <Button variant="contained" color="secondary">
              Contact us
            </Button>
          </Grid>
        </Grid>

        <Stack direction="row" sx={{ justifyContent: 'space-between', mt: 10, pb: 5 }}>
          <Stack>
            <Typography
              component="p"
              variant="body2"
              sx={{
                fontSize: 13,
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              © 2022 RainBarrel, Inc. All rights reserved
            </Typography>
          </Stack>

          <Stack
            direction="row"
            justifyContent={{ xs: 'center', md: 'flex-start' }}
            sx={{ mt: -1, mb: { xs: 5, md: 0 } }}
          >
            <SocialsButton sx={{ mx: 0.5, color: '#BFBFBF' }} />
          </Stack>
        </Stack>
      </Container>
    </RootStyle>
  );
}
