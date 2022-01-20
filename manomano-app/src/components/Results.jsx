import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Results.scss";
import productsData from "../data/productsData";

function Results({ keyWords, handleBasket }) {
  
  const [checkBoxTools, setCheckBoxTools] = useState(false);
  const handleCheckBoxTools = () => {
    setCheckBoxTools(!checkBoxTools);
  };
  const myResults = [];

  for (let i = 0; i < keyWords.length; i += 1) {
    for (let j = 0; j < productsData.length; j += 1) {
      if (productsData[j].keywords.indexOf(keyWords[i]) > -1) {
        myResults.push(productsData[j]);
      }
    }
  }

  const myMaterials = [];
  for (let i = 0; i < myResults.length; i += 1) {
    if (myResults[i].keywords.includes("material")) {
      myMaterials.push(myResults[i]);
    }
  }

  const myTools = [];
  for (let i = 0; i < myResults.length; i += 1) {
    if (myResults[i].keywords.includes("tool")) {
      myTools.push(myResults[i]);
    }
  }

  const myFurnitures = [];
  for (let i = 0; i < myResults.length; i += 1) {
    if (myResults[i].keywords.includes("furniture")) {
      myFurnitures.push(myResults[i]);
    }
  }

  return (
    <section className="listingProducts">
      <div className="listingHeader">
        <h1 className="listingHeader-title">
          What a great project ! Here are some tools and materials needed !
        </h1>
      </div>
      <div className="products-layout listing-products">
        {myMaterials.length > 0 ? (
          <div>
            <h2 className="title-top-selection">Materials</h2>
            {myMaterials.map((data) => (
              <a
                className="product-link"
                key={data.name}
                href={data.link}
                target="_blank"
                rel="noreferrer"
              >
                <div className="visual-details">
                  <img className="product-img" src={data.img} alt={data.name} />
                  <div className="product-logos">
                    {data.logo !== "" ? (
                      <img
                        className="logos-img"
                        src={data.logo}
                        alt={data.brandName}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="contentContainer">
                  <div className="product-title">{data.name}</div>
                  <div className="informationLine"> </div>
                  <div className="ratingsContainer">
                    <div className="ratings">
                      <span className={`stars rate${data.rate}`}> </span>
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
                {checkBoxTools === true || data.toolsNeeded.length === 0 ? (
                  ""
                ) : (
                  <div className="toolList">
                    tools needed:{" "}
                    {data.toolsNeeded.map((tools, i, row) => (
                      <a
                        key={tools.name}
                        className="toolsLink"
                        rel="noreferrer"
                        href={tools.link}
                        target="_blank"
                      >
                        {tools.name} {i + 1 === row.length ? "" : "/"}
                      </a>
                    ))}
                  </div>
                )}
                {data.videoAdvice !== "" ? (
                  <a
                    href={data.videoAdvice}
                    target="_blank"
                    rel="noreferrer"
                    className="toolList"
                  >
                    Need a video advice ?
                  </a>
                ) : (
                  ""
                )}
              </a>
            ))}
            <div className="lazyListingPagination">
              <nav className="pagination-nav">
                <span className="pagination-title">pagination</span>
                <ol className="pagination-orderedList">
                  <li className="pagination-li">
                    <span className="pagination-item pagination-item-disable">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        height="1em"
                        role="presentation"
                        width="1em"
                        viewBox="0 0 24 24"
                        className="svg_preview-page"
                      >
                        <g id="iconsChevronLeftRound">
                          <path d="M14.71 6.71a.996.996 0 00-1.41 0L8.71 11.3a.996.996 0 000 1.41l4.59 4.59a.996.996 0 101.41-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41z" />
                        </g>
                      </svg>
                    </span>
                  </li>
                  <li className="pagination-li">
                    <span className="pagination-button-page-1">1</span>
                  </li>
                  <li className="pagination-li">
                    <span className="pagination-button-page">2</span>
                  </li>
                  <li className="pagination-li">
                    <span className="pagination-button-page">3</span>
                  </li>
                  <li className="pagination-li filler">
                    <span className="">...</span>
                  </li>
                  <li className="pagination-li">
                    <span className="pagination-button-page">5</span>
                  </li>
                  <li className="pagination-li">
                    <span className="pagination-item">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        height="1em"
                        role="presentation"
                        width="1em"
                        viewBox="0 0 24 24"
                        className="svg_next-page"
                      >
                        <g id="iconsChevronRightRound">
                          <path d="M9.29 6.71a.996.996 0 000 1.41L13.17 12l-3.88 3.88a.996.996 0 101.41 1.41l4.59-4.59a.996.996 0 000-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z" />
                        </g>
                      </svg>
                    </span>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        ) : (
          ""
        )}
        {myTools.length > 0 ? (
          <div>
            <h2 className="title-top-selection">Tools</h2>
            {myTools.map((data) => (
              <a
                className="product-link"
                key={data.name}
                href={data.link}
                target="_blank"
                rel="noreferrer"
              >
                <div className="visual-details">
                  <img className="product-img" src={data.img} alt={data.name} />
                  <div className="product-logos">
                    {data.logo !== "" ? (
                      <img
                        className="logos-img"
                        src={data.logo}
                        alt={data.brandName}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="contentContainer">
                  <div className="product-title">{data.name}</div>
                  <div className="informationLine"> </div>
                  <div className="ratingsContainer">
                    <div className="ratings">
                      <span className={`stars rate${data.rate}`}> </span>
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
                {checkBoxTools === true || data.toolsNeeded.length === 0 ? (
                  ""
                ) : (
                  <div className="toolList">
                    tools needed:{" "}
                    {data.toolsNeeded.map((tools, i, row) => (
                      <a
                        key={tools.name}
                        className="toolsLink"
                        rel="noreferrer"
                        href={tools.link}
                        target="_blank"
                      >
                        {tools.name} {i + 1 === row.length ? "" : "/"}
                      </a>
                    ))}
                  </div>
                )}
                {data.videoAdvice !== "" ? (
                  <a
                    href={data.videoAdvice}
                    target="_blank"
                    rel="noreferrer"
                    className="toolList"
                  >
                    Need a video advice ?
                  </a>
                ) : (
                  ""
                )}
              </a>
            ))}
            <div className="lazyListingPagination">
              <nav className="pagination-nav">
                <span className="pagination-title">pagination</span>
                <ol className="pagination-orderedList">
                  <li className="pagination-li">
                    <span className="pagination-item pagination-item-disable">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        height="1em"
                        role="presentation"
                        width="1em"
                        viewBox="0 0 24 24"
                        className="svg_preview-page"
                      >
                        <g id="iconsChevronLeftRound">
                          <path d="M14.71 6.71a.996.996 0 00-1.41 0L8.71 11.3a.996.996 0 000 1.41l4.59 4.59a.996.996 0 101.41-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41z" />
                        </g>
                      </svg>
                    </span>
                  </li>
                  <li className="pagination-li">
                    <span className="pagination-button-page-1">1</span>
                  </li>
                  <li className="pagination-li">
                    <span className="pagination-button-page">2</span>
                  </li>
                  <li className="pagination-li">
                    <span className="pagination-button-page">3</span>
                  </li>
                  <li className="pagination-li filler">
                    <span className="">...</span>
                  </li>
                  <li className="pagination-li">
                    <span className="pagination-button-page">5</span>
                  </li>
                  <li className="pagination-li">
                    <span className="pagination-item">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        height="1em"
                        role="presentation"
                        width="1em"
                        viewBox="0 0 24 24"
                        className="svg_next-page"
                      >
                        <g id="iconsChevronRightRound">
                          <path d="M9.29 6.71a.996.996 0 000 1.41L13.17 12l-3.88 3.88a.996.996 0 101.41 1.41l4.59-4.59a.996.996 0 000-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z" />
                        </g>
                      </svg>
                    </span>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        ) : (
          ""
        )}
        {myFurnitures.length > 0 ? (
          <div>
            <h2 className="title-top-selection">Furnitures</h2>
            {myFurnitures.map((data) => (
              <a
                className="product-link"
                key={data.name}
                href={data.link}
                target="_blank"
                rel="noreferrer"
              >
                <div className="visual-details">
                  <img className="product-img" src={data.img} alt={data.name} />
                  <div className="product-logos">
                    {data.logo !== "" ? (
                      <img
                        className="logos-img"
                        src={data.logo}
                        alt={data.brandName}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="contentContainer">
                  <div className="product-title">{data.name}</div>
                  <div className="informationLine"> </div>
                  <div className="ratingsContainer">
                    <div className="ratings">
                      <span className={`stars rate${data.rate}`}> </span>
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
                {checkBoxTools === true || data.toolsNeeded.length === 0 ? (
                  ""
                ) : (
                  <div className="toolList">
                    tools needed:{" "}
                    {data.toolsNeeded.map((tools, i, row) => (
                      <a
                        key={tools.name}
                        className="toolsLink"
                        rel="noreferrer"
                        href={tools.link}
                        target="_blank"
                      >
                        {tools.name} {i + 1 === row.length ? "" : "/"}
                      </a>
                    ))}
                  </div>
                )}
                {data.videoAdvice !== "" ? (
                  <a
                    href={data.videoAdvice}
                    target="_blank"
                    rel="noreferrer"
                    className="toolList"
                  >
                    Need a video advice ?
                  </a>
                ) : (
                  ""
                )}
              </a>
            ))}
            <div className="lazyListingPagination">
              <nav className="pagination-nav">
                <span className="pagination-title">pagination</span>
                <ol className="pagination-orderedList">
                  <li className="pagination-li">
                    <span className="pagination-item pagination-item-disable">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        height="1em"
                        role="presentation"
                        width="1em"
                        viewBox="0 0 24 24"
                        className="svg_preview-page"
                      >
                        <g id="iconsChevronLeftRound">
                          <path d="M14.71 6.71a.996.996 0 00-1.41 0L8.71 11.3a.996.996 0 000 1.41l4.59 4.59a.996.996 0 101.41-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41z" />
                        </g>
                      </svg>
                    </span>
                  </li>
                  <li className="pagination-li">
                    <span className="pagination-button-page-1">1</span>
                  </li>
                  <li className="pagination-li">
                    <span className="pagination-button-page">2</span>
                  </li>
                  <li className="pagination-li">
                    <span className="pagination-button-page">3</span>
                  </li>
                  <li className="pagination-li filler">
                    <span className="">...</span>
                  </li>
                  <li className="pagination-li">
                    <span className="pagination-button-page">5</span>
                  </li>
                  <li className="pagination-li">
                    <span className="pagination-item">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        height="1em"
                        role="presentation"
                        width="1em"
                        viewBox="0 0 24 24"
                        className="svg_next-page"
                      >
                        <g id="iconsChevronRightRound">
                          <path d="M9.29 6.71a.996.996 0 000 1.41L13.17 12l-3.88 3.88a.996.996 0 101.41 1.41l4.59-4.59a.996.996 0 000-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z" />
                        </g>
                      </svg>
                    </span>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <label className="checkLabel" htmlFor="tools">
        <input
          type="checkbox"
          className="checkTools"
          name="tools"
          value={checkBoxTools}
          onClick={() => handleCheckBoxTools()}
        />{" "}
        I already have the tools
      </label>
      <div className="button">
        <button
          onClick={() => window.location.reload()}
          className="buttonForm"
          type="button"
        >
          Cancel
        </button>

        <Link to="basket">
          <button
            onClick={() => handleBasket(myResults)}
            className="buttonForm"
            type="button"
          >
            Validate
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Results;
