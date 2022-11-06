import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { saveNotifications } from "../../../redux/actions/notificationActions";
import "./style.css";
const Table = ({ data, setInvite }) => {
  const { project } = useSelector((state) => state.projectReducer);
  const { user } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const inviteUser = (item) => {
    axios.post("http://localhost:5000/notification", project.projectName);
    const notification = {
      projectName: project.projectName,
      link: `${user.name}/${project.projectName}`,
      receiver: item.name,
      sender: user.name,
    };
    dispatch(saveNotifications(notification));
    // add a .then method to dispatch
    const invite = item;
    setInvite((prevInvite) => ({ ...prevInvite, invite }));
  };
  return (
    <div className="table">
      <table>
        <tbody>
          <tr calssName="table-header">
            <th>pic</th>
            <th>username</th>
            <th>Invite</th>
          </tr>
          {data?.map((item) => (
            <tr key={item.id} className="table-row">
              <td>
                <img
                  className="table__image"
                  src={`${window.location.origin}/images/profiles/${item.profilePic}`}
                />
              </td>
              <td>{item.name}</td>
              <td>
                <button className="table__invite" onClick={inviteUser(item)}>
                  Invite
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
