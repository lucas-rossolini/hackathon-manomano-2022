import React from "react";
import { Header, Footer, Results } from "../components";
import "./Home.scss";

function Home({ area, checkBoxTools, budget, room, location, work }) {
  return (
    <>
      <Header />
      <Results
        area={area}
        checkBoxTools={checkBoxTools}
        budget={budget}
        room={room}
        location={location}
        work={work}
      />
      <Results />
      <Footer />
    </>
  );
}

export default Home;
