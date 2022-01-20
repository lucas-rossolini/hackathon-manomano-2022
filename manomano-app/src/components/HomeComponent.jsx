import React from "react";

import productsData from "../data/productsData";

import "./HomeComponent.scss";

function HomeComponent() {
  return (
    <>
      <section>
        <div className="carrousel">
          <img
            className="carrousel-sale-img"
            src="https://cdn.manomano.com/media/marketplace-promotion/mobile_7e2dd2a0-843f-4648-95a5-83bc648ddc49_GReg.jpg?w=700&h=400&fit=cover&format=webp"
            alt="sale promotion"
          />
        </div>
      </section>
      <section className="topSelection-section">
        <div className="container-carrousel">
          <div className="title-container-section">
            <h2 className="title-top-selection">Our top selection</h2>
            <p className="para-products">
              Lots of products put together for you
            </p>
          </div>
          <div className="carrousel-controls"> </div>
          <div className="carrousel-slider">
            {productsData.map((data) => (
              <a key={data.name} href={data.link} className="slider-card">
                <div className="visualDetails-carrousel">
                  <img
                    className="carrousel-img"
                    src={data.img}
                    alt={data.name}
                  />
                  <div className="logo-carrousel">
                    <img
                      className="logos-img-carrousel"
                      src={data.logo}
                      alt={data.brandName}
                    />
                  </div>
                </div>
                <div className="carrousel-content-container">
                  <div className="carrousel-product-title">{data.name}</div>
                  <div className="carrousel-rating-container">
                    <div className="carrousel-rating">
                      <span className={`stars rate${data.rate}`}> </span>
                      <div className="rateNumber">{data.rateNumber}</div>
                    </div>
                  </div>
                  <div className="carrousel-price-container">
                    <span className="price-main">
                      <span className="integer">{data.priceInt}</span>
                      <sup>
                        <span className="currency">€</span>
                        <span className="decimal">{data.priceDec}</span>
                      </sup>
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeComponent;
