// ..............THIS FILE CONTAIN FOOTER OF THE WEBSITE .................
import React from 'react'
export default function Footer() {
    return (
        <>
            <footer>
     {/*..........IMPORTANT LINK SECTION ...........*/}
                <div className="importantLinkBox" >
                    <div className="importantLink">
                        <ul>
                            <li><a href="#">Shop</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Contact</a></li>

                        </ul>
                    </div>
                    <div className="importantLink">
                        <ul>
                            <li><a href="#">Shipping</a></li>
                            <li><a href="#">Store Policy</a></li>
                            <li><a href="#">Payment </a></li>
                            <li><a href="#">Return</a></li>
                        </ul>
                    </div>
                    <div className="importantLink">
                        <ul>
                            <li><a href="#">Price Alert</a></li>
                            <li><a href="#">Storage</a></li>
                            <li><a href="#">Payment </a></li>
                            <li><a href="#">Return</a></li>
                        </ul>
                    </div>
                    <div className="importantLink">
                        <ul>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Twitter </a></li>
                            <li><a href="#">Pinterest</a></li>
                        </ul>
                    </div>
                </div>
{/* ..............EMAIL SECTION............... */}
                <div className="yourEmail">
                    <input type="email" id="email" name="email" placeholder="Enter Your Email" />
                    <button type="reset" id="email" >Submit</button>
                </div>
            </footer>

        </>
    )
}

