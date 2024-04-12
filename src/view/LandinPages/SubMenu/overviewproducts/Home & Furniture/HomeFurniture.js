import React, { useEffect, useState } from 'react'
import "./HomeFurnuture.css"
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import SubMenuDropDown from "../../SubMenuComponents/DropDown/DropDown"
function HomeFurniture() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  

  const products=[
    {productname:"Men's Top Wear", items:["All", "Men's T-shirts", "men's Formal Shirts", "Men's Kurtas", "Men's Ethnic Sets", "Men's BlaZers", "Men's Windcheaters", "Men's Suit", "Men's Fabrics"]},
    {productname:"Men's Bottom Wear", items:["All-2", "Men's T-shirts", "men's Formal Shirts", "Men's Kurtas", "Men's Ethnic Sets", "Men's BlaZers", "Men's Windcheaters", "Men's Suit", "Men's Fabrics"]}
  ]
  const productsCopy= [...products]




 
    
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

 

  return (
    <div className='homefurniture-continer' onMouseOver={handleClick} onMouseLeave={handleClose} >
    <div>
      <img src='https://rukminim1.flixcart.com/flap/100/100/image/ab7e2b022a4587dd.jpg?q=100' alt='inter-net'/>
    </div>
     <div >
      <Button
        onClick={()=>setAnchorEl(!anchorEl)}
        id="demo-customized-button"
        size="small"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        // onMouseOver={handleClick}
        endIcon={open ? <KeyboardArrowUpOutlinedIcon/> :<KeyboardArrowDownIcon />}
        style={{textTransform:"none", backgroundColor:"inherit", color:"#000", margin:"0px", padding:"0px", fontSize:"100%"}}
      >
       Home & Furniture
      </Button>
        <div style={{display:open?"block": "none", position:"relative"}}>
            <SubMenuDropDown products={products}/>
        </div>
     
    </div>
  </div>
  )
}

export default HomeFurniture