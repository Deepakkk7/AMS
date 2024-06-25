import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "@/pages/login";
import Dashboard from "@/pages/employee_dashboard";
import Requests from "@/pages/Request_Asset";  // Ensure correct path
import MyAssets from "@/pages/Assetswithme";
const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/requests" element={<Requests />} />
          <Route path= "/MyAssets" element={<MyAssets/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
