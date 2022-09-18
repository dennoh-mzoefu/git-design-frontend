import React, { Fragment } from "react";
import { FaRegCommentDots } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import "./Home.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Overview() {
  const { user } = useParams();
  const { design__files } = useSelector((state) => state.designFileReducer);
  // const filteredFiles = design__files?.filter(
  //   (file) => file.ownerName === user
  // );
  console.log(design__files);
  return (
    <div className="overview">
      {design__files?.map((file) => {
        return (
          <Fragment key={file.date}>
            <div className="repo">
              <img
                alt="repo thumbnail"
                src={file.thumbnailUrl}
                // src="https://s3-alpha-sig.figma.com/thumbnails/15ac2e64-74c6-4cb9-802d-5ecaf71aca0e?Expires=1664150400&Signature=Oezw0iJbnavpIZTlC3URj9To2r~t~-nJ8q2FalS9FxKDPjO-pSP6y5Tr4WlncigBGL3HHt-m-au3W6nebbS1kWRQx85hdbH8F16ww1SGiMAx1MBrKZW5exliHwocUsQWBQPtH5BGGwijE0L4EnMKxDLpZ6SBV9i3E3ioDigWrMMS6lapKmOIrjsq1HE6~X5XSSoJQlvBFl9t~36QQC1i6bz3vk6esUYkGdMy3ONhe6uEhUoHcl5stbWpdTH7Mq9rPGyZ81bORgvx3Bw4Qjwmwl9SHYHfhcx3Yi5zD9HHPCwyALvxJ7wSQhgGoZErb7buc4fJgks-e6eRmEfvwu3Hhw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              />
              <div className="repo__icons">
                <span>
                  <FaEye />
                  <p>200</p>
                </span>
                <span>
                  <FaRegCommentDots />
                  <p>56</p>
                </span>
              </div>
              <div className="repo__desc">
                <p>{file.description}</p>
              </div>
              <div className="repo__desc">
                <p>last modified: {file.lastModified}</p>
              </div>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}

export default Overview;
