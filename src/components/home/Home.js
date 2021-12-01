import React from "react";
import "./Home.css";
import Product from "./Product.js";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="background"
          className="home_image"
        />

        <div className="home_row">
          <Product
            id="1"
            title="Amazon Basics 2 Slice, Extra-Wide Slot Toaster with 6 Shade Settings, Black"
            image="https://m.media-amazon.com/images/I/81smEEgnhfL._AC_SL1500_.jpg"
            price={15.99}
            rating={5}
          />
          <Product
            id="2"
            title="Oculus Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB"
            image="https://m.media-amazon.com/images/I/615YaAiA-ML._AC_UY436_FMwebp_QL65_.jpg"
            price={299.99}
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id="3"
            title="Razer DeathAdder V2 Gaming Mouse: 20K DPI Optical Sensor - Fastest Gaming Mouse Switch"
            image="https://m.media-amazon.com/images/I/61doJ9AKCPL._AC_UY218_.jpg"
            price={69.99}
            rating={5}
          />
          <Product
            id="4"
            title="Acer Nitro 5 AN515-55-53E5 Gaming Laptop | Intel Core i5-10300H | NVIDIA GeForce RTX 3050 Laptop GPU | 8GB DDR4"
            image="https://m.media-amazon.com/images/I/71m03KItMZL._AC_SL1500_.jpg"
            price={812.99}
            rating={4}
          />
          <Product
            id="5"
            title='Sceptre E248W-19203R 24" Ultra Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Metallic Black 2018'
            image="https://m.media-amazon.com/images/I/71rXSVqET9L._AC_UL320_.jpg"
            price={139.97}
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id="6"
            title="
                        SAMSUNG 85-Inch Class Neo QLED QN90A Series - 4K UHD Quantum HDR 32x Smart TV with Alexa Built-in (QN85QN90AAFXZA, 2021 Model)"
            image="https://m.media-amazon.com/images/I/913+l9CB6cL._AC_UY218_.jpg"
            price={3133.49}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
