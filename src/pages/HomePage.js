import { Box, Button, Grid, Typography } from '@mui/material';
import InfiniteCarousel from '../components/SlideCarousel';
import SlideCarousel3Items from '../components/SlideCarousel3Items';
import SlideCarousel from '../components/SlideCarousel';
import SlideCarouselSmall, { Card, data } from '../components/SlideCarouselSmall';
import BoltIcon from '@mui/icons-material/Bolt';

export default function HomePage() {
  const newData = [
    {
      name: 'Acqua di Gio Eau de Parfum',
      image: 'https://www.burmunk.am/media/1200x1200/2022/201/armani.png',
    },
    {
      name: 'Dolce Rose Eau de Toilette',
      image: 'https://www.burmunk.am/media/1200x1200/2021/118/75-633ef.jpg',
    },
    {
      name: "Tutti Twilly d'Hermes Eau de Parfum",
      image: 'https://www.burmunk.am/media/1200x1200/2024/26/up3346130422488.jpg',
    },
    {
      name: "Tutti Twilly d'Hermes Eau de Parfum",
      image: 'https://www.burmunk.am/media/1200x1200/2024/26/up3346130422488.jpg',
    },
  ];
  return (
    <Grid item xs={12} container sx={{ bgcolor: '#f4f8fb' }}>
      <Grid
        sx={{
          bgcolor: 'white',
          p: {
            xs: '50px 15px 20px 15px',
            sm: '50px',
          },
        }}
        item
        container
        alignContent="flex-start"
        xs={12}
        sm={6}
      >
        <Typography
          color="#37474f"
          sx={{ fontSize: { xs: '30px', sm: '47px' }, lineHeight: { xs: '37px', sm: '57px' }, pb: '30px' }}
          fontWeight={700}
        >
          20% Off For Your First Shopping
        </Typography>
        <Typography sx={{ fontSize: { xs: '14px', sm: '13px' }, lineHeight: '25px' }}>
          FREE Delivery in every City of Armenia. Days Easy Return Days Easy Return, Exchange and Refund
          Policy
        </Typography>
        <Button
          variant="contained"
          sx={{ textTransform: 'capitalize', bgcolor: '#c2185b', px: '30px', mt: '20px', fontSize: '18px' }}
        >
          Shop Now
        </Button>
      </Grid>
      <Grid
        // p="20px 20px 50px 20px"
        item
        container
        justifyContent="center"
        alignContent="center"
        xs={12}
        sm={6}
        sx={{ bgcolor: 'white' }}
      >
        <img
          style={{ width: '60%' }}
          src="https://www.burmunk.am/media/1200x1200/2024/26/hermes-terre-parfum-75ml-set-2023.jpg"
        />
      </Grid>
      <InfiniteCarousel header="Flash Deals" color="#f0f6fb" />
      <SlideCarousel3Items header="A Gift for a Loved One" />
      <SlideCarouselSmall />

      <Grid
        sx={{
          padding: {
            xs: '30px',
            sm: '50px',
          },
        }}
        item
        container
        xs={12}
      >
        <Grid
          overflow="hidden"
          flexWrap="nowrap"
          item
          container
          xs={12}
          justifyContent="center"
          alignItems="center"
          py="20px"
        >
          <div
            style={{
              content: ' ',
              backgroundColor: '#37474f',
              width: '50px',
              height: '1px',
              marginRight: '10px',
            }}
          ></div>
          <Typography
            sx={{
              // width: '100%',
              // textAlign: 'center',
              textWrap: 'nowrap',
              color: '',
              fontSize: {
                xs: '14px',
                sm: '20px',
              },
              fontWeight: 500,
              color: '#37474f',
            }}
          >
            Choose The Best for You
          </Typography>
          <div
            style={{
              content: ' ',
              backgroundColor: '#37474f',
              width: '50px',
              height: '1px',
              marginLeft: '10px',
            }}
          ></div>
        </Grid>
        {[
          'https://www.burmunk.am/themes/burmunk/assets/skin-care-cover.jpg',
          'https://www.burmunk.am/themes/burmunk/assets/perfume-cover.jpg',
          'https://www.burmunk.am/themes/burmunk/assets/make-up-cover.jpg',
        ].map((item, index) => {
          return (
            <Grid p="20px" key={index} item xs={12} sm={4}>
              <img style={{ width: '100%', height: 'auto', cursor: 'pointer' }} src={item} />
            </Grid>
          );
        })}
      </Grid>

      <Grid container p="40px 10px 10px 20px" alignItems="center" justifyContent="space-between" item xs={12}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <BoltIcon color="error" />
          <Typography sx={{ fontSize: '24px', fontWeight: 700, color: '#37474f' }}>Best Sellers</Typography>
        </Box>
        <Typography sx={{ fontSize: '14px', color: '#37474f', mr: '20px' }}>View all</Typography>
      </Grid>
      <Grid
        sx={{ maxHeight: '570px', overflow: 'hidden', bgcolor: 'white' }}
        spacing={'20px'}
        item
        container
        xs={12}
        m="20px"
        pr="20px"
      >
        {data.map((item, index) => {
          return (
            <Grid key={index} item container xs={6} sm={4} md={3} lg={2}>
              {/* <Card image={item.image} name={item.name} /> */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  position: 'relative',
                  flexDirection: 'column',
                  // boxShadow: 'rgba(0, 0, 0, 0.3) 0 1px 3px',
                  borderRadius: '5px',
                  p: '15px',
                  overflow: 'hidden',
                  bgcolor: 'white',
                }}
              >
                <Box
                  sx={{
                    height: '180px',
                    display: 'flex',
                    justifyContent: 'center',
                    //   alignContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden',
                  }}
                >
                  <img style={{ width: '100%', height: 'auto' }} src={item.image} />
                </Box>
                <Typography
                  sx={{
                    textWrap: 'nowrap',
                    fontSize: '14px',
                    fontWeight: 500,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {item.name}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', pt: '5px' }}>
                  <Typography color="error" sx={{ fontSize: '14px', lineHeight: '12px', fontWeight: 500 }}>
                    23,000
                  </Typography>
                  <Typography
                    color="error"
                    sx={{ fontSize: '9px', lineHeight: '8px', fontWeight: 500, ml: '5px' }}
                  >
                    AMD
                  </Typography>
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>

      <Typography mt={150}> Abraham </Typography>
    </Grid>
  );
}
