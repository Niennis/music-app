'use client'
import { useState } from 'react';
import { Button } from '@mui/material';

const FavButton = ({ cellValues, handleClick }) => {


  return (
    <Button onClick={handleClick}> {cellValues.value} </Button>
  );
};

export default FavButton;