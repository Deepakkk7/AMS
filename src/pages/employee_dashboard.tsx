import NavBar from "@/components/navbar";
// import asset_comp from '@/components/asset_comp'
import { Button } from "@/components/ui/button";
import MyActivity from '@/assets/myactivity.png';
import MyAssets from '@/assets/My assets.png';
import Request from '@/assets/request.png';
import { Routes, Route, Link } from "react-router-dom"
import Requests from "@/pages/Request_Asset";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();
  const RequestAsset = () => {
    navigate("/Requests");
  };
  const Assetswithme = () => {
    navigate("/MyAssets");
  };
  
  return (
    <div>
      <NavBar />
      <div className="flex justify-center">
        <Button 
         onClick={() => {
          RequestAsset();
        }}
        className="text-black bg-slate-50 text-2xl rounded-xl border-x-1 border-y-1 w-48 h-48 ml-40 mt-40 flex flex-col items-center justify-center">
          <img src={Request} className="w-32 h-32 mb-2" />
          <span>Requested assets</span>
        </Button>
        <Button 
        onClick={() => {
          Assetswithme();
        }}
        className="text-black bg-slate-50 text-2xl rounded-xl border-x-1 border-y-1 w-48 h-48 ml-40 mt-40 flex flex-col items-center justify-center">
          <img src={MyAssets} className="w-32 h-32 mb-2"/>
          <span>Assets with you</span>
        </Button>
        <Button className="text-black bg-slate-50 text-2xl rounded-xl border-x-1 border-y-1 w-48 h-48 ml-40 mt-40 flex flex-col items-center justify-center">
          <img src={MyActivity} alt="My Activity" className="w-32 h-32 mb-2" />
          <span>My Activity</span>
        </Button>
        <nav>
        <Link to="/Requests"></Link>
        <Link to="/MyAssets"></Link>
      </nav>
      <Routes>
        <Route path="/Requests" element={<Requests />} />
        <Route path="/MyAssets" element={<MyAssets />} />
      </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
