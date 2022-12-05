import React from 'react';
import { Button } from './common/Button';

interface SquareProps {
  squareNumber: number;
}

export default function Sqaure({ squareNumber }: SquareProps) {
  return (
    <Button background='white' border='1px solid black'>
      {squareNumber}
    </Button>
  );
}
