import { useState } from "react";
import "./style.css";
import Table from "./Table";

function Collaborators() {
  const [query, setQuery] = useState("");
  const Users = [
    {
      id: 1,
      first_name: "Emiline",
      last_name: "McClune",
      email: "emcclune0@xrea.com",
      gender: "Female",
    },
    {
      id: 2,
      first_name: "Felix",
      last_name: "Ingleston",
      email: "fingleston1@hibu.com",
      gender: "Female",
    },
  ];
  const keys = ["first_name", "last_name", "email"];
  const Search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };
  const handleSubmit = () => {};
  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          className="search-input"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
        <a href="" onClick={handleSubmit} className="search-btn">
          <i className="fas fa-search"></i>
        </a>
      </form>
        {<Table data={Search(Users)} />}
    </div>
  );
}
export default Collaborators;
