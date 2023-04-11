import React, { useState } from "react";
import "./Navbar.css";
import logoSneakers from "../../Assets/images/logo.svg";
import iconCart from "../../Assets/images/icon-cart.svg";
import imgAvatar from "../../Assets/images/image-avatar.png";
import iconMenu from "../../Assets/images/icon-menu.svg";
import closeMenu from "../../Assets/images/icon-close.svg";
import Cart from "../Cart/Cart";

export default function Navbar(props) {
    const { displayCartList, toggleCart } = props;
    console.log(displayCartList);
    const [toggleMenu, setToggleMenu] = useState(false);

    const openCloseMenu = () => {
        setToggleMenu(!toggleMenu);
        console.log(toggleMenu);
    };

    return (
        <>
            <div className={toggleMenu ? "menu-overlay" : ""}></div>
            <nav className="navbar">
                <img
                    onClick={openCloseMenu}
                    src={iconMenu}
                    alt="bouton menu"
                    className="toggle-menu-btn"
                    title="Menu"
                />
                <a href="#" className="nav-logo">
                    <img src={logoSneakers} alt="logo Sneakers" />
                </a>
                <div className={toggleMenu ? "nav-group active" : "nav-group"}>
                    <img
                        onClick={openCloseMenu}
                        src={closeMenu}
                        alt="bouton menu"
                        className="close-menu-btn"
                        title="Fermer"
                    />
                    <a className="nav-link" href="#">
                        Collections
                    </a>
                    <a className="nav-link" href="#">
                        Men
                    </a>
                    <a className="nav-link" href="#">
                        Women
                    </a>
                    <a className="nav-link" href="#">
                        About
                    </a>
                    <a className="nav-link" href="#">
                        Contact
                    </a>
                </div>
                <div className="nav-icons">
                    <div className="cart-box">
                        <img
                            onClick={displayCartList}
                            className="cart-logo"
                            src={iconCart}
                            alt="Panier d'achat"
                        />
                        {toggleCart && <Cart />}
                    </div>
                    <img
                        className="avatar"
                        src={imgAvatar}
                        alt="Portrait utilisateur"
                        title="Mon compte"
                    />
                </div>
            </nav>
        </>
    );
}
