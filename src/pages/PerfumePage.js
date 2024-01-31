import { Button, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function PerfumePage() {
  const [state, setrState] = useState(true);
  const url = new URL(window.location.href);
  const location = useLocation();

  return (
    <Grid item xs={12} container p="15px">
      <Grid m="30px 0 0 30px" item container xs={12} alignItems="center">
        <Typography sx={{ fontSize: '16px', fontWeight: 500, color: '#37474f' }}>
          Perfume
          <FiberManualRecordIcon
            sx={{
              // width: '15px',
              // height: '15px',
              //   paddingLeft: sideBarSize ? '20px' : 0,
              m: '0 10px',

              fontSize: '6px',
              color: '#37474f',
            }}
          />
          {url.searchParams.get('s')}
        </Typography>
      </Grid>
    </Grid>
  );
}
