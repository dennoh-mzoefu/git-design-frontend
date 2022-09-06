import React from "react";
import "./Home.css";

function CreateRepo() {
  return (
    <div>
      <form>
        <input type="text" placeholder="Repo name" />
        <input type="text" placeholder="Description about repo" />
        <input type="text" placeholder="figma access token" />
        <input type="text" placeholder="figma file url" />
        <button className="upload__file__btn" type="submit">
          Upload
        </button>
      </form>
    </div>
  );
}

export default CreateRepo;
