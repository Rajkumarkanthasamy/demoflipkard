import "./Header-in.css"
import  React,{useState} from 'react';
import SearchForProducts from "./searchbar/SearchBar";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import MoreOption from "./moreoption/MoreOption"
import LoginButton from "./loginbutton/LoginButton";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
function Header() {

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
    <div className='header-continer-in'>
        <div className='header-logo-div-in'>
             <img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png' alt='logo'/> 
             <p>Raj <span>plus</span></p>
        </div>
        <div>
            <SearchForProducts/>
        </div>
        <div>
            <LoginButton/>
        </div>

            <a href="#" style={{color:"#FFF"}}>Become a Seller</a>

            {/* <div className="select show-hide-moreoption">
                More
            </div> */}

            <MoreOption/>

            <div className="select-in div-flex-in">   
            <ShoppingCartIcon className="cart-icon-in"/>
            <p>Cart</p>
            </div>
        
    </div>
    </>
  )
}

export default Header;

