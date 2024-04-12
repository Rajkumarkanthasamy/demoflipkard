import React,{useState, useEffect} from 'react'
import "./DropDown.css";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';


function DropDown(props) {

    var [activeSubMenu, setactiveSubMenu]= useState("Men's Top Wear")
    const [activeSubMenuItems, setactiveSubMenuItems] = useState([])
    const productsCopy= [...props.products]

    useEffect(()=>{


        let finalFiltervalue =[]
        productsCopy.filter((items)=>{
            return activeSubMenu == items.productname ? finalFiltervalue.push(items.items) : null
        })
        console.log(finalFiltervalue)
        if(finalFiltervalue.length == 0){
          return 
        }
        setactiveSubMenuItems(...finalFiltervalue)
        finalFiltervalue =[]
    
      },[activeSubMenu])

  return (
    <>
     <div  style={{
         height:"auto",width:"39rem", backgroundColor:"#FFF", 
         position:"absolute", left:"-16.5rem",
         zIndex:10, borderRadius:"10px"
        }}>

      <div className='dropdown-Products-continer'>
      <div className='dropdown-Products-continer-items' >

      {props.products.map((productsDetails, index) => {
        // if()
        return(
        <div>
          <div className='dropdown-submenu-option1'
           style={{
            backgroundColor: activeSubMenu === productsDetails.productname? "#2874f010" : "#fff",
            fontSize: activeSubMenu === productsDetails.productname? "17px" : "",
            paddingLeft: activeSubMenu === productsDetails.productname? "5px" : "0px",
            fontWeight:activeSubMenu === productsDetails.productname? "700px" : "0px"
            }}
           
           
           
           onMouseEnter={()=>setactiveSubMenu(productsDetails.productname)} >
            <p>{productsDetails.productname}</p>
            <div  >
            <IconButton  edge="end" aria-label="comments">
                <ChevronRightIcon style={{ display: activeSubMenu === productsDetails.productname? "block" : "none",}}  />
              </IconButton>
              </div>
          </div>
       
        </div>
        )})}

      </div>
      
       <div className='Products-continer-items box-shadow' >
            {
              activeSubMenuItems.map((productsDetails)=>{
                return(
                  <div className='dropdown-submenu-items'>
                    {productsDetails}
                  </div>
                )
              })
            }
            
        </div>
      
      </div>
      </div>
    </>
  )

}

export default DropDown