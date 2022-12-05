import { useState } from 'react';
import { Button } from './common';

interface SquareProps {
  squareNumber: number;
}

export default function Sqaure({ squareNumber }: SquareProps) {
  const [value, setValue] = useState<string | null>(null);

  return (
    <Button
      background='white'
      border='1px solid black'
      fontSize='30px'
      fontWeight='bold'
      onClick={() => setValue('x')}>
      {value || squareNumber}
    </Button>
  );
}
