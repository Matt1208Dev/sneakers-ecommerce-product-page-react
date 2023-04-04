import React, { useState} from "react";
import Lightbox from "../../Components/Lightbox/Lightbox";
import Slider from "../../Components/Slider/Slider";
import "./ProductPage.css";

export default function ProductPage() {

    const [lightboxActive, setLightboxActive] = useState(false);

    const toggleLightbox = () => {
        setLightboxActive(!lightboxActive);
    }


    return (
        <div className="product-container">
            <Slider toggleLightbox={toggleLightbox} />
            {lightboxActive && <Lightbox toggleLightbox={toggleLightbox} />}
        </div>
    );
}
