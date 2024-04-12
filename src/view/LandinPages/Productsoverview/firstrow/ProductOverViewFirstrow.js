import React from 'react'
import ProductOverViewTemplate from "../ProductsOverviewTemplate"

function ProductOverViewFirstrow() {
    
    const products=[
        {name:"Remote controls toys", img:"https://rukminim2.flixcart.com/image/612/612/xif0q/remote-control-toy/b/6/k/remote-controlled-rock-crawler-rc-monster-truck-4-wheel-drive-1-original-imagx38fjmrp8vey.jpeg?q=70", price:"233"},
        {name:"Top guitar", img:"https://rukminim2.flixcart.com/image/612/612/kmf7ki80/acoustic-guitar/g/t/p/int-38c-bk-intern-original-imagfbn25pcv3ufg.jpeg?q=70", price:"342"},
        {name:"Soft & huggable", img:"https://rukminim2.flixcart.com/image/612/612/kzsqykw0/stuffed-toy/8/h/d/3-feet-pink-teddy-bear-with-neck-bow-88-os-retail-original-imagbqbycvygkak2.jpeg?q=70", price:"193"},
        {name:"Dry Fruits", img:"https://rukminim2.flixcart.com/image/612/612/xif0q/nut-dry-fruit/m/i/a/250-healthy-nutmix-mixed-dryfruits-source-of-vitamin-and-original-imagsfnyzemkmc4t.jpeg?q=70", price:"953"},
        {name:"Treadmill", img:"https://rukminim2.flixcart.com/image/612/612/xif0q/treadmill/m/d/v/-original-imagt8frrwuqzwwh.jpeg?q=70", price:"977"},
        {name:"bolt cycles", img:"https://rukminim2.flixcart.com/image/612/612/xif0q/cycle/h/b/h/bolt-cycles-for-men-with-front-suspension-dual-disc-brake-mtb-original-imagyexwkgtctrht.jpeg?q=70", price:"344"},
        {name:"fitness band", img:"https://rukminim2.flixcart.com/image/612/612/xif0q/fitness-band/6/o/z/-original-imagy9javhzgn83f.jpeg?q=70", price:"99"},
    ]

  return (
    <>
    <ProductOverViewTemplate products={products} header={"Beaty, Food, Toys & more"} lastid={"first-row-last"}  firstid={"first-row-first"}  />
    </>
  )
}

export default ProductOverViewFirstrow;