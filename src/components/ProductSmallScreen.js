// ...............THIS FILE IS FOR SMALL SCREEN ONLY (MAX-WIDTH =900PX) AND CONTAIN DETAILS ABOUT A PARTICULAR
// PRODUCT LIKES ITS IMAGE ,FEATURE ,PRICE ,DISCOUNT, etc.......................

import React from 'react'
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
export default function ProductSmallScreen(props) {
// THESE FUNCTION TAKE PROPS AND SET STYLE ACCORDINGLY.......
    let mystyle = {
        backgroundColor: props.mode === "white" ? 'white' : 'grey',
        color: props.mode === 'white' ? 'black' : 'white',
    }
    let myboxstyle = {
        backgroundColor: props.mode === 'white' ? 'white' : 'white',
        color: props.mode === 'white' ? 'black' : 'white',
    }
    return (
        <>
            <div className="Product-details-For-Mobile" style={mystyle}>

            {/* ..............THIS SECTION CONTAIN IMAGE OF PRODUCT........... */}

                <div className="ForMobile-Product-Image"><Flip Right>
                    <img src="https://rukminim1.flixcart.com/image/416/416/l0fm07k0/mobile/1/k/g/-original-imagc7ukmgugpdfy.jpeg?q=70" />
                    </Flip><div className="ADDtoCart-and-BuyNow">
                        <button><i className="fa fa-shopping-cart"></i>ADD TO CART</button>
                        <button><i className="fa fa-shopping-bag"></i>BUY NOW</button>
                    </div>
                </div>
            {/* ..............THIS SECTION CONTAIN INITIAL FEATURE OF PRODUCT........... */}

                <div className="ForMobile-product-color-storage">
                    <div className="product-color">
                        Color
                        <div className="product-color-img"><img src="https://rukminim1.flixcart.com/image/416/416/l0fm07k0/mobile/1/k/g/-original-imagc7ukmgugpdfy.jpeg?q=70" />
                        </div>
                        <div className="product-color-img"><img src="https://rukminim1.flixcart.com/image/312/312/l0fm07k0/mobile/y/g/i/-original-imagc7ryyhrrcgxh.jpeg?q=70" />
                        </div>
                    </div>
                    <div className="product-storage">
                        Storage
                        <div className="product-storage-inGB">64 GB</div>
                        <div className="product-storage-inGB">128 GB</div>
                    </div>
                    <div className="product-RAM">
                        RAM
                        <div className="product-RAM-inGB">4 GB</div>
                        <div className="product-RAM-inGB">6 GB</div>
                    </div>
                </div>
            {/* ..............THIS SECTION CONTAIN BASIC DETAILS  OF PRODUCT........... */}

                <div className="ForMobile-Product-basic-details">
                    <ul>
                        <li>
                            <h4><Zoom>Realme C35 (Glowing Black, 64 GB) &nbsp &nbsp (4 GB RAM)</Zoom></h4>
                        </li>
                        <li>
                            <div className="Rating-Button">4.4 <i className="fa fa-star"></i></div>
                        </li>
                        <li>
                            <h5>1,66,596 Ratings & 9,669 Reviews</h5>
                        </li>
                        <li>
                            <h6>Extra ₹2000 off</h6>
                        </li>
                        <li>
                            <h2>₹11,999 </h2>
                        </li>
                        <li>
                            <h5><s>₹13,999</s>  14% off <i className="fa fa-info-circle"></i></h5>
                        </li>
                    </ul>
                </div>
            {/* ..............THIS SECTION CONTAIN OFFER AVAILABLE WITH PRODUCT........... */}

                <div className="Available-Offer">
                    <ul>
                        <Zoom><li><b>Bank Offer</b> 5% Cashback on TECHlance Axis Bank Card T&C</li></Zoom>
                        <Zoom><li><b>Bank Offer</b> ₹1000 Off On ICICI bank Credit EMI, Credit T&C</li></Zoom>
                        <Zoom><li><b>Special Price </b>Get extra ₹2000 off (price inclusive of cashback/coupon)T&C</li></Zoom>
                        <Zoom><li><b>Partner Offer </b>Sign up for TECHlance Pay Later and get TECHlance Gift Card worth up to
                            ₹500*</li></Zoom>

                    </ul>
                </div>
            {/* ..............THIS SECTION CONTAIN IMAGE OF DIFFERNT VIEW OF PRODUCT ........... */}

                <div className="Product-OtherPart-Image" style={mystyle}>

                    <img src="https://rukminim1.flixcart.com/image/128/128/l0fm07k0/mobile/8/w/z/-original-imagc7ukpz8y4gpb.jpeg?q=70" />
                    <img src="https://rukminim1.flixcart.com/image/832/832/l0fm07k0/mobile/n/d/e/-original-imagc7ukkqhprtwd.jpeg?q=70" />
                    <img src="https://rukminim1.flixcart.com/image/832/832/l0fm07k0/mobile/r/p/l/-original-imagc7ukpxsygqjr.jpeg?q=70" />
                    <img src="https://rukminim1.flixcart.com/image/128/128/l0fm07k0/mobile/d/p/p/-original-imagc7ukdgaqgk5t.jpeg?q=70" />
                    <img src="https://rukminim1.flixcart.com/image/128/128/l0fm07k0/mobile/q/r/f/-original-imagc7ukvvyqq6ss.jpeg?q=70" />

                </div>
            {/* ..............THIS PART CONTAIN HIGHLIGHT FEATURE  OF PRODUCT........... */}
                <div className="Product-HighLights">
                    <h3>Highlights</h3>
                    <ul>
                        <Zoom><li>4 GB RAM | 64 GB ROM | Expandable Upto 1 TB</li></Zoom>
                        <Zoom><li>16.76 cm (6.6 inch) Full HD+ Display</li></Zoom>
                        <Zoom><li>50MP + 2MP + 0.3MP | 8MP Front Camera</li></Zoom>
                        <Zoom><li>5000 mAh Lithium Polymer Battery</li></Zoom>
                        <Zoom><li>Unisoc Tiger T616 Processor</li></Zoom>

                    </ul>
                </div>

            {/* ..............THIS SECTION CONTAIN ACCESSORIES OF PRODUCT........... */}
                <div className="Additional-Items-With-Product" style={mystyle}>
                    <div className="Title"><b>Buy together and save upto 10%</b></div>
                    <div className="with-Product" style={myboxstyle}><Flip Right>
                        <img src="https://rukminim1.flixcart.com/image/416/416/l0fm07k0/mobile/1/k/g/-original-imagc7ukmgugpdfy.jpeg?q=70" />
                    </Flip><div className="Additional-Item-Details">
                            <h5>realme C35 (Glowing Black, 64 GB)
                                <br />4.4 <i className="fa fa-star"></i> (1,66,290) <br />
                                ₹11,999 <s> ₹13,999</s> 14% off
                            </h5>
                        </div>
                    </div>
                    <div className="with-Product" style={myboxstyle}><Flip Right>
                        <img src="https://rukminim1.flixcart.com/image/312/312/l19m93k0/cases-covers/back-cover/y/d/p/transparent-c35-magichub-original-imagcvevqvhakh7v.jpeg?q=70" />
                    </Flip><div className="Additional-Item-Details">
                            <h5>TECHlance SmartBuy Back Cover for Realme C35
                                <br />4.1 <i className="fa fa-star" /> (1,738) <br />
                                ₹143 <s> ₹159</s> 10% off
                            </h5>
                        </div>
                    </div>
                    <div className="with-Product" style={myboxstyle}><Flip Right>
                        <img
                            src="https://rukminim1.flixcart.com/image/312/312/kekadu80/screen-guard/edge-to-edge-tempered-glass/y/y/z/flipkart-smartbuy-mr9-mtb-original-imafv85ze4faacfg.jpeg?q=70" />
                    </Flip> <div className="Additional-Item-Details" >
                            <h5> Edge Tempered Glass for Mi Redmi 9a,
                                <br />3.9 <i className="fa fa-star"></i> (1,66,290) <br />
                                ₹142 <s> ₹159</s> 11% off
                            </h5>
                        </div>
                    </div>

                </div>



            {/* ..............THIS SECTION CONTAIN PRODUCT DISCRIPTION........... */}
                <div className="ForMobile-Product-Discription">
                    <h3>Product Discription</h3>
                    <div className="ForMobile-Product-Discription-card">
                        <div className="ForMobile-Product-Discription-img">
                        <Flip Right> <img src="https://rukminim1.flixcart.com/image/200/200/cms-rpd-images/0da30535ca8246e98b041548e700e8f4_17f8cdee0a8_image.jpeg?q=90"/></Flip>
                        </div>
                        <div className="ForMobile-Product-Discription-text">
                            <Bounce><h3>Dedicated 3-Card Slot</h3>
                             Thanks to the 2 SIM card slots and a microSD card slot on this
                            realme C35 mobile phone, you can enjoy blazing-fast network
                            connectivity as well as massive storage.</Bounce>
                        </div>
                    </div>
                    <div className="ForMobile-Product-Discription-card">
                        <div className="ForMobile-Product-Discription-img">
                        <Flip> <img src="https://rukminim1.flixcart.com/image/200/200/cms-rpd-images/42156616237a4d06ba3d6bf92fae2083_17f8cdefc4f_image.jpeg?q=90"/></Flip>
                        </div>
                        <div className="ForMobile-Product-Discription-text">
                        <Bounce><h3>18 W Fast Charging</h3>
                            The 18 W power adapter enhances the battery life of this
                            smartphone within a short time, thus allowing you
                            to enjoy your phone throughout the day.</Bounce>
                        </div>
                    </div>
                    <div className="ForMobile-Product-Discription-card">
                        <div className="ForMobile-Product-Discription-img">
                           <Flip> <img src="https://rukminim1.flixcart.com/image/200/200/cms-rpd-images/ba9b7eb268204bdd90aadec5b9fd686d_17f8cdf5d13_image.jpeg?q=90"/></Flip>
                        </div>
                        <div className="ForMobile-Product-Discription-text">
                        <Bounce><h3>Capture Clear Photos with AI Triple Camera</h3>
                            The 50 MP AI Triple Camera of this realme C35 smartphone come
                            equipped with 3 specially designed lenses that allow you to
                            experiment with photography for capturing clear images.</Bounce>
                        </div>
                    </div>
                </div>


            </div>


        </>
    )
}

