import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Sidebar } from "./Components";
import { useSelector, useDispatch } from "react-redux";
import Kanban from "./Components/Kanban/Kanban";
import Calendar from "./Components/Calendar/Calendar";
import CreateProject from "./Components/CreateProject/CreateProject";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import LandingPage from "./Components/LandingPage/LandingPage";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { fetchUserLocalStorage } from "./redux/actions/userActions";
import CreateDesignFile from "./Components/Home/CreateDesignFile/CreateDesignFile";

// toast.configure();
function PreApp() {
  const { sideBarVisibility } = useSelector((state) => state.sideBarVisibility);
  // const auth = true;
  const dispatch = useDispatch();
  const { error, auth } = useSelector((state) => state.userReducer);

  useEffect(() => {
    {
      toast.error(error);
    }
  }, [error]);
  useEffect(() => {
    var user = localStorage.getItem("user");
    console.log(JSON.parse(user));
    user = JSON.parse(user);
    var auth = localStorage.getItem("auth");
    const data = { user, auth };
    dispatch(fetchUserLocalStorage(data));
  }, [auth]);

  return (
    <div>
      <div className="flex relative dark:bg-main-dark-bg">
        {/* div for tooltip */}
        <div className="fixed right-4 bottom-4 " style={{ zIndex: "1000" }}>
          <TooltipComponent content="Settings" position="Top">
            <button
              className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white "
              style={{
                background: "rgba(175, 175, 255, 0.85)",
                borderRadius: "50%",
              }}
              type="button"
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
        {sideBarVisibility ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-bg">
            <Sidebar />
          </div>
        )}
        {/* navbar */}
        <div
          className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
            sideBarVisibility ? "md:ml-72" : "flex-2"
          }`}
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            <Navbar />
          </div>

          <div>
            {/* route various components and pages */}
            {/* dashboard */}
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/activity-Log" element={<Calendar />} />
              <Route path="/create-Project" element={<CreateProject />} />
              <Route
                path="/home/projectName/create-design-file"
                element={<CreateDesignFile />}
              />
              {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreApp;
