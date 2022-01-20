/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/role-supports-aria-props */
import React from "react";
import "./Basket.scss";

function Basket() {
  return (
    <div className="Layout_pageContainer__R1PIZ">
      <div className="Layout_layout__J_AQA">
        <article className="Layout_leftColumnççyq32a">
          <section className="CartPage_content__pcGNd">
            <nav>
              <a
                href="/"
                className="ContinueShoppingButton_root__gMb7u"
                data-testid="continue-shopping-cta"
              >
                <span className="icon_e79faaed iconLeft_e79faaed">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    height="1em"
                    role="presentation"
                    width="1em"
                    viewBox="0 0 24 24"
                    className="svg_9c8206b6"
                  >
                    <path
                      d="M14.71 15.88L10.83 12l3.88-3.88a.996.996 0 10-1.41-1.41L8.71 11.3a.996.996 0 000 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .38-.39.39-1.03 0-1.42z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="root_c380a67c body2_c380a67c semiBold_c380a67c primaryDark_c380a67c">
                  Continue shopping
                </span>
              </a>
              <div className="">
                <ul className="tablist_5eb44382" role="tablist">
                  <li
                    className="tabItem_c5cdd25a"
                    data-testid="cart-tab"
                    role="tab"
                  >
                    <button
                      value="current"
                      className="tabButton_c5cdd25a tabButtonNoWrap_c5cdd25a fullWidth_e79faaed"
                      data-testid="cart-tab-cta"
                      type="button"
                      aria-selected="true"
                    >
                      <span className="icon_e79faaed iconLeft_e79faaed">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          height="1em"
                          role="presentation"
                          width="1em"
                          viewBox="0 0 24 24"
                          className="svg_9c8206b6"
                        >
                          <path
                            d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 3c0 .55.45 1 1 1h1l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0020.01 4H5.21l-.67-1.43a.993.993 0 00-.9-.57H2c-.55 0-1 .45-1 1zm16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      <span className="tabButtonNoWrap_c5cdd25a">Basket</span>
                    </button>
                  </li>
                  <li
                    className="tabItem_c5cdd25a"
                    data-testid="saved-cart-tab"
                    role="tab"
                  >
                    <button
                      value="set-aside"
                      className="tabButton_c5cdd25a tabButtonNoWrap_c5cdd25a fullWidth_e79faaed"
                      data-testid="saved-cart-tab-cta"
                      type="button"
                    >
                      <span className="icon_e79faaed iconLeft_e79faaed">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          height="1em"
                          role="presentation"
                          width="1em"
                          viewBox="0 0 24 24"
                          className="svg_9c8206b6"
                        >
                          <path
                            d="M15.975 15.265l3.335-3.333a.64.64 0 00-.036-.94 6.03 6.03 0 00-5.587-1.208l-3.486-2.726a3.512 3.512 0 00-1.013-2.87.64.64 0 00-.906 0L4.188 8.28a.64.64 0 000 .907 3.509 3.509 0 002.87 1.013l2.628 3.362a6.063 6.063 0 001.11 5.906.645.645 0 00.463.223h.025c.17 0 .332-.067.452-.187l3.334-3.334 3.64 3.64a.639.639 0 001.094-.452.64.64 0 00-.188-.454l-3.64-3.64z"
                            fill="currentColor"
                            fillRule="nonzero"
                          />
                        </svg>
                      </span>
                      <span className="tabButtonNoWrap_c5cdd25a">
                        Set aside
                      </span>
                    </button>
                  </li>
                </ul>
                <hr aria-hidden="true" className="cursor_5eb44382" />
              </div>
            </nav>
          </section>
        </article>
        <div className="Layout_pageContainer__R1PIZ">
          <svg width="328" height="161" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <path
                d="M52.69 81.02l-6.688-6.694a1.42 1.42 0 00-1.375-.367l-9.217 2.516c-.486.13-.865.51-.995.996l-2.518 9.23a1.41 1.41 0 00.366 1.376l6.687 6.694c.36.36.884.5 1.375.366l9.233-2.508a1.42 1.42 0 001.005-1.006l2.506-9.227a1.41 1.41 0 00-.38-1.377zm-7.418 5.743v-.024c-.772 1.03-2.505 1.018-2.505 1.018a3.515 3.515 0 01-3.473-3.548 3.515 3.515 0 017.026.05 3.481 3.481 0 01-1.042 2.504h-.006z"
                fill="#D3FAE9"
                fillRule="nonzero"
              />
              <path
                fill="#7497DA"
                d="M97.185 52.047l14.681-8.476h118.333l15.902 8.476-1.165 10.208-142.506 2.04z"
              />
              <path
                d="M255.098 57.024a2.333 2.333 0 01-.955-.201l-24.442-10.9H112.417L90.993 56.388a2.35 2.35 0 01-3.441-2.268 2.353 2.353 0 011.38-1.958l22.399-10.936h119.377l25.347 11.3a2.353 2.353 0 01-.957 4.5v-.002z"
                fill="#D1E0F8"
                fillRule="nonzero"
              />
              <path
                d="M327.809 127.365c0 15.295-73.385 33.46-163.9 33.46C73.396 160.825.01 142.658.01 127.365s73.385-4.92 163.91-4.92c90.524 0 163.889-10.37 163.889 4.92z"
                fill="#E8EFFB"
                fillRule="nonzero"
              />
              <path
                d="M97.133 58.161v5.995l13.11 68.224a11.984 11.984 0 0011.767 9.729h100.049a11.986 11.986 0 0011.768-9.729l13.11-68.224v-5.995H97.133z"
                fill="#A6C2F2"
                fillRule="nonzero"
              />
              <path
                d="M252.93 64.16H91.148a5.992 5.992 0 01-5.281-2.965 6.001 6.001 0 010-6.061 5.992 5.992 0 015.281-2.966H252.93a5.995 5.995 0 015.883 5.996 5.995 5.995 0 01-5.883 5.997z"
                fill="#D1E0F8"
                fillRule="nonzero"
              />
              <path
                d="M92.633 95.63l41.937-41.967a6.353 6.353 0 018.983-.004l.004.004a6.362 6.362 0 010 8.993l-41.937 41.968a6.353 6.353 0 01-8.987 0 6.362 6.362 0 010-8.994zM200.474 53.673a6.353 6.353 0 018.984-.004l.003.004 41.937 41.967a6.362 6.362 0 010 8.994 6.353 6.353 0 01-8.987 0l-41.937-41.968a6.362 6.362 0 010-8.993z"
                fill="#4C6DB6"
                fillRule="nonzero"
              />
              <ellipse
                fill="#E9EEF2"
                fillRule="nonzero"
                cx="139.083"
                cy="57.676"
                rx="8.987"
                ry="8.994"
              />
              <ellipse
                fill="#E9EEF2"
                fillRule="nonzero"
                cx="204.995"
                cy="57.676"
                rx="8.987"
                ry="8.994"
              />
              <path
                d="M73.328 85.89h-1.653l-.014 1.567h1.667c2.687 0 5.304-.066 7.78-.201l-.083-1.566c-2.448.133-5.038.2-7.697.2zM99.39 82.895a63.82 63.82 0 01-9.076 1.918l.22 1.551a65.18 65.18 0 009.302-1.968l-.447-1.501zM54.183 81.808a.88.88 0 00-.225-.845l-7.905-7.91a.88.88 0 00-.847-.225l-10.86 2.953a.88.88 0 00-.613.603L30.77 87.268a.872.872 0 00.225.845l7.907 7.924a.872.872 0 00.847.225l10.88-2.963a.881.881 0 00.613-.603l1.73-6.378c.768.093 4.303.501 9.263.805l.094-1.566c-4.535-.275-7.863-.64-8.943-.766l.798-2.983zm-1.858.918l-2.242 8.251a1.668 1.668 0 01-1.17 1.173l-8.258 2.236a1.664 1.664 0 01-1.609-.43l-5.979-5.986a1.667 1.667 0 01-.43-1.61l2.252-8.25c.156-.57.601-1.015 1.17-1.17l8.246-2.242a1.662 1.662 0 011.609.429l5.98 5.977c.426.423.59 1.043.431 1.622z"
                fill="#0A1F44"
                fillRule="nonzero"
              />
              <path
                d="M46.4 80.61a5.204 5.204 0 00-6.305-.877 5.212 5.212 0 002.631 9.733 5.126 5.126 0 003.675-1.502 5.168 5.168 0 000-7.357v.004zm-1.122 6.153v-.024c-.772 1.03-2.505 1.018-2.505 1.018A3.515 3.515 0 0139.3 84.21a3.515 3.515 0 017.026.05 3.481 3.481 0 01-1.048 2.504z"
                fill="#0A1F44"
                fillRule="nonzero"
              />
              <path
                d="M314.824 36.758l-6.954.658a.33.33 0 00-.282.137l-16.529 15.778-2.01-2.103a1.077 1.077 0 00-1.521-.036l-2.731 2.616a4.87 4.87 0 00-.153 6.865l5.874 6.142a4.86 4.86 0 006.858.171l2.73-2.616a1.08 1.08 0 00.037-1.52l-2.192-2.3-.25-.262 16.531-15.778a.324.324 0 00.147-.273l.99-6.921a.521.521 0 00-.545-.558z"
                fill="#D3FAE9"
              />
              <path
                d="M314.699 44.973a.916.916 0 00.322-.634l.99-6.919a1.136 1.136 0 00-.317-.947 1.134 1.134 0 00-.93-.36l-6.953.66a.919.919 0 00-.65.291l-2.706 2.582-.565-.438a.647.647 0 10-.793 1.024l.403.318-1.869 1.785-.565-.437a.647.647 0 10-.792 1.025l.402.316-1.87 1.787-.565-.437a.647.647 0 10-.793 1.024l.403.318-1.87 1.785-.566-.436a.647.647 0 00-.792 1.024l.402.318-1.87 1.783-.565-.437a.647.647 0 00-.793 1.025l.403.318-1.155 1.1-1.556-1.634a1.727 1.727 0 00-2.438-.058l-2.69 2.612a5.513 5.513 0 00-.175 7.783l5.868 6.154a5.501 5.501 0 007.774.201l2.73-2.616a1.726 1.726 0 00.058-2.437l-1.995-2.091 2.349-2.242 1.072.829a.647.647 0 00.792-1.024l-.917-.709 1.872-1.787 1.07.83a.647.647 0 10.794-1.025l-.917-.709 1.87-1.785 1.07.83a.647.647 0 10.795-1.025l-.917-.71 1.872-1.785 1.07.829a.647.647 0 10.794-1.025l-.917-.71 1.87-1.785 1.072.83a.647.647 0 00.867-.96c-.024-.023-.048-.045-.074-.065l-.915-.71 1.49-1.424.016-.02zM299.675 63.31a.435.435 0 01-.015.604l-2.73 2.616a4.207 4.207 0 01-5.943-.149l-5.868-6.156a4.214 4.214 0 01.13-5.949l2.731-2.614a.432.432 0 01.604.016l6.636 6.957 4.455 4.675zm-1.951-3.924l-1.569-1.644-4.18-4.388 1.294-1.235 6.661 5.16-2.206 2.107zm3.153-3.019l-6.662-5.154 1.87-1.785 6.662 5.16-1.87 1.78zm2.816-2.69l-6.663-5.153 1.87-1.787 6.663 5.162-1.87 1.777zm2.815-2.691l-6.663-5.152 1.87-1.787 6.663 5.162-1.87 1.777zm2.816-2.691l-6.661-5.162 1.868-1.783 6.663 5.16-1.87 1.785zm4.424-4.214l-1.597 1.523-6.66-5.152 2.51-2.395 6.7-.636-.953 6.66z"
                fill="#0A1F44"
                fillRule="nonzero"
              />
            </g>
          </svg>
          <div className="" />
        </div>
        <div className="">
          <article className="Layout_leftColumn__yq32a">
            <section className="CartPage_content__pcGNd">
              <div className="FlashMessages_flashMessage__a_1f7 CartPage_flashMessage__ChRkw FlashMessages_withoutHeight__JMNHL" />
              <p
                data-testid="cart-title"
                className="Title_root__67XkZ Title_empty__4qmZg root_c380a67c body1_c380a67c bold_c380a67c primaryDark_c380a67c"
              >
                Your basket's empty.
              </p>
              <p
                data-testid="cart-empty"
                className="Empty_root__Va08b root_c380a67c body2_c380a67c regular_c380a67c primaryDark_c380a67c"
              >
                How about taking a look at our catalogue?
              </p>
              <p className="Empty_connect__jQQUo root_c380a67c body2_c380a67c regular_c380a67c primaryDark_c380a67c">
                Log in to access your basket
                <a
                  className="Empty_connectCta__PlVHI button_e79faaed themeDefault_e79faaed variantPrimary_e79faaed"
                  data-testid="cart-connect-cta"
                  href="/login"
                >
                  Login
                </a>
              </p>
            </section>
            <section
              className="PayBox_root__81owX CartPage_paybox__OLV7r PayBox_side__Hcjr_"
              data-testid="paybox"
            >
              <dl>
                <dt>
                  <span className="TotalLabel_totalLabel__WqH_O root_c380a67c body1_c380a67c bold_c380a67c primaryDark_c380a67c">
                    Total
                  </span>
                  &nbsp;
                  <span
                    data-testid="tax-info"
                    className="TotalLabel_taxInfo__bs3iZ root_c380a67c body2_c380a67c regular_c380a67c primaryDark_c380a67c"
                  >
                    incl. VAT
                  </span>
                  <span
                    data-testid="delivery-charges"
                    className="TotalLabel_plusDelivery__FrIXV root_c380a67c small_c380a67c regular_c380a67c primaryDark_c380a67c"
                  >
                    We will calculate the cost of delivery in the next step
                  </span>
                </dt>
                <dd
                  data-testvalue="0"
                  data-testid="paybox-cart-total-price"
                  className="root_c380a67c h2_c380a67c bold_c380a67c primaryDark_c380a67c"
                >
                  <span
                    data-testid="paybox-total-price"
                    className="root_640baa97 poundSterling_640baa97 PayBox_price__GC7ls PayBox_priceSpacing__7cuEO"
                  >
                    <span className="integer_640baa97">0</span>
                    <span
                      className="currency_640baa97"
                      data-testid="price-currency-symbol"
                    >
                      £
                    </span>
                    <span className="decimal_640baa97" />
                  </span>
                </dd>
              </dl>
              <button
                className="button_e79faaed themeDefault_e79faaed variantPrimary_e79faaed fullWidth_e79faaed"
                data-testid="paybox-main-cta"
                type="button"
              >
                Go to delivery
              </button>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Basket;
