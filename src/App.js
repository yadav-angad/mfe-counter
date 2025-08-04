import React from "react";
import { Box, Card, Button, Alert, TextField, Typography, TableContainer, TableHead, TableRow, TableCell, TableBody, Table, Grid } from "@mui/material";
import { store } from 'host/store';
import { useSelector, useDispatch } from 'react-redux';

export default function () {
  const [counter, setCounter] = React.useState(0);
  const dispatch = useDispatch();
  store.subscribe(() => console.log(store.getState()));

  const incrementCounter = () => {
    setCounter((prevState) => prevState + 1);
    dispatch({ type: 'SET_COUNTER', payload: { counter: counter + 1 } });
  };

  const decrementCounter = () => {
    setCounter((prevState) => prevState - 1);
    dispatch({ type: 'SET_COUNTER', payload: { counter: counter - 1 } });
  };

  return (
    <Grid xs={12} sm={4} md={4} lg={4} xl={4} item>
      <Card sx={{ backgroundColor: '#f5f5f5', padding: '10px' }}>
        <Alert severity="info">{'MFE 1 Counter App, sharing data to Host Application'}</Alert>
        <Box>
          <Button sx={{ backgroundColor: 'DarkGreen', color: 'white', '&:hover': { backgroundColor: 'Green' } }} onClick={incrementCounter}>
            {'Increment'}
          </Button>
          <Typography variant="h6">{'Counter : ' + counter}</Typography>
          <Button sx={{ backgroundColor: 'DarkGreen', color: 'white', '&:hover': { backgroundColor: 'Green' } }} onClick={decrementCounter}>
            {'Decrement'}
          </Button>
        </Box>
      </Card>
    </Grid>
  );
}
