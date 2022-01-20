import React from "react";
import { Header, Footer, Results, HomeComponent } from "../components";
import "./Home.scss";

function Home({ keyWords, formFilled, handleBasket }) {
  return (
    <>
      <Header />

      {formFilled ? (
        <Results keyWords={keyWords} handleBasket={handleBasket} />
      ) : (
        <HomeComponent />
      )}

      <Footer />
    </>
  );
}

export default Home;
