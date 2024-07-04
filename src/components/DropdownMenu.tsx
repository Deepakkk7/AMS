import {
  DropdownMenu,
  DropdownMenuContent,
  //DropdownMenuItem,
  //DropdownMenuLabel,
  //DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
//import React from "react";
import Profile from "@/assets/profile.svg"
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const DropMenu = () => {
  const navigate = useNavigate();
  const Logout = () => {
    navigate("/");
  };
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className=" rounded-xl-border text-xxl">
          <img src={Profile} width={30} height={30} alt="Profile" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="text-white rounded-full-border flex flex-col ">
          <Button>My Profile</Button>
         <Button onClick={() => {
          Logout();
        }}>Logout</Button> 
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DropMenu;
