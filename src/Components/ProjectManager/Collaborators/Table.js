import axios from "axios";
import { useSelector } from "react-redux";
import "./style.css";
const Table = ({ data }) => {
  const { project } = useSelector((state) => state.projectReducer);
  const inviteUser = (name) => {
    axios.post("http://localhost:5000/notification", project.projectName);
  };
  return (
    <table>
      <tbody>
        <tr>
          <th>pic</th>
          <th>username</th>
          <th>Invite</th>
        </tr>
        {data?.map((item) => (
          <tr key={item.id}>
            <td>
              <img src={item.profilePic} />{" "}
            </td>
            <td>{item.name}</td>
            <td>
              <button onClick={inviteUser(item.name)}>Invite</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
