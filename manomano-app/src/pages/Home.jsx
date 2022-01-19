import React from "react";

import { Header, Footer } from "../components";

import "./Home.scss";

function Home() {
  return (
    <>
      <Header />

      <main className="home">
        <h1>Home Here !</h1>
      </main>

      <Footer />
    </>
  );
}

export default Home;
