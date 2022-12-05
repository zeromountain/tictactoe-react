import React, { useState } from 'react';
import Board from './components/Board';
import { Button, Flex } from './components/common';

function App() {
  const [state, setState] = useState<'board' | 'info'>('board');

  return (
    <Flex
      flex='1'
      height='100vh'
      direction='column'
      justify='center'
      align='center'
      gap='100px'>
      <Flex width='100%' gap='10px' justify='center' align='center'>
        <Button
          height='fit-content'
          border='1px solid black'
          borderRadius='10px'
          padding='10px'
          onClick={() => setState('board')}>
          Game Board
        </Button>
        <Button
          height='fit-content'
          border='1px solid black'
          borderRadius='10px'
          padding='10px'
          onClick={() => setState('info')}>
          Game Info
        </Button>
      </Flex>
      {state === 'board' && <Board />}
    </Flex>
  );
}

export default App;
