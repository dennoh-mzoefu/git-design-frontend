import React, { useEffect } from "react";
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
      {project && <div>{project.date}</div>}
    </div>
  );
}

export default ProjectManager;
