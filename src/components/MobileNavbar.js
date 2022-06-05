import React from "react";
import { NavLink } from 'react-router-dom';


const MobileNavbar = () => {
    return (
        <div className="d-md-none d-lg-none d-xl-none d-xxl-none" id="blurFilter">
            <nav className="nav_">
                {/* nav__link--active */}
                <span className="nav__link ">

                    <span className="nav__text"><NavLink className={isActive => "nav__link" +(!isActive ? "unselected":"")} to="/"> <i className="fa-solid fa-house nav__icon"></i></NavLink></span>
                </span>
                <span className="nav__link ">


                    <span className="nav__text"><NavLink className={isActive => "nav__link" +(!isActive ? "unselected":"")} to="/cryptocurrencies"><i className="fa-brands fa-bitcoin nav__icon"></i></NavLink></span>
                </span>
                <span className="nav__link">

                    <span className="nav__text"><NavLink className={isActive => "nav__link" +(!isActive ? "unselected":"")} to="/news"> <i className="fas fa-newspaper nav__icon"></i></NavLink></span>
                </span>

            </nav>

        </div>
    )
}
export default MobileNavbar