import React, { useState } from "react";
import { FiBookOpen } from "react-icons/fi";
import { GrDocumentStore } from "react-icons/gr";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import CreateRepo from "./CreateRepo";
import Overview from "./Overview";
import "./Home.css";

function Home() {
  const [overview, setOverview] = useState(true);
  const [createRepo, setCreateRepo] = useState(false);
  const [repositories, setRepositories] = useState(false);
  const activeLink = "rgba(110, 110, 202, 0.55)";
  return (
    <div className="app">
      <div className="home__navbar">
        <div
          className="home__link__nav"
          style={{
            borderBottom: overview ? "solid rgba(110, 110, 202, 0.55)" : "none",
          }}
        >
          <FiBookOpen />
          <p>Overview</p>
        </div>
        <div
          className="home__link__nav"
          style={{
            borderBottom: repositories
              ? "solid rgba(110, 110, 202, 0.55)"
              : "none",
          }}
        >
          <GrDocumentStore />
          <p>Repositories</p>
        </div>
        <div
          className="home__link__nav"
          style={{
            borderBottom: createRepo
              ? "solid rgba(110, 110, 202, 0.55)"
              : "none",
          }}
        >
          <AiOutlineAppstoreAdd />
          <p>Create Repo</p>
        </div>
      </div>
      {overview && <Overview />}
      {createRepo && <CreateRepo />}
    </div>
  );
}

export default Home;
