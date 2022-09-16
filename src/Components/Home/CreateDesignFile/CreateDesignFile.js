import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { createProject } from "../../../redux/actions/projectActions";
import { error } from "../../../redux/actions/userActions";

function CreateDesignFile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("design file")
  // user from state
  const { user } = useSelector((state) => state.userReducer);
  // form handling with states
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [figmaApiKey, setFigmaApiKey] = useState("");
  // form handler function
  const handleClick = (e) => {
    e.preventDefault();
    const project = { projectName, description, figmaApiKey };
    dispatch(createProject(project))
      .then(() => {
        JSON.stringify(localStorage.setItem("project", project));
        // navigate("/user/home");
      })
      .catch((err) => dispatch(error(err)));
  };

  return (
    <div className="whole__create__repo">
      <div className="create__repo">
        <h2>Upload a design file</h2>
        <p className="repo__guidline">Project Name</p>
        <form className="create__repo__form">
          <div className="owner__repo__name">
            <div>
              <p className="input__desc">File Name </p>
              <input
                className="create__repo__input"
                type="text"
                placeholder=""
                value={user.name}
              />
            </div>

            <div>
              <p className="input__desc">File Url: </p>
              <input
                className="create__repo__input"
                type="text"
                placeholder=""
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
              />
            </div>
          </div>
          <p className="input__desc">Description about repo: </p>
          <input
            className="create__repo__input"
            type="text"
            placeholder=""
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {/* <p className="input__desc">Figma Api Key: </p>
          <input
            className="create__repo__input"
            type="text"
            placeholder=""
            value={figmaApiKey}
            onChange={(e) => setFigmaApiKey(e.target.value)}
          /> */}

          <div className="div__btn__form">
            <button
              className="upload__file__btn"
              type="submit"
              onClick={handleClick}
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateDesignFile;
