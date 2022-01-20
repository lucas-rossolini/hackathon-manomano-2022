import React from "react";
import { Header, Footer, Results } from "../components";
import "./Home.scss";

function Home({ area, checkBoxTools, budget }) {
  return (
    <>
      <Header />

      <Results area={area} checkBoxTools={checkBoxTools} budget={budget} />

      <Footer />
    </>
  );
}

export default Home;
