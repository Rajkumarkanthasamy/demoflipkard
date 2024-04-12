import logo from './logo.svg';
import './App.css';
import Header from './view/header/Header';
import ProductOverView from './view/overviewproducts/ProductOverView';
// import CustomizedMenus from './view/header/moreoption/MoreOption'
import Login from './view/Login/Login';
import SignUpHolder from './view/SignUpHolder/SignUpHolder';
import Footer from './view/footer/Footer';
import HomePage from "./components/HomePages"
import  Dashboard  from './components/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingHeaderpage from "./view/LandinPages/header/LandingHeader"
import SubMenu from "./view/LandinPages/SubMenu/overviewproducts/SubMenuBar"
import ProductSlider from './view/LandinPages/Productslider/ProductSlider';
import ProductOverViewLandingPageTemplate from './view/LandinPages/Productsoverview/ProductsOverviewTemplate';
import ProductOverViewFirstrow from './view/LandinPages/Productsoverview/firstrow/ProductOverViewFirstrow';
import ProductOverviewSecondrow from './view/LandinPages/Productsoverview/secondrow/ProductOverviewSecondrow';
import ProductOfferTemplate from './view/LandinPages/productOffer/ProductOfferTemplate';
import ProductsFourItemsTemplate from './view/LandinPages/productOffer/productfouritemstemplate/ProductsFourItemsTemplate';
import AllproductsTemplate from './view/Allproducts/AllproductsTemplate';
import SingleProductsOverviewTemplate from './view/singleprocutsoverview/SingleProductsOverviewTemplate';
function App() {
  return (
    <>
      <div>

      <div> <LandingHeaderpage/></div>
      <div> <SubMenu/></div>
       <div> <ProductSlider/></div>
      <div><ProductOverViewFirstrow/></div>
      <div><ProductOverviewSecondrow/></div>
       <div><ProductOfferTemplate/></div> 
      <div><ProductsFourItemsTemplate/></div>
      <div><ProductOverViewFirstrow/></div>
      <div><ProductOverviewSecondrow/></div>
      <div><ProductOfferTemplate/></div>  
      <div><Footer/></div>





         <div> <Header/></div>
         <div><ProductOverView/></div>
         <div><AllproductsTemplate/></div>
         <div><Footer/></div>

        <div> <Header/></div>
         <div><ProductOverView/></div>
         <div><SingleProductsOverviewTemplate/></div>
         <div><Footer/></div>
         




         <div> <Header/></div>
         <div><ProductOverView/></div>
          <div><Login/></div>
          <div><Footer/></div> 



      {/* <BrowserRouter> 
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
      </Routes>
      </BrowserRouter> */}
      </div>
    </>
  );
}

export default App;
