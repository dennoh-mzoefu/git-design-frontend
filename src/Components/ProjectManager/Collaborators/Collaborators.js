import { useState } from "react";
import { useSelector } from "react-redux";
import "./style.css";
import Table from "./Table";

function Collaborators() {
  const [query, setQuery] = useState("");
  const [invite, setInvite] = useState("");

  const { notifications } = useSelector((state) => state.notificationReducer);
  // filter receiver-notifications and remove them from variable users below to a new array and display the array
  // const receiver =
  // const a = notifications?.map(b => {

  // })
  const { users } = useSelector((state) => state.userReducer);

  console.log(users);
  const Search = (data) => {
    return data?.filter((item) => item.name.includes(query));
  };
  const handleSubmit = () => {};
  return (
    <div className="collaborators">
      <div className="collab">
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
        </div>
        <div className="users">
          {users && <Table data={Search(users)} setInvite={setInvite} />}
        </div>
      </div>
      <div className="invite__list">
        Invited
        {invite?.map((item) => {
          <div className="invite__card__image">
            <img
              className="table__image"
              src={`${window.location.origin}/images/profiles/${item.profilePic}`}
            />
          </div>;
        })}
        {/* </div> */}
      </div>
    </div>
  );
}
export default Collaborators;
