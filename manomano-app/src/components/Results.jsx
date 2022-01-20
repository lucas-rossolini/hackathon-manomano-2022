import React from "react";
import "./Results.scss";

const datas = [
  {
    name: "Élagueuse thermique sur perche, 52 cm3, 3 CV, longueur 4.15 mètres",
    link: "https://www.manomano.fr/p/elagueuse-thermique-sur-perche-52-cm3-3-cv-longueur-415-metres-41203647",
    img: "https://cdn.manomano.com/elagueuse-thermique-sur-perche-52-cm3-3-cv-longueur-415-metres-P-4935052-40633584_1.jpg",
    brandName: "GT Garden",
    logo: "https://cdn.manomano.com/marque-gt-garden-3921.png",
    rate: 4,
    rateNumber: 546,
    priceInt: 164,
    priceDec: 80,
    freeDelivery: true,
    keywords: [],
  },
  {
    name: "Élagueuse thermique sur perche, 52 cm3, 3 CV, longueur 4.15 mètres",
    link: "",
    img: "https://cdn.manomano.com/elagueuse-thermique-sur-perche-52-cm3-3-cv-longueur-415-metres-P-4935052-40633584_1.jpg",
    brandName: "GT Garden",
    logo: "https://cdn.manomano.com/marque-gt-garden-3921.png",
    rate: 4,
    rateNumber: 546,
    priceInt: 164,
    priceDec: 80,
    freeDelivery: false,
    keywords: [],
  },
  {
    name: "Élagueuse thermique sur perche, 52 cm3, 3 CV, longueur 4.15 mètres",
    link: "",
    img: "https://cdn.manomano.com/elagueuse-thermique-sur-perche-52-cm3-3-cv-longueur-415-metres-P-4935052-40633584_1.jpg",
    brandName: "GT Garden",
    logo: "https://cdn.manomano.com/marque-gt-garden-3921.png",
    rate: 4,
    rateNumber: 546,
    priceInt: 164,
    priceDec: 80,
    freeDelivery: true,
    keywords: [],
  },
];

function Results({ keyWords }) {
  console.log(keyWords);
  return (
    <div className="products-layout listing-products">
      {datas.map((data) => (
        <a className="product-link" href={data.link}>
          <div className="visual-details">
            <img className="product-img" src={data.img} alt={data.name} />
            <div className="product-logos">
              <img className="logos-img" src={data.logo} alt={data.brandName} />
            </div>
          </div>
          <div className="contentContainer">
            <div className="product-title">{data.name}</div>
            <div className="informationLine"> </div>
            <div className="ratingsContainer">
              <div className="ratings">
                <span className="stars"> </span>
                <div className="rateNumber">{data.rateNumber}</div>
              </div>
            </div>
            <div className="detailed-price">
              <span className="price-main">
                <span className="integer">{data.priceInt}</span>
                <sup>
                  <span className="currency">€</span>
                  <span className="decimal">{data.priceDec}</span>
                </sup>
              </span>
            </div>
            <span className="freeDelivery">
              {data.freeDelivery ? (
                <span>
                  Free delivery by{" "}
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    height="16px"
                    role="presentation"
                    width="16px"
                    viewBox="0 0 42 40"
                    className="svgLogo"
                  >
                    <g id="iconsManomanoNut">
                      <path
                        d="M41.068 14.958L29.978 1.31A3.56 3.56 0 0026.664.044L9.282 2.81a3.55 3.55 0 00-2.755 2.234L.234 21.456a3.541 3.541 0 00.56 3.5l11.089 13.659A3.559 3.559 0 0015.2 39.87l17.382-2.77a3.542 3.542 0 002.755-2.23l6.293-16.413a3.541 3.541 0 00-.562-3.5z"
                        fill="url(#b2cgradient)"
                      />
                      <path
                        d="M25.73 11.768L21.794 18.8l-3.868-8.348-4.83 1.286-5.982 15.569h5.336l3.6-9.182 3.546 8.745h2.732l5.247-9.373v11.992l4.979-1.68v-14.83l-6.824-1.21z"
                        fill="#fff"
                      />
                      <defs>
                        <linearGradient
                          id="b2cgradient"
                          x1="17.29"
                          y1="42.343"
                          x2="39.452"
                          y2="22.109"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stopColor="#0397A7" />
                          <stop offset=".997" stopColor="#00ECCD" />
                        </linearGradient>
                      </defs>
                    </g>
                  </svg>
                </span>
              ) : (
                ""
              )}
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Results;
