import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Grid, Typography } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import EastIcon from '@mui/icons-material/East';
import BoltIcon from '@mui/icons-material/Bolt';
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import { useContext, useState } from 'react';
import { DramIcon } from './SVGIcons';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import { getText, textHomePage, textSlideCarousel, textSlideCarouselSmall } from '../texts';
import { AppContext } from './Root';

const images = [
  'https://www.burmunk.am/media/1200x1200/2023/97/33461304137521.jpg',
  'https://www.burmunk.am/media/1200x1200/2023/354/closignedplum2350mlpsd-jpg-300dpi-1080px.jpeg',
  'https://www.burmunk.am/media/1200x1200/2023/333/1200-png-24et050r23hrvb.png',
  'https://www.burmunk.am/media/1200x1200/2023/327/paradoxe.jpg',
  'https://www.burmunk.am/media/1200x1200/2023/327/canvas-ca404.png',
  'https://www.burmunk.am/media/1200x1200/2023/327/3351500957712-1-1000x1000.jpg',
  'https://www.burmunk.am/media/1200x1200/2023/310/issey.png',
];

export function SampleNextArrow(props) {
  const { className, style, onClick, showArrow } = props;
  return (
    <div
      style={{
        position: 'absolute',
        right: showArrow ? '21px' : '16px',
        bottom: 'calc(50% - 14px)',
        zIndex: 1,
        transition: 'all 0.3s ',

        visibility: showArrow ? 'visible' : 'hidden',
        opacity: showArrow ? 1 : 0,
        cursor: 'pointer',
        backgroundColor: '#37474f',
        padding: '3px',
      }}
    >
      <EastIcon style={{ ...style, color: 'white', fontSize: '24px' }} onClick={onClick} />
    </div>
  );
}

export function SamplePrevArrow(props) {
  const { className, style, onClick, showArrow } = props;
  return (
    <div
      style={{
        transition: 'all 0.3s ',
        position: 'absolute',
        left: showArrow ? '5px' : '0',
        bottom: 'calc(50% - 16px)',
        zIndex: 1,
        visibility: showArrow ? 'visible' : 'hidden',
        opacity: showArrow ? 1 : 0,
        cursor: 'pointer',
        backgroundColor: '#37474f',
        padding: '3px',
      }}
    >
      <KeyboardBackspaceIcon style={{ ...style, color: 'white', fontSize: '24px' }} onClick={onClick} />
    </div>
  );
}

function Card1({ image, currency }) {
  const [prefered, setPrefered] = useState(false);
  return (
    <Box
      sx={{
        display: 'flex',
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
          position: 'absolute',
          top: '15px',
          left: '15px',
          display: 'flex',
          justifyContent: 'center',
          p: '3px 3px',
          width: '60px',
          bgcolor: '#d81b60',
          borderRadius: '20px',
        }}
      >
        <Typography color="white" fontSize="11px" fontWeight={500}>
          25% off
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          // padding: '20px',
          height: '200px',
          overflow: 'hidden',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img style={{ width: '60%', height: 'auto' }} src={image} />
      </Box>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0 0 0 ', height: '20px' }}>
        {['black', 'white', '#37474f'].map((item, index) => {
          return (
            <div
              key={item}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '0 2px',
                // margin: '2px',
                height: '18px',
                width: '18px',
                padding: 0,
                // backgroundColor: item,
                border: 'solid 0.5px',
                borderRadius: '50%',
              }}
            >
              <div
                style={{
                  backgroundColor: item,
                  borderRadius: '50%',
                  border: 'solid 0.5px',
                  height: '14px',
                  width: '14px',
                  margin: 0,
                }}
              ></div>
            </div>
          );
        })}
      </div>
      <Typography sx={{ textAlign: 'center', fontSize: '19px', fontWeight: 700, my: '10px' }}>
        Geox
      </Typography>
      <Typography sx={{ fontSize: '15px', fontWeight: 500, textAlign: 'center' }}>
        Women's Gymnastics Shoes Sneakers
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          // flexWrap: 'nowrap',
          justifyContent: 'center',
          alignItems: 'flex-end',
          paddingY: '10px',
        }}
      >
        <Typography sx={{ color: '#d81b60', fontSize: '15px', fontWeight: 500 }}>360000</Typography>
        <Typography sx={{ color: '#d81b60', fontSize: '9px', fontWeight: 500, m: '0 0 3px 3px' }}>
          {currency}
        </Typography>

        <Typography sx={{ ml: '10px', color: '#78909c', fontSize: '15px', textDecoration: 'line-through' }}>
          470000
        </Typography>
        <Typography sx={{ color: '#78909c', fontSize: '9px', fontWeight: 500, m: '0 0 3px 3px' }}>
          {currency}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          // pt: '15px',
        }}
      >
        <div style={{ cursor: 'pointer' }} onClick={() => setPrefered(!prefered)}>
          {prefered ? (
            <FavoriteOutlinedIcon sx={{ color: '#d81b60' }} />
          ) : (
            <FavoriteBorderTwoToneIcon sx={{ color: '#d81b60' }} />
          )}
        </div>
        <AddTwoToneIcon
          // onClick={() => console.log('assd')}
          sx={{
            color: '#d81b60',
            border: 0.1,
            borderColor: '#d81b60',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        />
      </Box>
    </Box>
  );
}

export default function InfiniteCarousel({ color }) {
  const [showArrows, setShowArrows] = useState(false);
  const context = useContext(AppContext);
  // console.log(showArrows);
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // centerPadding: '0px',
    initialSlide: 0,
    nextArrow: <SampleNextArrow showArrow={showArrows} />,
    prevArrow: <SamplePrevArrow showArrow={showArrows} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
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
          sm: '50px 8px 35px 20px',
        },
      }}
    >
      <Grid container my="20px" alignItems="flex-end" justifyContent="space-between" item xs={12}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <BoltIcon color="error" />
          <Typography sx={{ fontSize: { xs: '20px', sm: '24px' }, fontWeight: 700, color: '#37474f' }}>
            {getText('flashDeals', context.language, textSlideCarousel)}
          </Typography>
        </Box>
        <Typography sx={{ fontSize: { xs: '11px', sm: '14px' }, color: '#37474f', mr: '20px' }}>
          {getText('viewAll', context.language, textSlideCarouselSmall)}
        </Typography>
      </Grid>
      <Slider {...settings}>
        {images.map((item, index) => {
          return (
            <Card1
              currency={getText('currency', context.language, textSlideCarousel)}
              key={index}
              index={index}
              image={item}
            />
          );
        })}
      </Slider>
    </Grid>
  );
}
