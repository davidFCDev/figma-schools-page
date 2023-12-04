'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 0,
    label: 'Low',
  },
  {
    value: 50,
    label: 'Moderate',
  },
  {
    value: 100,
    label: 'High',
  },
];

function valuetext(value: number) {
  return `${value}°C`;
}

export default function BasicSlider() {
  return (
    <Box sx={{ color: 'black', textAlign: "center" }}>
      <Slider
        aria-label="Custom marks"
        defaultValue={0}
        getAriaValueText={valuetext}
        step={3}
        valueLabelDisplay="auto"
        marks={marks}
        sx={{
          color: 'black',
          '& .MuiSlider-thumb': {
            backgroundColor: '#FFD143',
            border: "3px solid black",
            width: 42,
            height: 20,
            borderRadius: 15,
          },
          '& .MuiSlider-rail': {
            backgroundColor: '#040404', 
            height: 3,
          },
          '& .MuiSlider-markLabel': {
            fontSize: 14,
            fontWeight: 'bold',
          },
        }} 
      />
    </Box>
  );
}
