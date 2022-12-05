import { Button, Flex, Grid, Text } from './common';
import Sqaure from './Sqaure';

export default function Board() {
  return (
    <Flex direction='column' gap='20px' align='center'>
      <Text fontSize='24px' fontWeight='600' lineHeight='24px'>
        Next Player: x
      </Text>
      <Grid
        width='100%'
        height='100%'
        gridTemplateColumns='repeat(3, 100px)'
        gridTemplateRows='repeat(3, 100px)'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((squareNumber) => (
          <Sqaure key={squareNumber} squareNumber={squareNumber} />
        ))}
      </Grid>
      <Button
        width='fit-content'
        padding='10px'
        border='1px solid black'
        borderRadius='10px'>
        초기화
      </Button>
    </Flex>
  );
}
