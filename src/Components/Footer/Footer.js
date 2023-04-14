import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <div className="footer">
            <p> Challenge by <a className="attribution"
                href="https://www.frontendmentor.io?ref=challenge"
                target="_blank"
                rel="noreferrer"
                >
                Frontend Mentor
            </a>
            . Coded by <span className="author">Matthieu Gueulle</span>.
            </p>
        </div>
    );
}
