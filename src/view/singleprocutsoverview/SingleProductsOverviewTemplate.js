import React, { useState } from 'react'
import "./SingleProductsOverviewTemplate.css"



function SingleProductsOverviewTemplate() {
    const [activeProductimg, setactiveProductimg] = useState("https://rukminim2.flixcart.com/image/416/416/jpmxuvk0/printer-refurbished/z/r/z/u-ts207-canon-original-imafbu3xk6dywejh.jpeg?q=70&crop=false")

  const  setactiveProductimagefunc=(imagelink)=>{
      setactiveProductimg(imagelink)
  }


  return (
    <div className='single-product-continer'>
        <div className='single-product-details-continer'>
            <div className='single-product-details-continer-left'>
                <div className='single-product-details-subimg-continer'>
                  <div className='single-product-details-subimage'>
                    <img onMouseEnter={()=>setactiveProductimagefunc("https://rukminim2.flixcart.com/image/416/416/jpmxuvk0/printer-refurbished/z/r/z/u-ts207-canon-original-imafbu3xpytszpgx.jpeg?q=70&crop=false")} src='https://rukminim2.flixcart.com/image/416/416/jpmxuvk0/printer-refurbished/z/r/z/u-ts207-canon-original-imafbu3xpytszpgx.jpeg?q=70&crop=false' alt='network'/>
                  </div>
                  <div className='single-product-details-subimage'>
                  <img onMouseEnter={()=>setactiveProductimagefunc('https://rukminim2.flixcart.com/image/416/416/jpmxuvk0/printer-refurbished/z/r/z/u-ts207-canon-original-imafbu3xk6dywejh.jpeg?q=70&crop=false')} src='https://rukminim2.flixcart.com/image/416/416/jpmxuvk0/printer-refurbished/z/r/z/u-ts207-canon-original-imafbu3xk6dywejh.jpeg?q=70&crop=false' alt='network'/>
                  </div>
                  <div className='single-product-details-subimage'>
                  <img onMouseEnter={()=>setactiveProductimagefunc('https://rukminim2.flixcart.com/image/416/416/jpmxuvk0/printer-refurbished/z/r/z/u-ts207-canon-original-imafbu3xbjrncgqa.jpeg?q=70&crop=false')} src='https://rukminim2.flixcart.com/image/416/416/jpmxuvk0/printer-refurbished/z/r/z/u-ts207-canon-original-imafbu3xbjrncgqa.jpeg?q=70&crop=false' alt='network'/>
                  </div><div className='single-product-details-subimage'>
                  <img onMouseEnter={()=>setactiveProductimagefunc('https://rukminim2.flixcart.com/image/416/416/jpmxuvk0/printer-refurbished/z/r/z/u-ts207-canon-original-imafbu3xmerpgxuq.jpeg?q=70&crop=false')} src='https://rukminim2.flixcart.com/image/416/416/jpmxuvk0/printer-refurbished/z/r/z/u-ts207-canon-original-imafbu3xmerpgxuq.jpeg?q=70&crop=false' alt='network'/>
                  </div>
                  <div className='single-product-details-subimage'>
                  <img onMouseEnter={()=>setactiveProductimagefunc('https://rukminim2.flixcart.com/image/416/416/xif0q/printer/q/m/1/-original-imagreqbyhb6std4.jpeg?q=70&crop=false')} src='https://rukminim2.flixcart.com/image/416/416/xif0q/printer/q/m/1/-original-imagreqbyhb6std4.jpeg?q=70&crop=false' alt='network'/>
                  </div>
                  
                </div>
                <div className='single-product-details-mainimg-continer'>
                  <img src={activeProductimg} alt='network down'/>
                </div>
            </div>
            <div className='single-product-details-continer-right'>2</div>
        </div>
    </div>
  )
}

export default SingleProductsOverviewTemplate