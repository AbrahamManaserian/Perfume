import { Badge, Box, Grid, Menu, MenuItem, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import FlagMenu from './FlagMenu';
import { BasketIcon } from './SVGIcons';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AppContext } from './Root';
import { useContext, useState } from 'react';
import { barText, getText } from '../texts';
import { getAuth, signOut } from 'firebase/auth';
import DrawerSideBar from './DrawerSideBar';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

export function UserMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  function signOutUser() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
    setAnchorEl(null);
  }
  return (
    <Box display="flex" alignContent="center" sx={{ pl: 1 }}>
      <AccountCircleIcon
        // fontSize="52px"
        color="primary"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ cursor: 'pointer', fontSize: '38px' }}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link
          style={{ color: 'inherit', display: 'block', width: '100%', textDecoration: 'none' }}
          to="/georgi"
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
        </Link>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={signOutUser}>Logout</MenuItem>

        <Link
          style={{ color: 'inherit', display: 'block', width: '100%', textDecoration: 'none' }}
          to="/admin"
        >
          <MenuItem onClick={handleClose}>Admin</MenuItem>
        </Link>
      </Menu>
    </Box>
  );
}

export default function TopBar() {
  const context = useContext(AppContext);
  let url = new URL(window.location.href);
  // console.log(context);
  const location = useLocation();
  return (
    <Grid
      justifyContent="space-between"
      sx={{
        zIndex: 1000,
        position: 'sticky',
        top: 0,
        bgcolor: 'rgba(255, 255, 255, 0.9)',
        height: '50px',
        p: { xs: '10px 10px 10px 10px', sm: '30px 40px 30px 10px' },
      }}
      item
      container
      alignContent="center"
      alignItems="center"
      xs={12}
    >
      <DrawerSideBar />
      <Grid alignItems="center" alignContent="center" item xs container justifyContent="flex-end">
        <FlagMenu />
        <Link
          to="/basket"
          style={{
            paddingX: '3px',
            margin: '10px',
            display: 'flex',
            justifyContent: 'center',
            cursor: 'pointer',
            borderRadius: '50%',
            transition: 'all 0.2s ease-out',
            '&:hover': {
              backgroundColor: '#e0e0e0',
              transform: 'scale(1.02,1.02)',
            },
          }}
        >
          <Badge
            showZero
            sx={{
              '& .MuiBadge-badge': {
                right: 3,
                top: 9,
                // border: `2px solid ${theme.palette.background.paper}`,
                padding: '0 4px',
              },
            }}
            badgeContent={context.basket}
            color="secondary"
          >
            {/* <Link to="/basket"> */}
            <BasketIcon />
            {/* </Link> */}
          </Badge>
        </Link>
        <Link to="/preferred">
          <Box
            sx={{
              p: '5px',
              m: '5px',
              display: 'flex',
              justifyContent: 'center',
              cursor: 'pointer',
              borderRadius: '50%',
              transition: 'all 0.2s ease-out',
              '&:hover': {
                bgcolor: '#e0e0e0',
                transform: 'scale(1.02,1.02)',
              },
            }}
          >
            <FavoriteOutlinedIcon color="error" sx={{ fontSize: '27px' }} />
          </Box>
        </Link>
        {context.user ? (
          <UserMenu />
        ) : (
          <Link
            className="linkRouter"
            to={
              url.pathname.includes('signin') ? url.search : `/signin/?${location.pathname + location.search}`
            }
          >
            {getText('signIn', context.language, barText)}
          </Link>
        )}
      </Grid>
    </Grid>
  );
}
