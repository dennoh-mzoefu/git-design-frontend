import "./App.css";
import Repository from "./Components/Repository/Repository";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import PreApp from "./PreApp";

// toast.configure();
function App() {
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
    var auth = localStorage.getItem("auth");
  }, [auth]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/user/*" element={<PreApp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
