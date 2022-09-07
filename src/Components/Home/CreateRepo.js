import React from "react";
import "./Home.css";

function CreateRepo() {
  return (
    <div className="whole__create__repo">
      <div className="create__repo">
        <h2>Create a new repository</h2>
        <p className="repo__guidline">
          A repository contains all project files, including the revision
          history.
        </p>
        <form className="create__repo__form">
          <div className="owner__repo__name">
            <div>
              <p className="input__desc">Owner: </p>
              <input
                className="create__repo__input"
                type="text"
                placeholder=""
              />
            </div>
            <h2 className="repo__divider">/</h2>
            <div>
              <p className="input__desc">Repo name: </p>
              <input
                className="create__repo__input"
                type="text"
                placeholder=""
              />
            </div>
          </div>
          <p className="input__desc">Description about repo: </p>
          <input className="create__repo__input" type="text" placeholder="" />
          {/* <input
            className="create__repo__input"
            type="text"
            placeholder="figma access token"
          />k
          <input
            className="create__repo__input"
            type="text"
            placeholder="figma file url"
          /> */}
          <button className="upload__file__btn" type="submit">
            Upload
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateRepo;
