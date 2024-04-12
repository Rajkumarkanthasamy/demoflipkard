import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import "./searchbar.css"

export default function SearchForProducts() {
  return (
    <Paper component="form" id='paper'>
     
      <InputBase
        sx={{ flex: 1 }}
        placeholder="search for products"
        inputProps={{ 'aria-label': 'search for products, brands and more' }}
      />
      <IconButton type="button"  className='icon-button' aria-label="search">
        <SearchIcon className='icon' />
      </IconButton>
     
    </Paper>
  );
}