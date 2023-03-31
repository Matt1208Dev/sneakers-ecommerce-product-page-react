import React, { useState } from "react";
import "./Navbar.css";
import logoSneakers from "../../Assets/images/logo.svg";
import iconCart from "../../Assets/images/icon-cart.svg";
import imgAvatar from "../../Assets/images/image-avatar.png";
import iconMenu from "../../Assets/images/icon-menu.svg";
import closeMenu from "../../Assets/images/icon-close.svg";

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);

    const openCloseMenu = () => {
        setToggleMenu(!toggleMenu);
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
                    <img
                        className="cart-logo"
                        src={iconCart}
                        alt="Panier d'achat"
                    />
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
