import React, { useEffect } from "react";
import { BiTimeFive } from "react-icons/bi";
import { GiFiles } from "react-icons/gi";
import { FaTasks } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProject } from "../../redux/actions/projectActions";
import "./style.css";

function ProjectManager() {
  const { projectName } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    projectName && dispatch(getProject(projectName));
  }, []);
  const { project } = useSelector((state) => state.projectReducer);
  console.log(project);
  return (
    <div className="project__manager">
      <div className="project__nav">
        <div className="project__nav__button">
          <GiFiles />
          <p>
            Files
            </p>
        </div>
        <div className="project__nav__button">
          <FaTasks />
          <p>
            Tasks
            </p>
        </div>
        <div className="project__nav__button">
          <BiTimeFive />
          <p>
            Timeline
            </p>
        </div>
      </div>
      {project && <div>{project.date}</div>}
    </div>
  );
}

export default ProjectManager;
