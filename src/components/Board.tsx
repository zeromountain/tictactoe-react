import React from 'react';
import { Flex } from './common/Flex';
import { Grid } from './common/Grid';
import Sqaure from './Sqaure';

export default function Board() {
  return (
    <Flex direction='column' gap='20px'>
      <span>Next Player: x</span>
      <Grid
        width='100%'
        height='100%'
        gridTemplateColumns='repeat(3, 100px)'
        gridTemplateRows='repeat(3, 100px)'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((squareNumber) => (
          <Sqaure key={squareNumber} squareNumber={squareNumber} />
        ))}
      </Grid>
    </Flex>
  );
}
