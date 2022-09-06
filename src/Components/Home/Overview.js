import React from "react";
import { FaRegCommentDots } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import "./Home.css";

function Overview() {
  return (
    <div className="overview">
      <div className="repo">
        <img
          alt="repo thumbnail"
          src="https://s3-alpha-sig.figma.com/thumbnails/15ac2e64-74c6-4cb9-802d-5ecaf71aca0e?Expires=1662940800&Signature=OCbyARpN0C0uWOIcrdhO8X78Tydssl5CQgXhgatOf6UwiuRpVJaNn5Eriltjha5wGfIZW-SIqATwy6TZYmxsWk4r5r6l~BgRNukHLg5-YlnWPnljO0sg60d09UcN5scJ4jMCssBc7SRhkpBYstABcVRVfz2Nref5b2srXT2XlXF0xOfp55zS4tVY7dl6cFrPEwErDGO7wCJIzDDp5wYCxRaxbARk6sDfbNJ6BM~fU0l5XoMJUSMGmprNXRooOQaDAf14KCY6i8reEXJM0XCYJOPhxgwdJj4St2S3jFwQG-4hG63kw3D-PT1n1Tr0nFrWJOIcU81iHPtV6nUJEN83xA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
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
          <p>Open fashion free ecommerce ui kit for designers</p>
        </div>
      </div>
    </div>
  );
}

export default Overview;
