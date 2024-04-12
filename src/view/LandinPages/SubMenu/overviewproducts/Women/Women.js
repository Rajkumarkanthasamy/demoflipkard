import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import Card from '@mui/material/Card';
import "./Women.css"

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
      onMouseLeave={handleClose}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  }));
  

  return (
    <div onMouseOver={handleClick} onMouseLeave={handleClose}>
      <Button
        onClick={()=>setAnchorEl(!anchorEl)}

        id="demo-customized-button"
        size="small"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        // onClick={handleClick}
        endIcon={open ? <KeyboardArrowUpOutlinedIcon/> :<KeyboardArrowDownIcon />}
        style={{textTransform:"none", backgroundColor:"inherit", color:"#000", margin:"0px", padding:"0px"}}
      >
        Women
      </Button>
      <Card  style={{display:open?"block":"none", height:"auto", width:"100%", backgroundColor:"#FFF", position:"absolute", left:"0px", zIndex:10}}>
      <div className='Products-continer'>
      <div className='Products-continer-items' >
        <h4>Mobile</h4>
        <p>Mi</p>
        <p>RealMe</p>
        <p>Samsung</p>
        <p>Infinix</p>
        <p>OPPO</p>
        <p>Apple</p>
        <p>Vivo</p>
        <p>Honor</p>
        <p>Asus</p>
        <p>Poco</p>
        <p>realme Narzo 10</p>
        <p>Infinix Hot 9</p>
        <p>IQoo3</p>
        <p>Motorola razr</p>
        <p>realme Naro 10A</p>
        <p>Motorola g8 power lite</p>
        <p></p>
      </div>
      <div className='Products-continer-items' >
        <h4>Mobile accessories</h4>
        <p>Mobile Cases</p>
        <p>Headphones & Headsets</p>
        <p>Power Banks</p>
        <p>Screenguards</p>
        <p>Memory Cards</p>
        <p>Smard Headphones</p>
        <p>Mobile Cables</p>
        <p>Mobiles Chargers</p>
        <h4>Smart Wearable Tech</h4>
        <p>Smart Watchs</p>
        <p>Smart Glass (VR)</p>
        <p>Smart Bands</p>
        <h4>Smart Wearable Tech</h4>
        <p>Health Care Appliances</p>
        <p>Bp Monitors</p>
        <p>weighing Scale</p>
        </div>
      <div className='Products-continer-items' >
        <h4>LapTop</h4>
        <p>Gaminf Laptops</p>
        <h4>Destops</h4>
        <h4>Gaming & Accessories</h4>
        <h4>Computer Accessories</h4>
        <p>External Hard Disks</p>
        <p>Pendrives</p>
        <p>LapTop Bags</p>
        <p>Mouse</p>
        <h4>Computer Peripherals</h4>
        <p>Printers & Ink Cartridges</p>
        <p>Monitors</p>
        <h4>Tablets</h4>
        <p>Apple ipads</p>
        </div>
      <div className='Products-continer-items' >
        <h4>Speaker</h4>
        <p>Home Audio Speakers</p>
        <p>Soundbas</p>
        <p>Home Theaters</p>
        <p>Bluetooth Speakers</p>
        <p>DTH Set Top Box</p>
        <h4>Smart Home Automation</h4>
        <p>Google Nest</p>
        <h4>Camera</h4>
        <p>DSLR & Mirrorless</p>
        <p>Compact & Bridge Camers</p>
        <p>Sports & Action</p>
        <h4>Camera Accessories</h4>
        <p>Lens</p>
        <p>Tripods</p>
        </div>
      <div className='Products-continer-items' >
        <h4>Featured</h4>
        <p>Google Assistant Srore</p>
        <p>Laptops on Buyback Guaranee</p>
        <p>Flipkart SmartBuy</p>
        <p>Li-Polymer Power Banks</p>
        <p>Sony PS4 Pro & Slim</p>
        <p>Apple Products</p>
        <p>Microsoft Store</p>
        <p>Lenovo Phab Series</p>
        <p>JBL Speaker</p>
        <p>Smartphone ONBuyback</p>
        <p>Philips</p>
        <p>Dr.Morepen</p>
        <p>Complete Mobile Protection</p>
        <p>Mobiles No Cost EMI</p>
        <p>Huawel Watch Gt 2e Smart Watch</p>
        <p></p>
        </div>
      </div>
      </Card>

    </div>
  );
}