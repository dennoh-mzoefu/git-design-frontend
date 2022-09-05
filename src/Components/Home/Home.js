import React from "react";
import { FiBookOpen } from "react-icons/fi";
import { GrDocumentStore } from "react-icons/gr";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import "./Home.css";

function Home() {
  return (
    <div className="app">
      <div className="home__navbar">
        <div className="home__link__nav">
          <FiBookOpen />
          <p>Overview</p>
        </div>
        <div className="home__link__nav">
          <GrDocumentStore />
          <p>Overview</p>
        </div>
        <div className="home__link__nav">
          <AiOutlineAppstoreAdd />
          <p>Create Repo</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
