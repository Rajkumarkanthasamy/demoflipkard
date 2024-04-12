import React, { useState, useEffect } from "react";
import "./ProductsOverview.css"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Title from 'react-vanilla-tilt'


function ProductOverViewTemplate(props) {

    const [activeShowButton, setactiveShowButton] = useState(props.lastid)
    const productItems = [...props.products] 

  return (
    <div className='product-overview-main-continer'>
      <div className="Products-headertext-link-continer">
      <p className="product-overview-header">{props.header}</p>
      <button className="Products-headertext-link-button">
      <ChevronRightIcon  style={{ fontSize:"", color:"#FFF"}} />
      </button>
      </div>
         <div className="product-overview-products-continer">
            {
            productItems.map((productsdetails, index)=>{
                return(
      

            <div className="product-overview-items" id={index === 6 ? props.lastid : props.firstid }>
              <Title style={{height: "100%", width:"100%"}} options={{ scale: 2, max: 35,  perspective:1000, }}>
                <div className="product-overview-img-continer">
                    <img src={productsdetails.img} alt="items"/>
                </div>
                <p className="product-overview-products-name">{productsdetails.name}</p>
                <p className="product-overview-products-price">From ${productsdetails.price}</p>
            </Title>

            </div>
                )
             })}
         </div>
         
         <button className="product-overview-overflow-button-right" onClick={()=>setactiveShowButton(props.firstid)} style={{display:activeShowButton === `${props.lastid}` ?"block":"none"}}>
         <a href={`#${props.lastid}`} >
        <ChevronRightIcon  style={{backgroundColor:"#fff", fontSize:"40px", color:"#AAA"}} />
        </a>
      </button>

      <button className="product-overview-overflow-button-left" onClick={()=>setactiveShowButton(props.lastid)} style={{display:activeShowButton === `${props.firstid}` ?"block":"none"}} >
         <a href={`#${props.firstid}`} >
        <KeyboardArrowLeftIcon  style={{backgroundColor:"#fff", fontSize:"40px", color:"#AAA"}} />
        </a>
      </button>

  


    </div>
  )
}




export default ProductOverViewTemplate