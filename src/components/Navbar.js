// ...............THIS FILE IS FOR TOP OF WEBSITE AND CONTAINS TWO SECTION 
// SECTION 1 AND 2 . SECTION 1 IS ON TOP MOST OF THE WEBSITE AND SECTION 2 IS JUST BELOW SECTION 1......................

import React from 'react'
export default function Navbar(props) {
    // .....FOLLOWING FUNCTION ARE USE FOR CHANGING STYLE OF WEBSITE....
    let mystyle = {
        color: props.mode === 'white' ? 'black' : 'white',
    }
    const textcolor = () => {
        if (props.mode === "black") {
            return "Light"
        }
        else if (props.mode === "white") {
            return "Dark"
        }
    }
    const backgroundColorofNavbar = () => {
        if (props.mode === "black") {
            return "black"
        }
        else if (props.mode === "white") {
            return " rgb(100, 195, 236)"
        }
    }
    function Hidding() {
        document.getElementById('loginPage').style.display = 'none'
    }
    function Showing() {
        document.getElementById('loginPage').style.display = 'block'
    }
    return (
        <>
            {/* SECTION 1:-....THIS SECTION CONTAINS LOGO OF WEBSITE ,SEARCH BAR,MYCART ICON BUTTON ,NOTIFICATION ICON BUTTON AND LIKES PRODUCTICON BUTTON  ........... */}

            <div className="navbar" style={{ backgroundColor: backgroundColorofNavbar() }}>
                <div className='logobox'>
                    <div className='logopic'>
                        <img src="./T.gif"></img>
                    </div>
                    <div className="logo" style={{ color: props.mode === "black" ? "white" : "black" }}>
                        TECHlance
                    </div>
                </div>
    {/* mode change button dark and white */}
                <div className="Buttonformode">
                    <button className="modebuttonbox" onClick={props.enablemode} style={{
                        backgroundColor: props.mode === "black" ? "white" : "",
                        color: props.mode,
                    }}>{textcolor()}</button>
                </div>
    {/* ...SERCHBOX.. */}
                <div className="searchbox" >
                    <i className="fa fa-search" style={mystyle} />
                    <input type="text" placeholder="Type Here For search" />
                </div>
    {/* ..LOGIN BUTTON... */}
                <div className="login" >
                    <button className="login-button" onClick={Showing}style={{ color: props.mode === "black" ? "black" : "white", backgroundColor: props.mode === "black" ? "white" : "black", }}
                        type="text">login</button>
                </div>
                <div id="loginPage" className="Login-page">
                    <span onClick={Hidding} className="close"
                        title="Close Login-page">&times;</span>
                    <form className="Login-page-content animate" action="/action_page.php">
                        <div className="Login-page-box">
                            <label for="uname"><b>Username</b></label>
                            <input type="text" placeholder="Enter Username" name="uname" required />
                            <label for="psw"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="psw" required />
                            <button type="submit">Login</button>
                            <button type="button" onClick={Hidding} className="cancelbtn">Cancel</button>
                        </div>
                         
                        
                    </form>
                </div>
    {/* ..ICON BOX ... */}
                <div className='iconbox'>
                    <div className='mynotification'>
                        <a href='#'><i className="fa fa-bell" style={mystyle} ></i></a>
                    </div>
                    <div className='mycart'>
                        <a href='#'><i className="fa fa-shopping-cart" style={mystyle} ></i></a>
                    </div>
                    <div className='mycart'>
                        <a href='#'><i className="fa fa-heart" style={mystyle} ></i></a>
                    </div>
                </div>
            </div>
            <div>
            </div>


            {/* SECTION 2:-..........THIS SECTION CONTAINS LINKS FOR DEFFENTS CATEGORIES OF PRODUCT ........... */}
            <nav className="ListNavbar" style={{ backgroundColor: props.mode === "black" ? "grey" : "white" }}>
                <ul className="ListNavbar-link">
                    <input type="checkbox" id="checkbox_toggle" />
                    <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
                    <div className="ListNavbar-menu">

                        <li className="ListNavbar-link-box">
                            <a href="/">Electronis</a>
                            <ul className="dropdown">
                                <li><a href="/">LAPTOP</a></li>
                                <li><a href="/">MOBILE</a></li>
                                <li><a href="/">TABLET</a></li>
                                <li><a href="/">MACBOOK</a></li>
                                <li><a href="/">HEADSET</a></li>
                            </ul>
                        </li>
                        <li className="ListNavbar-link-box">
                            <a href="/">TVs & Appliances</a>
                            <ul className="dropdown">
                                <li><a href="/">TV</a></li>
                                <li><a href="/">Washing Machine</a></li>
                                <li><a href="/">Air Condistioner</a></li>
                                <li><a href="/">Freeze</a></li>
                                <li><a href="/">Cooler</a></li>
                                <li><a href="/">Fans</a></li>
                            </ul>
                        </li>
                        <li className="ListNavbar-link-box">
                            <a href="/">Men</a>
                            <ul className="dropdown">
                                <li><a href="/">Top Wear</a></li>
                                <li><a href="/">Bottom Wear</a></li>
                                <li><a href="/">Suit Blazers</a></li>
                                <li><a href="/">Caps</a></li>
                                <li><a href="/">shoes</a></li>
                            </ul>
                        </li>
                        <li className="ListNavbar-link-box">
                            <a href="/">Women</a>
                            <ul className="dropdown">
                                <li><a href="/">Top Wear</a></li>
                                <li><a href="/">Bottom Wear</a></li>
                                <li><a href="/">Suit Blazers</a></li>
                                <li><a href="/">Caps</a></li>
                                <li><a href="/">shoes</a></li>
                            </ul>
                        </li>
                        <li className="ListNavbar-link-box">
                            <a href="/">Baby & Kids</a>
                            <ul className="dropdown">
                                <li><a href="/">Top Wear</a></li>
                                <li><a href="/">Bottom Wear</a></li>
                                <li><a href="/">Suit Blazers</a></li>
                                <li><a href="/">Caps</a></li>
                                <li><a href="/">shoes</a></li>
                            </ul>
                        </li>
                        <li className="ListNavbar-link-box">
                            <a href="/">Home & Furniture
                            </a>
                            <ul className="dropdown">
                                <li><a href="/">Wooden Items</a></li>
                                <li><a href="/">Chair</a></li>
                                <li><a href="/">Table</a></li>
                                <li><a href="/">Utensils</a></li>
                                <li><a href="/">Matress</a></li>
                            </ul>
                        </li>
                        <li className="ListNavbar-link-box">
                            <a href="/">Sports </a>
                            <ul className="dropdown">
                                <li><a href="/">Cricket Items</a></li>
                                <li><a href="/">Football Items</a></li>
                                <li><a href="/">Badminton Items</a></li>
                                <li><a href="/">Chess Board</a></li>
                                <li><a href="/">Sports Shoes</a></li>
                            </ul>
                        </li>
                        <li className="ListNavbar-link-box">
                            <a href="/">Books</a>
                            <ul className="dropdown">
                                <li><a href="/">Famous Athors</a></li>
                                <li><a href="/">TextBooks</a></li>
                                <li><a href="/">Entertainment</a></li>
                                <li><a href="/">Science</a></li>
                                <li><a href="/">Economics</a></li>
                            </ul>
                        </li>

                        <li className="ListNavbar-link-box">
                            <a href="/">Offer Zone</a>
                            <ul className="dropdown">
                                <li><a href="/">Get Discount</a></li>
                            </ul>
                        </li>

                    </div>
                </ul>
            </nav>
        </>
    )
}
