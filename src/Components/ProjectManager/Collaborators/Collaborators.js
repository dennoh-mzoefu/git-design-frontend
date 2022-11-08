import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveNotifications } from "../../../redux/actions/notificationActions";
import "./style.css";
// import Table from "./Table";

function Collaborators() {
  const { project } = useSelector((state) => state.projectReducer);
  const { user } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const { notifications } = useSelector((state) => state.notificationReducer);

  // filter receiver-notifications and remove them from variable users below to a new array and display the array
  // const receiver =

  const { users } = useSelector((state) => state.userReducer);

  const [name, setName] = useState("");

  const [foundUsers, setFoundUsers] = useState(users);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = users.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(users);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };

  const inviteUser = (item) => {
    const notification = {
      projectName: project.projectName,
      link: `${user.name}/${project.projectName}`,
      receiver: item.name,
      sender: user.name,
    };
    dispatch(saveNotifications(notification));
    // item1 = item;
    // add a .then method to dispatch
  };

  return (
    <div className="container">
      <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Filter"
      />

      <div className="">
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((item, index) => (
            <div key={index} className="table-row tr">
              <div className="td">
                <img
                  className="table__image"
                  src={`${window.location.origin}/images/profiles/${item.profilePic}`}
                />
              </div>
              <div className="td">{item.name}</div>
              <div className="td">
                <button className="table__invite" onClick={inviteUser(item)}>
                  Invite
                </button>
              </div>
            </div>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
    </div>
  );
}
export default Collaborators;
