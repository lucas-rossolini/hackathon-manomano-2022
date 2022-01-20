import React from "react";
import { Header, Footer, Results, HomeComponent } from "../components";
import "./Home.scss";

function Home({ keyWords, formFilled }) {
  return (
    <>
      <Header />

      {formFilled ? <Results keyWords={keyWords} /> : <HomeComponent />}

      <Footer />
    </>
  );
}

export default Home;
