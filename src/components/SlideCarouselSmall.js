import { Box, Grid, Typography } from '@mui/material';
import { SampleNextArrow, SamplePrevArrow } from './SlideCarousel';
import { useState } from 'react';
import Slider from 'react-slick';
import BoltIcon from '@mui/icons-material/Bolt';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';

export function Card({ image, name }) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        flexDirection: 'column',
        boxShadow: 'rgba(0, 0, 0, 0.3) 0 1px 3px',
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
        <img style={{ width: '100%', height: 'auto' }} src={image} />
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
        {name}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'flex-end', pt: '5px' }}>
        <Typography color="error" sx={{ fontSize: '14px', lineHeight: '12px', fontWeight: 500 }}>
          23,000
        </Typography>
        <Typography color="error" sx={{ fontSize: '9px', lineHeight: '8px', fontWeight: 500, ml: '5px' }}>
          AMD
        </Typography>
      </Box>
    </Box>
  );
}

export const data = [
  {
    name: 'Velvet Orchid Eau de Parfum',
    image: 'https://www.burmunk.am/media/1200x1200/2022/118/uk200014189tomford.jpg',
  },
  {
    name: 'Acqua di Gio Eau de Parfum',
    image: 'https://www.burmunk.am/media/1200x1200/2022/201/armani.png',
  },
  {
    name: "Tutti Twilly d'Hermes Eau de Parfum",
    image: 'https://www.burmunk.am/media/1200x1200/2024/26/up3346130422488.jpg',
  },
  {
    name: 'Acqua di Gio Eau de Parfum',
    image: 'https://www.burmunk.am/media/1200x1200/2022/201/armani.png',
  },
  {
    name: 'Acqua di Gio Eau de Parfum',
    image: 'https://www.burmunk.am/media/1200x1200/2022/201/armani.png',
  },
  {
    name: 'Acqua di Gio Eau de Parfum',
    image: 'https://www.burmunk.am/media/1200x1200/2022/201/armani.png',
  },
  {
    name: "Tutti Twilly d'Hermes Eau de Parfum",
    image: 'https://www.burmunk.am/media/1200x1200/2024/26/up3346130422488.jpg',
  },
  {
    name: 'Acqua di Gio Eau de Parfum',
    image: 'https://www.burmunk.am/media/1200x1200/2022/201/armani.png',
  },
  {
    name: 'Acqua di Gio Eau de Parfum',
    image:
      'https://media-afr-cdn.oriflame.com/contentImage?externalMediaId=201bc7b3-c2f8-4578-af70-2dfe9523f20f&name=perfumes-1&inputFormat=png',
  },
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

export default function SlideCarouselSmall() {
  const [showArrows, setShowArrows] = useState(false);
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    // centerPadding: '0px',
    initialSlide: 0,
    nextArrow: <SampleNextArrow showArrow={showArrows} />,
    prevArrow: <SamplePrevArrow showArrow={showArrows} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Grid
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
      item
      xs={12}
      sx={{
        p: {
          xs: '0 0 35px 15px',
          sm: '70px 8px 35px 20px',
        },
      }}
    >
      <Grid container my="20px" alignItems="center" justifyContent="space-between" item xs={12}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <BoltIcon color="error" />
          <Typography sx={{ fontSize: '24px', fontWeight: 700, color: '#37474f' }}>Best Sellers </Typography>
        </Box>
        <Typography sx={{ fontSize: '14px', color: '#37474f', mr: '20px' }}>View all</Typography>
      </Grid>
      <Slider {...settings}>
        {data.map((item, index) => {
          return <Card key={index} image={item.image} name={item.name} />;
        })}
      </Slider>
    </Grid>
  );
}
