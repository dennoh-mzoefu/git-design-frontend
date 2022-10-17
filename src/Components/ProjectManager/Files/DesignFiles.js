import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./style.css";

function DesignFiles({ project }) {
  const { name, projectName } = useParams();
  const { design__files } = useSelector((state) => state.designFileReducer);

  return (
    <div>
      {design__files &&
        design__files?.map((file, index) => {
          return <div>hello</div>;
        })}
    </div>
  );
}

export default DesignFiles;
