import React from "react";
import { TiLockClosed } from "react-icons/ti";
import ManoManoReward from "../assets/images/ManoManoRewards.png";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="informations">
        <div className="securePayment">
          <h3>
            <TiLockClosed className="lock" />
            Secure payment
          </h3>
          <div className="icons icons-payment">
            <img
              alt="Visa"
              src="https://www.manomano.co.uk/assets/img/themes/default/svg/payment/Visa.svg"
              height="32"
              width="48"
            />
            <img
              alt="Mastercard"
              src="https://www.manomano.co.uk/assets/img/themes/default/svg/payment/Mastercard.svg"
              height="32"
              width="48"
            />
            <img
              alt="Paypal"
              src="https://www.manomano.co.uk/assets/img/themes/default/svg/payment/Paypal.svg"
              height="32"
              width="48"
            />
            <img
              alt="Virement"
              src="https://www.manomano.co.uk/assets/img/themes/default/svg/payment/Virement.svg"
              height="32"
              width="48"
            />
          </div>
        </div>
        <div className="socialMedias">
          <h3>Join the conversation!</h3>
          <h5>The magic of the internet, acroos the globe!</h5>
          <div className="icons icons-media">
            <img
              alt="Twitter"
              src="https://www.manomano.co.uk/assets/img/themes/default/svg/social-media/sprites/twitter.svg"
              width="50"
              height="100"
            />
            <img
              alt="Facebook"
              src="https://www.manomano.co.uk/assets/img/themes/default/svg/social-media/sprites/facebook.svg"
              width="50"
              height="100"
            />
            <img
              alt="Pinterest"
              src="https://www.manomano.co.uk/assets/img/themes/default/svg/social-media/sprites/pinterest.svg"
              width="50"
              height="100"
            />
            <img
              alt="ManoBlog"
              src="https://www.manomano.co.uk/assets/img/themes/default/svg/social-media/sprites/blog.svg"
              width="50"
              height="100"
            />
          </div>
          <img src={ManoManoReward} alt="rewards won by ManoMano" />
        </div>
        <hr />

        <div className="contact">
          <span className="falseButton">
            <h3>Information & Contact</h3>
            <svg
              aria-hidden="true"
              focusable="false"
              height="1.5em"
              role="presentation"
              width="1.5em"
              viewBox="0 0 24 24"
              className="svg"
            >
              <path
                d="M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 111.41 1.41l-4.59 4.59a.996.996 0 01-1.41 0L6.7 10.7a.996.996 0 010-1.41c.39-.38 1.03-.39 1.42 0z"
                fill="currentColor"
              />
            </svg>
          </span>
          <h5>Every which way but fax</h5>
        </div>
        <hr />

        <div className="findMore">
          <span className="falseButton">
            <h3>Find Out More</h3>
            <svg
              aria-hidden="true"
              focusable="false"
              height="1.5em"
              role="presentation"
              width="1.5em"
              viewBox="0 0 24 24"
              className="svg"
            >
              <path
                d="M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 111.41 1.41l-4.59 4.59a.996.996 0 01-1.41 0L6.7 10.7a.996.996 0 010-1.41c.39-.38 1.03-.39 1.42 0z"
                fill="currentColor"
              />
            </svg>
          </span>
          <h5>The Serious Bits</h5>
        </div>
        <hr />

        <div className="international">
          <h3>International</h3>
          <h5>Coming soon to planet Mars!</h5>
          <div className="icons">
            <img
              alt="ManoMano FR"
              src="https://www.manomano.co.uk/assets/img/themes/default/svg/flags/fr.svg"
              width="32"
              height="32"
            />
            <img
              alt="ManoMano IT"
              src="https://www.manomano.co.uk/assets/img/themes/default/svg/flags/it.svg"
              width="32"
              height="32"
            />
            <img
              alt="ManoMano DE"
              src="https://www.manomano.co.uk/assets/img/themes/default/svg/flags/de.svg"
              width="32"
              height="32"
            />
            <img
              alt="ManoMano ES"
              src="https://www.manomano.co.uk/assets/img/themes/default/svg/flags/es.svg"
              width="32"
              height="32"
            />
            <button className="ToTopButton" type="button">
              <svg
                aria-hidden="true"
                focusable="false"
                height="1em"
                role="presentation"
                width="1em"
                viewBox="0 0 24 24"
                className="svg ToTopButton_arrow"
              >
                <path
                  d="M5.418 11h11.17l-4.88-4.88c-.39-.39-.39-1.03 0-1.42a.996.996 0 011.41 0l6.59 6.59c.39.39.39 1.02 0 1.41l-6.59 6.59a.996.996 0 11-1.41-1.41l4.88-4.88H5.417c-.55 0-1-.45-1-1s.45-1 1-1z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="footerEnd">
        <div>@2020 ManoMano</div>
        <div className="mentions">
          Manage cookies | Sitemap | Legal Notice | Data Protection Policy |
          Terms and conditions | consumer information
        </div>
      </div>
    </footer>
  );
}

export default Footer;
