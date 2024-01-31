import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import SideBar from './Sidebar';
import { MenuIcon } from './SVGIcons';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function DrawerSideBar() {
  const [state, setState] = useState(false);
  const location = useLocation();
  useEffect(() => {
    // console.log(location);
    setState(false);
  }, [location]);
  return (
    <div>
      <Box sx={{ cursor: 'pointer', display: { xs: 'block', lg: 'none' } }} onClick={() => setState(true)}>
        <MenuIcon />
      </Box>
      <Drawer open={state} anchor="left" onClose={() => setState(false)}>
        <Box onKeyDown={() => setState(false)}>
          <SideBar hide={false} />
        </Box>
      </Drawer>
    </div>
  );
}
