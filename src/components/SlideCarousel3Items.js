import { Box, Grid, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import { SampleNextArrow, SamplePrevArrow } from './SlideCarousel';
import Slider from 'react-slick';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { AppContext } from './Root';
import { getText, textSlideCarousel3Items, textSlideCarouselSmall } from '../texts';

const dataSlide = [
  {
    image1:
      'https://scontent.fevn2-1.fna.fbcdn.net/v/t39.30808-6/412757498_375470111671050_6778605640959051278_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_ohc=s3PTuo8D-r4AX8fcafI&_nc_ht=scontent.fevn2-1.fna&oh=00_AfCGmRq0jPupiYw170ov_Ok4zcyCXJNvolqwaYt6KD5Zng&oe=65B43CFA',
    image2:
      'https://scontent.fevn2-1.fna.fbcdn.net/v/t39.30808-6/412757498_375470111671050_6778605640959051278_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_ohc=s3PTuo8D-r4AX8fcafI&_nc_ht=scontent.fevn2-1.fna&oh=00_AfCGmRq0jPupiYw170ov_Ok4zcyCXJNvolqwaYt6KD5Zng&oe=65B43CFA',
    image3:
      'https://scontent.fevn12-1.fna.fbcdn.net/v/t39.30808-6/412919253_376173118267416_4910194720088244222_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=3635dc&_nc_ohc=mG3TEH3aH1sAX9FrNHB&_nc_ht=scontent.fevn12-1.fna&oh=00_AfAia-mAK9CzNcOBFUNQ8gE0ZNiu_umFgvYo1QLnouuINQ&oe=65B388AB',
  },
];

const asd = [
  'https://scontent.fevn5-1.fna.fbcdn.net/v/t39.30808-6/396729816_18377337985064069_8061430063200801564_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_ohc=2GDcfwgVyWwAX9pWPi0&_nc_ht=scontent.fevn5-1.fna&oh=00_AfAZrPJACfRVb3-wdWgXSkHDoiWwQ8TdksmhcSmmwVHzQQ&oe=65BD4653',
  'https://scontent.fevn5-1.fna.fbcdn.net/v/t39.30808-6/398028869_718390693662481_7562106360455817091_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_ohc=z5gc4j_vhfYAX93zS6p&_nc_ht=scontent.fevn5-1.fna&oh=00_AfCsc3UZxZcoHKT6SV_3cyMQA-ZpQClyOjv9C7J_hawUow&oe=65BCA1B1',
  'https://scontent.fevn5-1.fna.fbcdn.net/v/t39.30808-6/393309286_710541201114097_3462580764992902376_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_ohc=yNr2-SKOCjsAX99UVUe&_nc_ht=scontent.fevn5-1.fna&oh=00_AfDwJKGaRH2b-WQ5Xr66y2pdrlgZ4mqS7aJEVWzsUGS0BQ&oe=65BC6948',
];
const asd1 = [
  'https://scontent.fevn5-1.fna.fbcdn.net/v/t39.30808-6/387825407_705422574959293_8161761169705752717_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=3635dc&_nc_ohc=us2TeJoclUIAX9R96yE&_nc_ht=scontent.fevn5-1.fna&oh=00_AfBILnKDHoPjqffnwDAhT51cB6Xun3eVdPTjqVMfV3ApDw&oe=65BD8409',
  'https://scontent.fevn5-1.fna.fbcdn.net/v/t39.30808-6/378677581_689382006563350_1449042677995471130_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_ohc=As-AzPjWSYkAX8MNlbv&_nc_ht=scontent.fevn5-1.fna&oh=00_AfARTFizKegp8B7VXpL7DEOt9Yz0azPrqu2nfIBP9SaqTg&oe=65BD385D',
  'https://scontent.fevn5-1.fna.fbcdn.net/v/t39.30808-6/375470747_685139320320952_1770550918614468987_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=3635dc&_nc_ohc=46XoRo0O4LoAX-DVZEK&_nc_ht=scontent.fevn5-1.fna&oh=00_AfBdhnrYRqtH8mv_8gWn8pNKWqmziRzqjaXp7lfASOE5oQ&oe=65BBBE0E',
];

export function CardCarousel({ images }) {
  return (
    <Grid item xs={12} sx={{ p: '10px', bgcolor: 'white', borderRadius: '10px' }}>
      <Box sx={{ display: 'flex', width: '99%', borderRadius: '5px', overflow: 'hidden' }}>
        {images.map((item, index) => {
          return <img key={index} src={item} style={{ width: '33.33%' }} />;
        })}
      </Box>
    </Grid>
  );
}

export default function SlideCarousel3Items({ header }) {
  const context = useContext(AppContext);
  const [showArrows, setShowArrows] = useState(false);
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
        breakpoint: 800,
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
          sm: '40px 8px 35px 20px',
        },
      }}
    >
      <Grid container my="20px" alignItems="flex-end" justifyContent="space-between" item xs={12}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CardGiftcardIcon color="error" />

          <Typography
            sx={{ fontSize: { xs: '20px', sm: '24px' }, fontWeight: 700, color: '#37474f', ml: '8px' }}
          >
            {getText('head', context.language, textSlideCarousel3Items)}
          </Typography>
        </Box>
        <Typography sx={{ fontSize: { xs: '11px', sm: '14px' }, color: '#37474f', mr: '20px' }}>
          {getText('viewAll', context.language, textSlideCarouselSmall)}
        </Typography>
      </Grid>
      <Slider {...settings}>
        <CardCarousel images={asd} />
        <CardCarousel images={asd1} />
        <CardCarousel images={asd} />
        <CardCarousel images={asd1} />
      </Slider>
    </Grid>
  );
}
