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
    <div>
      <Button
        id="demo-customized-button"
        size="small"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onMouseEnter={handleClick}
        endIcon={open ? <KeyboardArrowUpOutlinedIcon/>:<KeyboardArrowDownIcon />}
        style={{textTransform:"none", backgroundColor:"inherit", color:"#000", fontSize:"100%"}}
      >
        More
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        
        // onMouseEnter={onMouseEnteronhandleOpen}
      >
        <MenuItem  onClick={handleClose} disableRipple>
          <NotificationsIcon style={{color:"#000"}} />
          Notification Preferences
        </MenuItem>
        <MenuItem  onClick={handleClose} disableRipple>
          <LiveHelpIcon style={{color:"#000"}}/>
          24X7 Customer Care
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem  onClick={handleClose} disableRipple>
          <TrendingUpIcon style={{color:"#000"}}/>
          Advertise
        </MenuItem>
        <MenuItem  onClick={handleClose} disableRipple>
          <DownloadOutlinedIcon  style={{color:"#000"}}/>
          Download App
        </MenuItem>
      </StyledMenu>
    </div>
  );
}