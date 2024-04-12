import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import "./ProductsFourItemsTemplate.css"
function ProductsFourItemsTemplate() {

    const products=[
        {name:"Remote controls toys", img:"https://rukminim2.flixcart.com/image/612/612/xif0q/remote-control-toy/b/6/k/remote-controlled-rock-crawler-rc-monster-truck-4-wheel-drive-1-original-imagx38fjmrp8vey.jpeg?q=70", price:"233"},
        {name:"Top guitar", img:"https://rukminim2.flixcart.com/image/612/612/kmf7ki80/acoustic-guitar/g/t/p/int-38c-bk-intern-original-imagfbn25pcv3ufg.jpeg?q=70", price:"342"},
        {name:"Soft & huggable", img:"https://rukminim2.flixcart.com/image/612/612/kzsqykw0/stuffed-toy/8/h/d/3-feet-pink-teddy-bear-with-neck-bow-88-os-retail-original-imagbqbycvygkak2.jpeg?q=70", price:"193"},
        {name:"Dry Fruits", img:"https://rukminim2.flixcart.com/image/612/612/xif0q/nut-dry-fruit/m/i/a/250-healthy-nutmix-mixed-dryfruits-source-of-vitamin-and-original-imagsfnyzemkmc4t.jpeg?q=70", price:"953"},
    ]

  return (
    <>
    <div className='product-four-items-main-continer'>

    <div className='product-four-items-sub-continer'>

            <div className='product-four-items-left-continer'>
                <div className="Products-four-items-headertext-link-continer">
                <p className="product-four-items-header">{"Beaty, Food, Toys & more"}</p>
                <button className="Products-four-items-headertext-link-button">
                <ChevronRightIcon  style={{ fontSize:"", color:"#FFF"}} />
                </button>
                </div>
                    <div className="product-four-items-products-continer">  
                        {
                        products.map((productsdetails, index)=>{
                            return(
                        <div className="product-four-items-items">
                            <div className="product-four-items-img-continer">
                                <img src={productsdetails.img} alt="items"/>
                            </div>
                            <p className="product-four-items-products-name">{productsdetails.name}</p>
                            <p className="product-four-items-products-price">From ${productsdetails.price}</p>
                        </div>
                            )
                        })}
                    </div>
                 </div>
                 <div className='product-four-items-left-continer'>
                <div className="Products-four-items-headertext-link-continer">
                <p className="product-four-items-header">{"Beaty, Food, Toys & more"}</p>
                <button className="Products-four-items-headertext-link-button">
                <ChevronRightIcon  style={{ fontSize:"", color:"#FFF"}} />
                </button>
                </div>
                    <div className="product-four-items-products-continer">  
                        {
                        products.map((productsdetails, index)=>{
                            return(
                        <div className="product-four-items-items">
                            <div className="product-four-items-img-continer">
                                <img src={productsdetails.img} alt="items"/>
                            </div>
                            <p className="product-four-items-products-name">{productsdetails.name}</p>
                            <p className="product-four-items-products-price">From ${productsdetails.price}</p>
                        </div>
                            )
                        })}
                    </div>
                 </div> <div className='product-four-items-left-continer'>
                <div className="Products-four-items-headertext-link-continer">
                <p className="product-four-items-header">{"Beaty, Food, Toys & more"}</p>
                <button className="Products-four-items-headertext-link-button">
                <ChevronRightIcon  style={{ fontSize:"", color:"#FFF"}} />
                </button>
                </div>
                    <div className="product-four-items-products-continer">  
                        {
                        products.map((productsdetails, index)=>{
                            return(
                        <div className="product-four-items-items">
                            <div className="product-four-items-img-continer">
                                <img src={productsdetails.img} alt="items"/>
                            </div>
                            <p className="product-four-items-products-name">{productsdetails.name}</p>
                            <p className="product-four-items-products-price">From ${productsdetails.price}</p>
                        </div>
                            )
                        })}
                    </div>
                 </div>

</div>
</div>
</>
  )
}

export default ProductsFourItemsTemplate