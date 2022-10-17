import React, { useEffect, useState } from "react";
import { BiTimeFive } from "react-icons/bi";
import { GiFiles } from "react-icons/gi";
import { FaTasks } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProject } from "../../redux/actions/projectActions";
import "./style.css";
import Chat from "./Chat/Chat";
import Collaborators from "./Collaborators/Collaborators";
import DesignFiles from "./Files/DesignFiles";

function ProjectManager() {
  const [displayHome, setDisplayHome] = useState("files");
  const { projectName } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    projectName && dispatch(getProject(projectName));
  }, []);
  const { project } = useSelector((state) => state.projectReducer);
  console.log(project);
  // const chooseDisplay (e) => {
  //   e.preventDefault();
  //   setDisplayHome
  // }
  return (
    <div className="project__manager">
      <div className="left__project__part">
        <div className="project__nav">
          <div
            className="project__nav__button"
            id={displayHome === "files" ? "nav__underline" : ""}
            onClick={() => setDisplayHome("files")}
          >
            <GiFiles />
            <p>Files</p>
          </div>
          <div
            className="project__nav__button"
            id={displayHome === "tasks" ? "nav__underline" : ""}
            onClick={() => setDisplayHome("tasks")}
          >
            <FaTasks />
            <p>Tasks</p>
          </div>
          <div
            className="project__nav__button"
            id={displayHome === "collaborators" ? "nav__underline" : ""}
            onClick={() => setDisplayHome("collaborators")}
          >
            <BiTimeFive />
            <p>Collaborators</p>
          </div>
        </div>
        <div className="project__manager__body">
          <div>
            {displayHome === "files" && project && (
              <div>
                <DesignFiles />
              </div>
            )}
            {displayHome === "tasks" && project && <div>{project.date}</div>}
            {displayHome === "collaborators" && project && (
              <div>
                <Collaborators />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="chat">
        <Chat />
      </div>
    </div>
  );
}

export default ProjectManager;
