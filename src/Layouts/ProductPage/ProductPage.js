import React, { useState } from "react";
import productInfosTxt from "../../Data/productInfos";
import BadgeDiscount from "../../Components/BadgeDiscount/BadgeDiscount";
import BrandSubtitle from "../../Components/BrandSubtitle/BrandSubtitle";
import ButtonQuantity from "../../Components/ButtonQuantity/ButtonQuantity";
import CurrentPrice from "../../Components/CurrentPrice/CurrentPrice";
import Lightbox from "../../Components/Lightbox/Lightbox";
import OldPrice from "../../Components/OldPrice/OldPrice";
import Slider from "../../Components/Slider/Slider";
import "./ProductPage.css";
import ButtonCTA from "../../Components/ButtonCTA/ButtonCTA";

export default function ProductPage() {
    const [lightboxActive, setLightboxActive] = useState(false);
    const [productInfos, setProductInfos] = useState(productInfosTxt);
    console.log(productInfos);
    const toggleLightbox = () => {
        setLightboxActive(!lightboxActive);
    };

    return (
        <div className="product-container">
            <Slider toggleLightbox={toggleLightbox} />
            {lightboxActive && <Lightbox toggleLightbox={toggleLightbox} />}

            <div className="product-infos">
                <BrandSubtitle>SNEAKER COMPANY</BrandSubtitle>
                <h1>Fall Limited Edition Sneakers</h1>
                <p className="product-desc">
                    These low-profile sneakers are your perfect casual wear
                    companion. Featuring a durable rubber outer sole, they’ll
                    withstand everything the weather can offer.
                </p>
                <div className="pricing-box">
                    <div className="current-price-grp">
                        <CurrentPrice>
                            {(
                                (productInfos.price * productInfos.discount) /
                                100
                            ).toFixed(2)}
                        </CurrentPrice>
                        <BadgeDiscount>{productInfos.discount}</BadgeDiscount>
                    </div>
                    <OldPrice>{productInfos.price.toFixed(2)}</OldPrice>
                </div>

                <div className="buttons-box">
                    <ButtonQuantity />
                    <ButtonCTA>
                        <svg
                            width="22"
                            height="20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                                fill="#69707D"
                                fillRule="nonzero"
                            />
                        </svg>
                        <span className="btn-cta-txt">Add to cart</span>
                    </ButtonCTA>
                </div>
                {/*   Sneaker Company

  Fall Limited Edition Sneakers

  These low-profile sneakers are your perfect casual wear companion. Featuring a 
  durable rubber outer sole, they’ll withstand everything the weather can offer.

  $125.00
  50%
  $250.00

  0
  Add to cart */}
            </div>
        </div>
    );
}
