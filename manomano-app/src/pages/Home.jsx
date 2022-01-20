import React from "react";
import { Header, Footer, Results } from "../components";
import "./Home.scss";

function Home({ keyWords }) {
  return (
    <>
      <Header />
      <Results keyWords={keyWords} />

      <Footer />
    </>
  );
}

export default Home;
