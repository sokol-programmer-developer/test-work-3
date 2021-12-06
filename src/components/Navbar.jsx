import React, {useState} from "react";
import { Link } from "react-router-dom";
import '../css/navbar.css';
import '../css/navbar_mobile.css';
import logo from "../pic/logo.png"

const Navbar = () => {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar)
    const closeMobileMenu = () => setSidebar(false);
    return (
        <>
            <div className="navbar">
                <div className="navbar_default">

                    <Link to='/' className="nav_logo" onClick={closeMobileMenu}>
                        <img src={logo} className="nav_logo_pic" alt="logo"/>
                    </Link>

                    <div className="nav_desktop">
                        <ul className="nav_desktop_ul" >
                            <li className="nav_desktop_li" >
                                <Link className="nav_desktop_link" to="/" > Главная         </Link>
                            </li>
                            <li className="nav_desktop_li" >
                                <Link className="nav_desktop_link" to="/" > Технология      </Link>
                            </li>
                            <li className="nav_desktop_li" >
                                <Link className="nav_desktop_link" to="/" > График полетов  </Link>
                            </li>
                            <li className="nav_desktop_li" >
                                <Link className="nav_desktop_link" to="/" > Гарантий        </Link>
                            </li>
                            <li className="nav_desktop_li" >
                                <Link className="nav_desktop_link" to="/" > О компаний      </Link>
                            </li>
                            <li className="nav_desktop_li" >
                                <Link className="nav_desktop_link" to="/" > Контакты        </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="navbar_mobile">
                    <div className="menu_open" onClick={showSidebar}>
                        <Link to="/" className="menu_open_link"  >
                            <h2 className="menu_open_h2"  > &#9776; </h2>
                        </Link>
                    </div>

                    <nav className={sidebar ? "nav_menu active" : "nav_menu"}>

                        <div className="nav_menu_items" >
                            <div className="menu_close" onClick={showSidebar}>
                                <Link to="/" className="menu_close_link"  >
                                    <h2 className="menu_close_h2"> &#215;</h2>
                                </Link>
                            </div>

                            <div className="nav_mobile" onClick={closeMobileMenu}>
                                <ul className="nav_mobile_ul"   >
                                    <li className="nav_mobile_li" >
                                        <Link className="nav_mobile_link" to="/" > Главная         </Link>
                                    </li>
                                    <li className="nav_mobile_li" >
                                        <Link className="nav_mobile_link" to="/" > Технология      </Link>
                                    </li>
                                    <li className="nav_mobile_li" >
                                        <Link className="nav_mobile_link" to="/" > График полетов  </Link>
                                    </li>
                                    <li className="nav_mobile_li" >
                                        <Link className="nav_mobile_link" to="/" > Гарантий        </Link>
                                    </li>
                                    <li className="nav_mobile_li" >
                                        <Link className="nav_mobile_link" to="/" > О компаний      </Link>
                                    </li>
                                    <li className="nav_mobile_li" >
                                        <Link className="nav_mobile_link" to="/" > Контакты        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </nav>
                </div>
            </div>
        </>
    );
}

export default Navbar;