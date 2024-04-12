import React from 'react'
import "./productoverview.css"
import MoreProducts from "../header/moreoption/MoreOption"
import Eletronics from "./Electronics/Electronics"
import TvApplication from "./TVs & Appliances/TVs & Appliances"
import Men from "./Men/Men"
import Women from "./Women/Women"
import BabyKids from "./Baby & Kids/BabyKids"
import HomeFurniture from "./Home & Furniture/HomeFurniture"
import Sportsetc from "./Sports, Books & More/SportsBooksMore"

function ProductOverView() {
  return (
    <>
    <div className='main-continer-view'>
        <Eletronics/>
        <Men/>
        <Women/>
        <BabyKids/>
        <HomeFurniture/>
        <Sportsetc/>
        <TvApplication/>
    </div>
    </>
  )
}

export default ProductOverView