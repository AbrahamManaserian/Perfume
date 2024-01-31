import { Avatar, Badge, Box, Grid, Menu, MenuItem, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import FlagMenu from './FlagMenu';
import { BasketIcon } from './SVGIcons';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AppContext } from './Root';
import { useContext, useState } from 'react';
import { barText, getText, textSignInUp } from '../texts';
import { getAuth, signOut } from 'firebase/auth';
import DrawerSideBar from './DrawerSideBar';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

export function UserMenu({ url, location, context }) {
  // console.log(context.user);
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
      <Avatar
        color="primary"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ cursor: 'pointer', width: 36, height: 36, ml: { xs: 0, sm: '5px' } }}
        alt={context.user?.displayName}
        src={context.user?.photoURL}
      />
      {/* <AccountCircleIcon
        // fontSize="52px"
        color="primary"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ cursor: 'pointer', fontSize: '38px' }}
      /> */}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {context.user ? (
          <div>
            <Link
              style={{
                color: 'inherit',
                display: 'block',
                width: '100%',
                textDecoration: 'none',
              }}
              to="/profile"
            >
              <MenuItem sx={{ textTransform: 'capitalize' }} onClick={handleClose}>
                {context.user.displayName.toLowerCase()}
                {/* {getText('myAccount', context.language, textSignInUp)} */}
              </MenuItem>
            </Link>
            <Link
              style={{ color: 'inherit', display: 'block', width: '100%', textDecoration: 'none' }}
              to="/profile"
            >
              <MenuItem onClick={handleClose}>
                {getText('myAccount', context.language, textSignInUp)}
              </MenuItem>
            </Link>

            <MenuItem onClick={signOutUser}>{getText('logOut', context.language, textSignInUp)}</MenuItem>
          </div>
        ) : (
          <div>
            {' '}
            <Link
              style={{ color: 'inherit', display: 'block', width: '100%', textDecoration: 'none' }}
              to={
                url.pathname.includes('signin')
                  ? url.search
                  : `/signin/?${location.pathname + location.search}`
              }
            >
              <MenuItem onClick={handleClose}>{getText('signIn', context.language, textSignInUp)}</MenuItem>
            </Link>
          </div>
        )}
        <Link
          style={{ color: 'inherit', display: 'block', width: '100%', textDecoration: 'none' }}
          to="/preferred"
        >
          <MenuItem onClick={handleClose}>
            {getText('favorite', context.language, textSignInUp)}
            <FavoriteOutlinedIcon color="error" sx={{ fontSize: '16px', ml: '10px' }} />
          </MenuItem>
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

        <UserMenu url={url} location={location} context={context} />
      </Grid>
    </Grid>
  );
}
