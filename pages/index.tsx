import * as React from 'react';
import type { NextPage } from 'next';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { setNameHeader } from '../redux/slice/headerSlice';
import { Grid } from '@mui/material';
import CategorCard from '../src/CategoryCard';

const cards = [{ name: 'Series', category: 'series' }, { name: 'Movies ', category: 'movies' }];

const Home: NextPage = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setNameHeader('Home'))
  }, [])

  return (
    <>
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Grid container spacing={4}>
          {cards.map((card, i) => (
            <Grid item key={i} xs={6} sm={3} md={2}>
              <CategorCard key={i} name={card.name} category={card.category} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Home;
