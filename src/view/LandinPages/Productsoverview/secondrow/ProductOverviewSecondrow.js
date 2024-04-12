import React from 'react'
import ProductOverViewTemplate from '../ProductsOverviewTemplate'
function ProductOverviewSecondrow() {
    
    const products=[
        {name:"Printer", img:"https://rukminim2.flixcart.com/image/612/612/xif0q/printer/x/l/e/-original-imagnuwegzdxxdmq.jpeg?q=70", price:"284"},
        {name:"Monitors", img:"https://rukminim2.flixcart.com/image/312/312/xif0q/monitor/b/o/k/-original-imagyws5aqywyz88.jpeg?q=70", price:"477"},
        {name:"Projectors", img:"https://rukminim2.flixcart.com/image/612/612/xif0q/projector/r/a/o/-original-imagtr8npfrsbx6s.jpeg?q=70", price:"683"},
        {name:"Top selling keyboards", img:"https://rukminim2.flixcart.com/image/612/612/xif0q/keyboard/gaming-keyboard/j/8/w/f2023-aula-original-imagr4m2gjqgfgag.jpeg?q=70", price:"27"},
        {name:"Monitors", img:"https://rukminim2.flixcart.com/image/312/312/xif0q/monitor/k/u/o/-original-imagwdpygtzqzyux.jpeg?q=70", price:"677"},
        {name:"View sonic Monitors", img:"https://rukminim2.flixcart.com/image/312/312/kox8b680/monitor/z/5/n/vx3258-2kpc-mhd-32-vs17752-viewsonic-original-imag39uy7t8fhrgp.jpeg?q=70", price:"77"},
        {name:"Top camers", img:"https://rukminim2.flixcart.com/image/312/312/l5fnhjk0/dslr-camera/g/t/7/eos-r10-24-2-r10-canon-original-imagg4y52cybasdr.jpeg?q=70", price:"653"}
    ]

  return (
    <>
    <ProductOverViewTemplate products={products} header={"Best of Electronics"} lastid={"second-row-last"}  firstid={"second-row-first"}/>
    </>
  )
}

export default ProductOverviewSecondrow;