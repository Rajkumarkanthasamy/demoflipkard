import React from 'react'
import "./SubMenuBar.css"
// import MoreProducts from "../header/moreoption/MoreOption"
import Eletronics from "./Electronics/Electronics"
import TvApplication from "./TVs & Appliances/TVs & Appliances"
import Men from "./Men/Men"
import Women from "./Women/Women"
import BabyKids from "./Baby & Kids/BabyKids"
import HomeFurniture from "./Home & Furniture/HomeFurniture"
import Sportsetc from "./BeatyToys & More/SportsBooksMore"
import Grocery from './grocery/Grocery'
import Mobiles from './mobiles/Mobiles'
import Fashion from './fashion/Fashion'
import Appliances from './appliances/Appliances'
import Travel from './travel/Travel'
import BeatyOthers from "./BeatyToys & More/SportsBooksMore"
import TwoWhellers from './twowheelers/TwoWheelers'
function ProductOverView() {
  return (
    <>
    <div className='main-continer-landing-page'>
    <div className='main-sub-continer'>
        <Grocery/>
        <Mobiles/>
        <Fashion/>
        <Eletronics/>
        <HomeFurniture/>
        <Appliances/>
        <Travel/>
        <BeatyOthers/>
        <TwoWhellers/>
        </div>
    </div>
    </>
  )
}

export default ProductOverView