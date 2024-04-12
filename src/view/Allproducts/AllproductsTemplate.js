import React from 'react'
import "./AllproductsTemplate.css"
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Title from 'react-vanilla-tilt'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// <Title style={{height: "100%", width:"100%"}} options={{ scale: 2, max: 35,  perspective:1000, }}>

function AllproductsTemplate() {

  const [value, setValue] = React.useState([2000, 9000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function valuetext(value) {
    return `${value}°C`;
  }
  return (
    <>
    <div className='all-product-continer'>
      <div className='all-latest-launched-products-filter-continer'>
        <div className='all-latest-launched-products'>
            <div className='all-latest-launched-products-img-continer'>
                <img src='https://rukminim2.flixcart.com/image/612/612/xif0q/printer/f/4/k/-original-imagnuwefsvxhvvx.jpeg?q=70' alt='network error'/>
            </div>
            <p className='all-latest-launched-products-text'>Latest launched products</p>
            <p className='all-latest-launched-products-text-sub'>Sale Live Just $56</p>
        </div>

      

        <div className='all-product-overview-filter-continer'>
              <div className="all-product-overview-filter-continer-inner-margin" >
                  <div className="all-product-overview-filter-header" >
                    <p className="all-product-overview-filter-header-text-left">Filters</p>
                    <p className="all-product-overview-filter-header-text-right">Clear</p>
                  </div>
                        <div className="all-product-overview-filter-categories-continer">
                            <p className="all-product-overview-filter-categories-title">
                              categories
                            </p>
                            <p className="all-product-overview-filter-categories-text"><KeyboardArrowLeftIcon/> {" Computer"}</p>
                            <p className="all-product-overview-filter-categories-text"><KeyboardArrowLeftIcon/> {" Laptop"}</p>
                            <p className="all-product-overview-filter-categories-text"> <KeyboardArrowLeftIcon/>{" Computer & Laptop"}</p>
                        </div>



                              <div className="all-product-overview-filter-price-continer">

                                <p className="all-product-overview-filter-price-title">
                                  price
                                </p>

                                <div className='all-product-overview-filter-price-slider'>
                                <Box sx={{ width: "90%" }}>
                                  <Slider
                                    getAriaLabel={() => 'Temperature range'}
                                    value={value}
                                    onChange={handleChange}
                                    valueLabelDisplay="auto"
                                    getAriaValueText={valuetext}
                                    max={"10000"}
                                  />
                                </Box>
                                </div>

                                <div className='all-product-overview-filter-price-selector-continer'>
                                  <select>
                                    <option>Min</option>
                                    <option>Max</option>
                                  </select>
                                  <p>to</p>
                                  <select>
                                  <option>200</option>
                                  <option>400</option>
                                  <option>600</option>
                                  <option>1000</option>
                                  <option>2000</option>
                                  <option>3000</option>
                                  <option>4000</option>
                                  <option>5000</option>
                                  <option>6000</option>
                                  <option>7000 +</option>
                                    </select>
                                </div>

                                </div>

                             <div className='all-product-overview-filter-deep-filter'>

                              <div className='all-product-overview-filter-deep-filter-child'>
                             <Accordion style={{width:"98%", position:"", top:"0px"}}>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1-content"
                                  id="panel1-header"
                                >
                                  DISCOUNTS
                                </AccordionSummary>
                                <AccordionDetails>
                                 <div className='all-product-overview-filter-deep-filter-list'>
                                 <div>
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                <label for="vehicle1"> DISCOUNTS</label>
                                </div>
                                
                                 </div>
                                </AccordionDetails>
                              </Accordion>
                              </div>
                              
                               <Accordion style={{width:"98%", position:"relative", top:"auto"}}>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel2-content"
                                  id="panel2-header"
                                >
                                  TYPE
                                </AccordionSummary>
                                <AccordionDetails>
                                 <div className='all-product-overview-filter-deep-filter-list'>

                                <div>
                                  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
                                  <label for="vehicle2"> TYPE</label>
                                  </div>
                                  </div>
                                </AccordionDetails>
                              </Accordion> 
                              <Accordion style={{width:"98%", position:"", top:"0px"}}>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1-content"
                                  id="panel1-header"
                                >
                                 AVAILABILITY
                                </AccordionSummary>
                                <AccordionDetails>
                                <div className='all-product-overview-filter-deep-filter-list'>
                                <div>
                                  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                                  <label for="vehicle3"> AVAILABILITY</label>
                                  </div>
                                  </div>
                                </AccordionDetails>
                              </Accordion> <Accordion style={{width:"98%", position:"", top:"0px"}}>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1-content"
                                  id="panel1-header"
                                >
                                 OFFERS
                                </AccordionSummary>
                                <AccordionDetails>
                                <div className='all-product-overview-filter-deep-filter-list'>
                                <div>
                                  <input type="checkbox" id="vehicle4" name="vehicle4" value="Boat"/>
                                  <label for="vehicle4"> OFFERS</label>
                                  </div>
                                  </div>
                                </AccordionDetails>
                              </Accordion> <Accordion style={{width:"98%", position:"", top:"0px"}}>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1-content"
                                  id="panel1-header"
                                >
                                 CUSTOMER RATING
                                </AccordionSummary>
                                <AccordionDetails>
                                <div className='all-product-overview-filter-deep-filter-list'>
                                <div>
                                  <input type="checkbox" id="vehicle5" name="vehicle5" value="Boat"/>
                                  <label for="vehicle5"> CUSTOMER RATING</label>
                                  </div>
                                  </div>
                                </AccordionDetails>
                              </Accordion> <Accordion style={{width:"98%", position:"", top:"0px"}}>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1-content"
                                  id="panel1-header"
                                >
                                 BRAND
                                </AccordionSummary>
                                <AccordionDetails>
                                <div className='all-product-overview-filter-deep-filter-list'>
                                <div>
                                  <input type="checkbox" id="vehicle6" name="vehicle6" value="Boat"/>
                                  <label for="vehicle6"> BRAND</label>
                                  </div>
                                  </div>
                                </AccordionDetails>
                              </Accordion>
                              </div>   



                    </div>
          
            </div>
        </div>



        <div className='all-product-overview'>
          <div className='all-product-overview-inner-div-margin'>

            <div className='all-product-overview-header'>
              <p className='all-product-overview-product-name'>Product Name</p>
              <p className='all-product-overview-product-no-details'>(Showing 1 – 40 products of 72 products)</p>
            </div>




            <div className='all-product-overview-items-continer'>
              {
              [0,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,].map((value)=>{
                return(
                <div className='all-product-overview-items'>
                      <Title style={{height: "auto", width:"auto"}} options={{ scale: 2, max: 35,  perspective:1000, }}>
                    <div className='all-product-overview-items-inner'>
                      <div className='all-produt-overview-items-header-favicon'><FavoriteBorderIcon style={{color:"#AAA"}}/></div>
                        <div className='all-produt-overview-items-img-continer'>
                          <img src='https://rukminim2.flixcart.com/image/612/612/xif0q/printer/f/4/k/-original-imagnuwefsvxhvvx.jpeg?q=70' alt='network error'></img>
                        </div>
                        <p className='all-produt-overview-items-details'>HP Smart Tank All In One 589 Multi-function WiFi Color Ink Tank Printer</p>
                            <div className='all-produt-overview-items-rating-continer'>
                                <p className='all-produt-overview-items-rating-box'>4.5</p>
                                <p className='all-produt-overview-items-rating-text'>(2,342)</p>
                            </div>
                                <div className='all-produt-overview-items-price-continer'>
                                  <p className='all-produt-overview-items-price'>₹{"23,654"}</p>
                                  <p className='all-produt-overview-items-realprice'>₹{"26,453"}</p>
                                  <p className='all-produt-overview-items-offer-percentege'>20% off</p>
                                </div>
                                  <p className='all-produt-overview-items-offer-price'>Upto <span>₹400</span> Off on Exchange</p>
                          </div>
                          </Title>
                </div>
              )})}
            </div>


          </div>
        </div>
        
        {/* <div className='all-product-overview-filter-continer'>        </div> */}



    </div>
    </>
  )
}

export default AllproductsTemplate