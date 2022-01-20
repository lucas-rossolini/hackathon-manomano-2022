import React from "react";
import { Header, Footer, Results, HomeComponent } from "../components";
import "./Home.scss";

function Home({ keyWords }) {
  const formFilled = false;
  return (
    <>
      <Header />

      {formFilled ? <Results keyWords={keyWords} /> : <HomeComponent />}

      <Footer />
    </>
  );
}

export default Home;
