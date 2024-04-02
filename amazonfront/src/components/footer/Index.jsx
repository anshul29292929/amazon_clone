import React from "react";
import { Link } from "react-router-dom";
import './css/footer.css'

export default function Footer() {
    return (
        <footer className="footer z-0 bg-black">
            <nav className="footer-nav bg-gray-800">
                <div className="back-to-top text-center">
                    <button className="back-to-top bg-slate-500 text-white text-center w-full pb-3 pt-3">
                        Back to top
                    </button>
                </div>
                <div className="div-footer text-white">  
                    <div className="footer-mainmenu flex flex-wrap text-sm ml-72 pb-20 pt-16">
                        {/* First column */}
                        <div className="get-to-know text-white mr-24">
                            <h1 className="font-bold">Make Money with Us</h1>
                            <div className="cart-menu border-transparent flex flex-col">
                                <Link to="sell-on-amazon" className="hover:underline pt-2 ml-3 text-white">
                                    Sell on Amazon
                                </Link>
                                <Link to="sell-under-amazon-accelerator" className=" pt-2 hover:underline ml-3 text-white">
                                    Sell under Amazon Accelerator
                                </Link>
                                <Link to="protect-and-build-your-brand" className=" pt-2 hover:underline ml-3 text-white">
                                    Protect and Build Your Brand
                                </Link>
                                <Link to="amazon-global-selling" className="pt-2 hover:underline ml-3 text-white">
                                    Amazon Global Selling
                                </Link>
                                <Link to="become-an-affiliate" className="pt-2 hover:underline ml-3 text-white">
                                    Become an Affiliate
                                </Link>
                            </div>
                        </div>
                        <div className="get-to-know text-white mr-24">
                            <h1 className="font-bold">Get to Know Us</h1>
                            <div className="cart-menu border-transparent flex flex-col">
                                <Link to="lionjek.com" className="hover:underline ml-3 text-white pt-2 ">
                                    Facebook
                                </Link>
                                <Link to="lionjek.com" className="hover:underline ml-3 text-white pt-2">
                                    Twitter
                                </Link>
                                <Link to="lionjek.com" className="hover:underline ml-3 text-white pt-2">
                                    Instagram
                                </Link>
                            </div>
                        </div>  
                        {/* Second column */}
                        <div className="get-to-know text-white mr-24">
                            <h1 className="font-bold">Grow Your Business</h1>
                            <div className="cart-menu border-transparent flex flex-col">
                                <Link to="fulfilment-by-amazon" className="hover:underline ml-3 text-white pt-2">
                                    Sell on Amazon
                                </Link>
                                <Link to="fulfilment-by-amazon" className="hover:underline ml-3 text-white pt-2">
                                    Sell under Amazon Accelerator
                                </Link>
                                <Link to="fulfilment-by-amazon" className="hover:underline ml-3 text-white pt-2">
                                    Protect and Build Your Brand
                                </Link>
                                <Link to="fulfilment-by-amazon" className="hover:underline ml-3 text-white pt-2">
                                    Amazon Global Selling
                                </Link>
                                <Link to="fulfilment-by-amazon" className="hover:underline ml-3 text-white pt-2">
                                    Become an Affiliate
                                </Link>
                                <Link to="fulfilment-by-amazon" className="hover:underline ml-3 text-white pt-2">
                                    Fulfilment by Amazon
                                </Link>
                                <Link to="advertise-your-products" className="hover:underline ml-3 text-white pt-2">
                                    Advertise Your Products
                                </Link>
                                <Link to="amazon-pay-on-merchants" className="hover:underline ml-3 text-white pt-2">
                                    Amazon Pay on Merchants
                                </Link>
                            </div>
                        </div>
                        {/* Third column */}
                        <div className="get-to-know text-white mr-24">
                            <h1 className="font-bold">Let Us Help You</h1>
                            <div className="cart-menu border-transparent flex flex-col">
                                <Link to="covid-19-and-amazon" className="hover:underline ml-3 text-white pt-2">
                                    COVID-19 and Amazon
                                </Link>
                                <Link to="your-account" className="hover:underline ml-3 text-white pt-2">
                                    Your Account
                                </Link>
                                <Link to="returns-centre" className="hover:underline ml-3 text-white pt-2">
                                    Returns Centre
                                </Link>
                                <Link to="100-percent-purchase-protection" className="hover:underline ml-3 text-white pt-2">
                                    100% Purchase Protection
                                </Link>
                                <Link to="amazon-app-download" className="hover:underline ml-3 text-white pt-2">
                                    Amazon App Download
                                </Link>
                                <Link to="help" className="hover:underline ml-3 text-white pt-2">
                                    Help
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="2-main-menu border-t-2 border-gray-400">
                        <div className="footer-log">
                            <div className="logo-div mb-1 mt-4 text-center flex justify-center">
                                <img className="h-6 mx-2 my-3" src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/large-images-amazon-png-logo-vector-7.png3ft3d1416935166817" />
                                <div className="language-col ml-24 border-2 border-solid border-transparent border-gray-300 bg-transparent">
                                    <select className="pt-3 pr-3 pl-3 pb-3 bg-transparent font-bold text-gray-300 " name="Language" id="products-categories">
                                        <option value="english">
                                            English
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="countrynames text-sm text-center pb-3 pt-3">
                            <Link className="pl-3">
                                India
                            </Link>
                            <Link className="pl-3">
                                Brazil
                            </Link>
                            <Link className="pl-3">
                                Canada
                            </Link>
                            <Link className="pl-3">
                                China
                            </Link>
                            <Link className="pl-3">
                                France
                            </Link>
                            <Link className="pl-3">
                                Germany
                            </Link>
                            <Link className="pl-3">
                                Italy
                            </Link>
                            <Link className="pl-3">
                                Japan
                            </Link>
                            <Link className="pl-3">
                                Mexico
                            </Link>
                            <Link className="pl-3">
                                Netherlands
                            </Link>
                            <Link className="pl-3">
                                Poland
                            </Link>
                            <Link className="pl-3">
                                Singapore
                            </Link>
                            <Link className="pl-3">
                                Spain
                            </Link>
                            <Link className="pl-3">
                                Turkey
                            </Link>
                            <Link className="pl-3">
                                United Arab Emirates
                            </Link>
                            <br />
                            <Link className="pl-3">
                                United Kingdom
                            </Link>
                            <Link className="pl-3">
                                United States
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="3-footer bg-black text-gray-300 flex justify-center pb-4">
                    <div className="col-1-footer items-center justify-center font-12px">
                        <div className="footer-c mt-8">
                            <Link className="mr-32 hover:underline">
                                <p className="font-bold">                    
                                    AbeBooks
                                </p>
                                Scalable Cloud <br />
                                Computing Services
                            </Link>
                        </div>
                        <div className="footer-d mt-8">
                            <Link className=" mt-16 pt-16 hover:underline">
                                <p className="font-bold">                    
                                    Shopbop
                                </p>
                                Designer <br />
                                Fashion Brands
                            </Link>
                        </div>
                        
                    </div>
                    <div className=" font-12px">
                        <div className="footer-c mt-8">
                            <Link className="mr-32 hover:underline">
                                <p className="font-bold">                    
                                    Audible
                                </p>
                                Download Audio <br />
                                Books
                            </Link>
                        </div>
                        <div className="footer-c mt-8"></div>
                            <Link className="mr-32 hover:underline">
                                <p className="font-bold">                    
                                    Prime Now
                                </p>
                                2-hour Delivery <br />
                                On Everyday Items
                            </Link>
                    </div>
                    
                    <div className="footer-col-2 font-12px">
                        <div className="footer-c mt-8">
                            <Link className=" hover:underline">
                                <p className="font-bold">                    
                                    AbeBooks
                                </p>
                                Books, art <br />
                                & collectibles
                            </Link>
                        </div>    
                        <div className="footer-c mt-8">
                            <Link className=" hover:underline">
                                <p className="font-bold">                    
                                    Prime Now
                                </p>
                                2-hour Delivery <br />
                                On Everyday Items
                            </Link>
                        </div>
                    </div>
                    <div className=" ml-32 col-1-footer items-center justify-center font-12px">
                        <div className="footer-c mt-8">
                            <Link className="mr-32 hover:underline">
                                <p className="font-bold">                    
                                    IMDB
                                </p>
                                Movies, TV <br />
                                & Celebrities
                            </Link>
                        </div>
                        <div className="footer-c mt-8">
                            <Link className="mr-32 hover:underline">
                                <p className="font-bold">                    
                                    Amazon Prime Music
                                </p>
                                100 million songs, ad-free <br />
                                Over 15 million podcast episodes
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="copyright bg-black text-white  font-12px pt-8">
                    <div className="footer-4-elements flex justify-center">
                        <Link className="mr-4 hover:underline">                    
                            Conditions of Use & Sale
                        </Link>
                        <Link className="mr-4 hover:underline">                    
                            Privacy Notice
                        </Link>
                        <Link className="mr-4 hover:underline">                    
                            Interest-Based Ads
                        </Link>
                    </div>
                    <div className="copyright-notice flex justify-center">
                        <p>
                            © 1996-2024, Amazon.com, Inc. or its affiliates
                        </p>
                    </div>
                </div>
            </nav>
        </footer>
    );
}
