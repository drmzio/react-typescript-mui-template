import React, { useState } from 'react';
import {
  Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Toolbar, AppBar, IconButton, Tooltip, InputBase,
  InputAdornment, Typography, Stack, Button, Container, useMediaQuery, Paper, Link, ListItemButton
} from '@mui/material';

import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import WifiTetheringOutlinedIcon from '@mui/icons-material/WifiTetheringOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import SearchIcon from '@mui/icons-material/Search';
import CreateIcon from '@mui/icons-material/Create';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import OrgSelection from './components/OrgSelection';
import ProfileDropdown from './components/ProfileDropdown';
import logoSvg from './logo.svg';

const drawerWidth = 240;

export default function App() {
  const matches = useMediaQuery('(min-width: 600px)');
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        maxWidth: '100vw',
        width: '100%',
        overflowX: 'hidden'
      }}
    >
      <Drawer
        open={open}
        variant={matches ? 'permanent' : 'temporary'}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{
          width: drawerWidth,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box'
          }
        }}
      >
        <AppBar
          position="relative"
          color="transparent"
          elevation={0}
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          <Toolbar sx={{ px: { sm: 2 } }}>
            <Link href="/" style={{ width: 151, height: 30, display: 'block' }}>
              <img src={logoSvg} width={151} height={30} alt="Logo" />
            </Link>
          </Toolbar>
        </AppBar>
        <Box sx={{ flexGrow: 1 }}>
          <Box sx={{ px: 2, pt: 2 }}>
            <OrgSelection />
          </Box>
          <List component="nav">
            <Box sx={{ position: 'relative' }}>
              <ListItemButton>
                <ListItemIcon>
                  <DesktopWindowsOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Website" />
              </ListItemButton>
              <Box sx={{ position: 'absolute', top: 0, right: 0, margin: 1 }}>
                <Tooltip title="Preview">
                  <IconButton size="small">
                    <VisibilityOutlinedIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
            <ListItemButton>
              <ListItemIcon>
                <StorefrontOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Products" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <LocalOfferOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Sales" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <WifiTetheringOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Marketing" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <AccountCircleOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="People" />
            </ListItemButton>
          </List>
        </Box>
        <Box>
          <List component="nav">
            <ListItemButton>
              <ListItemIcon>
                <SettingsOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <HelpOutlineOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Help" />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
      <AppBar
        position="relative"
        color="transparent"
        elevation={0}
        sx={{ borderBottom: 1, borderColor: 'divider' }}
      >
        <Toolbar sx={{ px: { sm: 2 } }}>
          <Box sx={{ mr: 1, display: { xs: 'block', sm: 'none' } }}>
            <IconButton size="large" edge="start" color="inherit" onClick={() => setOpen(!open)}>
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <Link href="/" style={{ width: 151, height: 30, display: 'block' }}>
              <img src={logoSvg} width={151} height={30} alt="Logo" />
            </Link>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <InputBase
              placeholder="Search for anything..."
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ mr: -1 }}>
            <ProfileDropdown />
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{
          bgcolor: 'grey.100',
          display: 'flex',
          flexDirection: 'column',
          marginLeft: { xs: 0, sm: `${drawerWidth}px` }
        }}
      >
        <Box sx={{ flexGrow: 1, py: 3 }}>
          <Container maxWidth="lg">
            <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
              <Button color="inherit" startIcon={<ChevronLeftIcon />} sx={{ color: 'text.secondary' }}>
                Back to Products
              </Button>
            </Stack>
            <Typography variant="h4" gutterBottom>My Product</Typography>
            <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
              <Button color="inherit" startIcon={<CreateIcon />} sx={{ color: 'text.secondary' }}>
                Edit Details
              </Button>
              <Button color="inherit" startIcon={<VisibilityIcon />} sx={{ color: 'text.secondary' }}>
                Preview
              </Button>
              <Button color="inherit" startIcon={<ColorLensIcon />} sx={{ color: 'text.secondary' }}>
                Customize
              </Button>
            </Stack>
            <Paper sx={{ p: 4 }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dicta eius error incidunt ipsam, maxime natus nihil, odit porro possimus provident quaerat quam quasi quod tempora tempore tenetur ut vero.
            </Paper>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda enim facilis impedit iste neque tenetur. Ab accusamus animi aut blanditiis consequuntur facilis id optio porro tempore? Ab, illum sit.
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore iusto sed totam voluptatum! Accusamus consequatur dolorum ea esse natus obcaecati quod repellendus similique, sunt. Atque cum dolores veritatis voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore iusto sed totam voluptatum! Accusamus consequatur dolorum ea esse natus obcaecati quod repellendus similique, sunt. Atque cum dolores veritatis voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore iusto sed totam voluptatum! Accusamus consequatur dolorum ea esse natus obcaecati quod repellendus similique, sunt. Atque cum dolores veritatis voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore iusto sed totam voluptatum! Accusamus consequatur dolorum ea esse natus obcaecati quod repellendus similique, sunt. Atque cum dolores veritatis voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore iusto sed totam voluptatum! Accusamus consequatur dolorum ea esse natus obcaecati quod repellendus similique, sunt. Atque cum dolores veritatis voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore iusto sed totam voluptatum! Accusamus consequatur dolorum ea esse natus obcaecati quod repellendus similique, sunt. Atque cum dolores veritatis voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore iusto sed totam voluptatum! Accusamus consequatur dolorum ea esse natus obcaecati quod repellendus similique, sunt. Atque cum dolores veritatis voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore iusto sed totam voluptatum! Accusamus consequatur dolorum ea esse natus obcaecati quod repellendus similique, sunt. Atque cum dolores veritatis voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore iusto sed totam voluptatum! Accusamus consequatur dolorum ea esse natus obcaecati quod repellendus similique, sunt. Atque cum dolores veritatis voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore iusto sed totam voluptatum! Accusamus consequatur dolorum ea esse natus obcaecati quod repellendus similique, sunt. Atque cum dolores veritatis voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore iusto sed totam voluptatum! Accusamus consequatur dolorum ea esse natus obcaecati quod repellendus similique, sunt. Atque cum dolores veritatis voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore iusto sed totam voluptatum! Accusamus consequatur dolorum ea esse natus obcaecati quod repellendus similique, sunt. Atque cum dolores veritatis voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore iusto sed totam voluptatum! Accusamus consequatur dolorum ea esse natus obcaecati quod repellendus similique, sunt. Atque cum dolores veritatis voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore iusto sed totam voluptatum! Accusamus consequatur dolorum ea esse natus obcaecati quod repellendus similique, sunt. Atque cum dolores veritatis voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore iusto sed totam voluptatum! Accusamus consequatur dolorum ea esse natus obcaecati quod repellendus similique, sunt. Atque cum dolores veritatis voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore iusto sed totam voluptatum! Accusamus consequatur dolorum ea esse natus obcaecati quod repellendus similique, sunt. Atque cum dolores veritatis voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore iusto sed totam voluptatum! Accusamus consequatur dolorum ea esse natus obcaecati quod repellendus similique, sunt. Atque cum dolores veritatis voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore iusto sed totam voluptatum! Accusamus consequatur dolorum ea esse natus obcaecati quod repellendus similique, sunt. Atque cum dolores veritatis voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore iusto sed totam voluptatum! Accusamus consequatur dolorum ea esse natus obcaecati quod repellendus similique, sunt. Atque cum dolores veritatis voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore iusto sed totam voluptatum! Accusamus consequatur dolorum ea esse natus obcaecati quod repellendus similique, sunt. Atque cum dolores veritatis voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore iusto sed totam voluptatum! Accusamus consequatur dolorum ea esse natus obcaecati quod repellendus similique, sunt. Atque cum dolores veritatis voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore iusto sed totam voluptatum! Accusamus consequatur dolorum ea esse natus obcaecati quod repellendus similique, sunt. Atque cum dolores veritatis voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore iusto sed totam voluptatum! Accusamus consequatur dolorum ea esse natus obcaecati quod repellendus similique, sunt. Atque cum dolores veritatis voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore iusto sed totam voluptatum! Accusamus consequatur dolorum ea esse natus obcaecati quod repellendus similique, sunt. Atque cum dolores veritatis voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore iusto sed totam voluptatum! Accusamus consequatur dolorum ea esse natus obcaecati quod repellendus similique, sunt. Atque cum dolores veritatis voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore iusto sed totam voluptatum! Accusamus consequatur dolorum ea esse natus obcaecati quod repellendus similique, sunt. Atque cum dolores veritatis voluptates?</p>
          </Container>
        </Box>
      </Box>
    </Box>
  );
}
