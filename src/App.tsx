import React from 'react';
import Board from './components/Board';
import { Flex } from './components/common/Flex';

function App() {
  return (
    <Flex
      flex='1'
      height='100vh'
      direction='row'
      justify='center'
      align='center'>
      <Board />
    </Flex>
  );
}

export default App;
