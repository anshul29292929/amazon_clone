/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin, faUser } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import './css/header.css'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMenucol3, setIsMenucol3] = useState(false);
    const [menuVisible, setMenuVisible] = useState(true);
    const [deleteMenu, setDeleteMenu] = useState(true)
    const [echonandalex, setEchoandAlex] = useState(false)
    const [signinHover, setSigninhover] = useState(false)

    const Menucol3= () =>{
        setIsMenucol3(!isMenucol3);
        setMenuVisible(!menuVisible);
    }
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const deletemenuonclick= () =>{
        setDeleteMenu(!deleteMenu)

    }
    const echhoandalexa=() =>{
        setEchoandAlex(!echonandalex)
    }

    const getpositionofsigninmenu =(positionofelement)=>{
        const rect = positionofelement.getBoundingClientRect();
        console.log(rect);
        window.menupositiony=rect.y+rect.height;
        window.menupositionx = rect.x + rect.width ;
    }

    const signMenu=()=>{
        setSigninhover(!signinHover)
        let positionofelement=document.querySelector(".account-col");
        getpositionofsigninmenu(positionofelement)
    }

    const checkhovermenu = ()=>{
        if (signinHover){
            signMenu()
        }
    }


    return (
        <header className="relative mt-0 h-max">
            <nav className="bg-black relative">
                <div className="main-division flex z-0" >
                    <div className="logo-div mb-1 border-2 border-solid border-transparent hover:border-white">
                        <img className="h-8 mx-2 my-3" src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/large-images-amazon-png-logo-vector-7.png3ft3d1416935166817" />
                    </div>
                    <div className="location mb-1 border-2 border-solid border-transparent hover:border-white">
                        <p className="text-gray-300"> Delivering Lucknow 226010 </p>
                        <div className="location-update flex">
                            <FontAwesomeIcon icon={faLocationPin} className=" text-white top-2 p-1" />
                            <p className="location-p font-bold text-white">
                                Update Location
                            </p>
                        </div>
                    </div>
                    <div className="input mb-1 ml-3 h-10 mt-3 border-solid border-4 rounded-l-lg flex" onMouseEnter={checkhovermenu} >
                        <div className="options will-change-auto">
                            <select className=" w-fit will-change-auto bg-gray-300 h-8 pl-3 pr-3 text-xs" name="ALl" id="products">
                                <option value="ALl">ALL</option>
                                <option value="">Alexa</option>
                                <option value="">Amazon Devices </option>
                                <option value="">Amazon Fashions</option>
                                <option value="">Amazon fresh </option>
                                <option value="">Amazon Pharmacy</option>
                                <option value="">Appliances</option>
                                <option value="">Apps & Books</option>
                                <option value="">Baby</option>
                                <option value="">Beauty</option>
                                <option value="">Books</option>
                                <option value="">Clothing Accesories</option>
                                <option value="">Computer Accesorries</option>
                                <option value="">Electronics</option>
                                <option value="">Mobiles</option>
                                <option value="">Laptops</option>
                                <option value="">Watches</option>
                            </select>
                        </div>
                    </div >
                    <input type="Search your Product" className="input-menu max-w-96 mt-3 h-10 pt-3 input-search bg-white pl-3 pr-3 " onMouseEnter={checkhovermenu} />
                    <div className="search-bar mt-3 rounded-r-xl border-yellow-500 border-solid " onMouseEnter={checkhovermenu}>
                        <FontAwesomeIcon className="pl-3 pr-3 pt-3 pb-3 text-black bg-yellow-500" icon={faSearch}/>
                    </div>
                    <div className="language-col ml-3 mb-1 border-2 border-solid border-transparent hover:border-white mt-4 bg-transparent" onMouseEnter={checkhovermenu}>
                        <select className=" bg-transparent font-bold text-white ml-3" name="Language" id="products-categories">
                            <option value="english">
                                Eng
                            </option>
                        </select>

                    </div>
                    <div className="account-col pl-2 pr-2 ml-3 border-2 border-solid border-transparent mb-1 hover:border-white mt-3 bg-transparent text-white" onMouseEnter ={signMenu}>
                        <p className="text-xs">Hello, Sign in</p>
                        <p className=" text-sm font-bold">Account & Lists</p>
                    </div>
                    <div className="account-col pl-2 pr-2 ml-3 border-2 border-solid border-transparent mb-1 hover:border-white mt-3 bg-transparent text-white" onMouseEnter={checkhovermenu}>
                        <p className="text-xs">Returns</p>
                        <p className=" text-sm font-bold">&Orders</p>
                    </div>
                    <div className="cart-menu flex mt-4 ml-3 mb-1 border-2 border-solid border-transparent hover:border-white">
                        <FontAwesomeIcon className="text-white text-2xl" icon={faCartShopping}/>
                        <p className="font-bold text-white pt-2">Cart</p>
                    </div>
                </div>
                <div className="menu-2 flex">
                    <div className="cart-menu pt-1 pr-3 w-auto mt-0 ml-0 mb-0 border-2 border-solid border-transparent hover:border-white">
                        <Link className=" ml-3 text-white font-bold" onClick={toggleMenu}>
                            <FontAwesomeIcon icon={faBars}/>
                            All
                        </Link>
                    </div>
                    <div className="cart-menu w-auto pt-1 pb-1 pr-3 br-3 border-2 border-solid border-transparent hover:border-white">
                        <Link to="lionjek.com" className=" ml-3 text-white ">
                            Fresh
                        </Link>
                    </div>
                    <div className="cart-menu w-auto pt-1 pb-1 pr-3 border-2 border-solid border-transparent hover:border-white">
                        <Link to="lionjek.com" className=" ml-3 text-white">
                            Amazon miniTV
                        </Link>
                    </div>
                    <div className="cart-menu w-auto pt-1 pb-1 pr-3 border-2 border-solid border-transparent hover:border-white">
                        <Link to="lionjek.com" className=" ml-3 text-white">
                            Sell
                        </Link>
                    </div>
                    <div className="cart-menu w-auto pt-1 pb-1 pr-3 border-2 border-solid border-transparent hover:border-white">
                        <Link to="lionjek.com" className=" ml-3 text-white">
                            Best Sellers
                        </Link>
                    </div>
                    <div className="cart-menu w-auto pt-1 pb-1 pr-3 border-2 border-solid border-transparent hover:border-white">
                        <Link to="lionjek.com" className=" ml-3 text-white">
                            Today's deals
                        </Link>
                    </div>
                    <div className="cart-menu w-auto pt-1 pb-1 pr-3 border-2 border-solid border-transparent hover:border-white">
                        <Link to="lionjek.com" className=" ml-3 text-white">
                            Customer Services
                        </Link>
                    </div>
                    <div className="cart-menu w-auto pt-1 pb-1 pr-3 border-2 border-solid border-transparent hover:border-white">
                        <Link to="lionjek.com" className=" ml-3 text-white">
                            Prime
                        </Link>
                    </div>
                    <div className="cart-menu w-auto pt-1 pb-1 pr-3 border-2 border-solid border-transparent hover:border-white">
                        <Link to="lionjek.com" className=" ml-3 text-white">
                            Electronics
                        </Link>
                    </div>
                    <div className="cart-menu w-auto pt-1 pb-1 pr-3 border-2 border-solid border-transparent hover:border-white">
                        <Link to="lionjek.com" className=" ml-3 text-white">
                            New Releases
                        </Link>
                    </div>
                    <div className="cart-menu w-auto pt-1 pb-1 pr-3 border-2 border-solid border-transparent hover:border-white">
                        <Link to="lionjek.com" className=" ml-3 text-white">
                            Home & Kicthen
                        </Link>
                    </div>
                    <div className="cart-menu w-auto pt-1 pb-1 pr-3 border-2 border-solid border-transparent hover:border-white">
                        <Link to="lionjek.com" className=" ml-3 text-white">
                            Gift Ideas
                        </Link>
                    </div>
                    <div className="cart-menu w-auto pt-1 pb-1 pr-3 border-2 border-solid border-transparent hover:border-white">
                        <Link to="lionjek.com" className=" ml-3 text-white">
                            Amazon Pay
                        </Link>
                    </div>
                    <div className="cart-menu w-auto pt-1 pb-1 pr-3 border-2 border-solid border-transparent hover:border-white">
                        <Link to="lionjek.com" className=" ml-3 text-white">
                            Fashions
                        </Link>
                    </div>
                </div>
                {isMenuOpen && (
                    <>
                    <div className="menu-left fixed inset-0 flex bg-gray-500 text-white opacity-90 max-w-screen h-screen left-96 z-50" onClick={toggleMenu} >
                    </div>
                    <div className="menu-left fixed flex text-white w-96 inset-0 z-50  ">
                        <div className="inner-menu w-96 bg-white scrollable">
                            <div>
                                <div className="fixed w-96 sign-in-menu pl-8 pt-4 pb-4 z-30 flex text-xl bg-black text-white">
                                    <FontAwesomeIcon icon={faUser}/>
                                    <h1 className="pl-4 after:font-bold">Hello, Sign In</h1>
                                </div>
                            </div>
                            {deleteMenu && (
                                <>
                                    <div className="menu-row-1 mt-16 bg-white text-black">
                                        <h1 className="text-xl pl-8 pt-2 pb-2 font-bold">Trending</h1>
                                        <div className="menu-row-1-link flex flex-col">
                                            <Link className="pl-8 pt-2 pb-2 hover:bg-gray-400" to="">
                                                Best Sellers
                                            </Link>
                                            <Link className="pl-8 pb-2 pt-2 hover:bg-gray-400" to="">
                                                New Releases
                                            </Link>
                                            <Link className="pl-8 pt-2 pb-2 mb-4 hover:bg-gray-400" to="">
                                                Movie and Shakers
                                            </Link>
                                        </div>
                                    </div>
                                    
                                    <div className="menu-row-2 bg-white text-black border-t-2 border-gray-300">
                                        <h1 className="text-xl pl-8 pt-2 pb-2 font-bold">Digital Content and Devices</h1>
                                        <div className="menu-row-1-link flex flex-col">
                                            <Link className="pl-8 pt-2 pb-2 hover:bg-gray-400" to="">
                                                Amazon miniTV-FREE Entertainment
                                            </Link>
                                        </div>
                                        <div className="menu-row-1-link flex flex-col" onClick={()=> {deletemenuonclick(), echhoandalexa()}}>
                                            <Link className="pl-8 pt-2 pb-2 hover:bg-gray-400" to="">
                                                Echo & Alexa
                                                <FontAwesomeIcon className="nav-menu-col" icon={faChevronRight}/>
                                            </Link>
                                            
                                        </div>
                                        <div className="menu-row-1-link flex flex-col">
                                            <Link className="pl-8 pt-2 pb-2 hover:bg-gray-400" to="">
                                                Fire TV
                                                <FontAwesomeIcon className="nav-menu-col" icon={faChevronRight}/>
                                            </Link>
                                        </div>
                                        <div className="menu-row-1-link flex flex-col">
                                            <Link className="pl-8 pt-2 pb-2 hover:bg-gray-400" to="">
                                                Kindle E-Readers & Books
                                                <FontAwesomeIcon className="nav-menu-col" icon={faChevronRight}/>
                                            </Link>
                                        </div>
                                        <div className="menu-row-1-link flex flex-col">
                                            <Link className="pl-8 pt-2 pb-2 hover:bg-gray-400" to="">
                                                Audible Audiobooks
                                                <FontAwesomeIcon className="nav-menu-col" icon={faChevronRight}/>
                                            </Link>
                                        </div>
                                        <div className="menu-row-1-link flex flex-col">
                                            <Link className="pl-8 pt-2 pb-2 hover:bg-gray-400" to="">
                                                Amazon Prime Video
                                                <FontAwesomeIcon className="nav-menu-col" icon={faChevronRight}/>
                                            </Link>
                                        </div>
                                        <div className="menu-row-1-link flex flex-col">
                                            <Link className="pl-8 pt-2 pb-2 hover:bg-gray-400" to="">
                                                Amazon Prime Music
                                                <FontAwesomeIcon className="nav-menu-col" icon={faChevronRight}/>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="menu-row-2 bg-white text-black border-t-2 border-gray-300">
                                        <h1 className="text-xl pl-8 pt-2 pb-2 font-bold">Shop By Category</h1>
                                        <div className="menu-row-1-link flex flex-col">
                                            <Link className="pl-8 pt-2 pb-2 hover:bg-gray-400" to="">
                                                Mobiles, Computers
                                                <FontAwesomeIcon className="nav-menu-col" icon={faChevronRight}/>
                                            </Link>
                                            
                                        </div>
                                        <div className="menu-row-1-link flex flex-col">
                                            <Link className="pl-8 pt-2 pb-2 hover:bg-gray-400" to="">
                                                TV,Appliances,Electronics
                                                <FontAwesomeIcon className="nav-menu-col" icon={faChevronRight}/>
                                            </Link>
                                        </div>
                                        <div className="menu-row-1-link flex flex-col">
                                            <Link className="pl-8 pt-2 pb-2 hover:bg-gray-400" to="">
                                                Men's Fashion
                                                <FontAwesomeIcon className="nav-menu-col" icon={faChevronRight}/>
                                            </Link>
                                        </div>
                                        <div className="menu-row-1-link flex flex-col">
                                            <Link className="pl-8 pt-2 pb-2 hover:bg-gray-400" to="">
                                                Women's Fashion
                                                <FontAwesomeIcon className="nav-menu-col" icon={faChevronRight}/>
                                            </Link>
                                        </div>
                                        {menuVisible && (
                                            <>
                                            <div className=" menu-row-1-link flex flex-col">
                                                <button className="flex pl-8 pt-2 pb-2 hover:bg-gray-400" type="button" onClick={Menucol3}>
                                                    See More
                                                    <FontAwesomeIcon icon={faChevronDown}/>
                                                </button>
                                            </div>
                                            </>
                                        )
                                        }
                                        {isMenucol3 && (
                                            <>
                                            <div className="border-t-2 border-gray-300">
                                                <div className="menu-row-1-link flex flex-col">
                                                    <Link className="pl-8 pt-2 pb-2 hover:bg-gray-400" to="">
                                                        Amazon Saheli
                                                        <FontAwesomeIcon className="nav-menu-col" icon={faChevronRight}/>
                                                    </Link>
                                                </div>
                                                <div className="menu-row-1-link flex flex-col">
                                                    <Link className="pl-8 pt-2 pb-2 hover:bg-gray-400" to="">
                                                        Amazon Combos
                                                        <FontAwesomeIcon className="nav-menu-col" icon={faChevronRight}/>
                                                    </Link>
                                                </div>
                                                <div className="menu-row-1-link flex flex-col">
                                                    <Link className="pl-8 pt-2 pb-2 hover:bg-gray-400" to="">
                                                        Amazon Custom
                                                        <FontAwesomeIcon className="nav-menu-col" icon={faChevronRight}/>
                                                    </Link>
                                                </div>
                                                <div className="menu-row-1-link flex flex-col">
                                                    <Link className="pl-8 pt-2 pb-2 hover:bg-gray-400" to="">
                                                        Flight Tickets
                                                        <FontAwesomeIcon className="nav-menu-col" icon={faChevronRight}/>
                                                    </Link>
                                                </div>
                                                <div className="menu-row-1-link flex flex-col">
                                                    <Link className="pl-8 pt-2 pb-2 hover:bg-gray-400" to="">
                                                        Buy more, Save more
                                                        <FontAwesomeIcon className="nav-menu-col" icon={faChevronRight}/>
                                                    </Link>
                                                </div>
                                                <div className="menu-row-1-link flex flex-col">
                                                    <Link className="pl-8 pt-2 pb-2 hover:bg-gray-400" to="">
                                                        Clearence Store
                                                        <FontAwesomeIcon className="nav-menu-col" icon={faChevronRight}/>
                                                    </Link>
                                                </div>
                                                <div className=" menu-row-1-link flex flex-col">
                                                    <button className="flex pl-8 pt-2 pb-2 hover:bg-gray-400" type="button" onClick={Menucol3}>
                                                        See less
                                                        <FontAwesomeIcon icon={faChevronUp}/>
                                                    </button>
                                                </div>
                                            </div>
                                            </>
                                        )
                                        }
                                        <div className="menu-row-2 bg-white text-black border-t-2 border-gray-300">
                                            <h1 className="text-xl pl-8 pt-2 pb-2 font-bold">Shop By Category</h1>
                                            <div className="menu-row-1-link flex flex-col">
                                                <Link className="pl-8 pt-2 pb-2 hover:bg-gray-400" to="">
                                                    Your Account
                                                </Link>
                                            </div>
                                            <div className="menu-row-1-link flex flex-col">
                                                <Link className="pl-8 pt-2 pb-2 hover:bg-gray-400" to="">
                                                    Customer Service
                                                </Link>
                                            </div>
                                            <div className="menu-row-1-link flex flex-col">
                                                <Link className="pl-8 pt-2 pb-2 hover:bg-gray-400" to="">
                                                    Sign in
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                )
                            }
                            {echonandalex && (
                                <>
                                <div className="menu-row-1 mt-16 bg-white text-black ">
                                    <div className="pl-8 pt-2 pb-2 hover:bg-gray-400 text-gray-400  hover:text-black flex font-bold" onClick={ () =>{echhoandalexa(), deletemenuonclick()}}>
                                        <FontAwesomeIcon className="pt-2 hover:text-black" icon={faArrowLeft}/>
                                        <button className="pl-4 text-black">
                                            Main Menu
                                        </button>
                                    </div>
                                        <div className=" border-t-2 border-gray-400" >
                                        <h1 className="pl-8 pt-2 pb-2 font-bold text-xl">Echo & Alexa</h1>
                                            <div className="menu-row-1-link flex flex-col">
                                                <Link className="pl-8 pt-2 pb-2 hover:bg-gray-400" to="">
                                                    See All Devices Alexa
                                                </Link>
                                            </div>
                                        </div>
                                        <div className=" border-t-2 border-gray-400" >
                                        <h1 className="pl-8 pt-2 pb-2 font-bold text-xl">Content & Resources</h1>
                                            <div className="menu-row-1-link flex flex-col">
                                                <Link className="pl-8 pt-2 pb-2 hover:bg-gray-400" to="meet-alexa">
                                                    Meet Alexa
                                                </Link>
                                                <Link className="pl-8 pt-2 pb-2 hover:bg-gray-400" to="">
                                                    Alexa Skills
                                                </Link>
                                                <Link className="pl-8 pt-2 pb-2 hover:bg-gray-400" to="">
                                                    Alexa App
                                                </Link>
                                                <Link className="pl-8 pt-2 pb-2 hover:bg-gray-400" to="">
                                                    Alexa Smart Home
                                                </Link>
                                                <Link className="pl-8 pt-2 pb-2 hover:bg-gray-400" to="">
                                                    Amazon Prime Music
                                                </Link>
                                            </div>
                                        </div>
                                </div>
                                </>
                            )}
                        </div>
                    </div>
                </>
                )
                }
                {signinHover && (
                    <>
                    <div className="menu-left fixed inset-0 flex mt-16 bg-black text-white opacity-30 max-w-screen h-screen left-96 z-20" onMouseEnter={signMenu} >
                    </div>
                    <div className="z-40 rounded-md fixed flex flex-col bg-white text-black" style={{ left: window.menupositionx - 400 + 'px', width: '550px', top:window.menupositiony -5 + 'px' }} >
                        <div>
                            <div className="big-div flex justify-center">
                                <div className="signmenu-btn-div mt-4 bg-yellow-400 border-4 rounded-lg border-yellow-400 ">
                                    <Link className="sigin-in-btn pl-12 pr-12">
                                        Sign in
                                    </Link>
                                </div>
                            </div>
                            <div className="signin flex justify-center mt-2 text-sm">
                                <p>New customer? </p>
                                <Link className=" text-blue-700 hover:underline">
                                    start here.
                                </Link>
                            </div>
                        </div>
                        <div className="flex border-t-2 mb-8 mt-4 border-gray-400">
                            <div className=" ml-16 w-1/2 mt-4 border-r-2 border-gray-400">
                                <h1 className="font-bold">Your List</h1>
                                <Link to="/your-lists">
                                    <ul className="mt-4">
                                        <li><a href="#">Create a Wish List</a></li>
                                        <li><a href="#">Wish from Any Website</a></li>
                                        <li><a href="#">Baby Wishlist</a></li>
                                        <li><a href="#">Discover Your Style</a></li>
                                        <li><a href="#">Explore Showroom</a></li>
                                    </ul>
                                </Link> 
                            </div>
                            <div className=" ml-8 mt-4 mr-16">
                                <h1 className="font-bold">Your Account</h1>
                                <Link className="" to="/your-lists">
                                    <ul className="">
                                        <li><Link to="/your-account">Your Account</Link></li>
                                        <li><Link to="/your-orders">Your Orders</Link></li>
                                        <li><Link to="/your-wish-list">Your Wish List</Link></li>
                                        <li><Link to="/your-recommendations">Your Recommendations</Link></li>
                                        <li><Link to="/your-prime-membership">Your Prime Membership</Link></li>
                                        <li><Link to="/your-prime-video">Your Prime Video</Link></li>
                                        <li><Link to="/your-subscribe-save-items">Your Subscribe & Save Items</Link></li>
                                        <li><Link to="/memberships-subscriptions">Memberships & Subscriptions</Link></li>
                                        <li><Link to="/your-seller-account">Your Seller Account</Link></li>
                                        <li><Link to="/manage-content-devices">Manage Your Content and Devices</Link></li>
                                        <li><Link to="/your-free-amazon-business-account">Your Free Amazon Business Account</Link></li>
                                    </ul>
                                </Link>
                            </div>
                        </div>
                    </div>
                    </>
                )}
            </nav>
        </header>
    );
}
