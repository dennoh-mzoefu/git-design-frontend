import "./App.css";
import Repository from "./Components/Repository/Repository";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Sidebar } from "./Components";
import { useSelector } from "react-redux";
import Kanban from "./Components/Kanban/Kanban";
import Calendar from "./Components/Calendar/Calendar";
import CreateProject from "./Components/CreateProject/CreateProject";
import Home from "./Components/Home/Home";

function App() {
  const { sideBarVisibility } = useSelector((state) => state.sideBarVisibility);
  return (
    <div>
      <BrowserRouter>
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
              <Routes>
                {/* dashboard */}

                <Route path="/home" element={<Repository />} />
                <Route path="/" element={<Home />} />
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/create" element={<CreateProject />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
