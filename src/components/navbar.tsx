import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import DropMenu from "@/components/DropdownMenu";
import Image from "@/assets/react.svg";
import Search from "@/components/search";
import Home from "@/assets/home.png";
import Cart from '@/assets/cart.png';
// import Help from '@/assets/help.jpg'
import { useNavigate } from "react-router-dom";
import Hover from "@/components/hover"; // Corrected import statement

const NavBar = () => {
  const navigate = useNavigate();
  const home = () => {
    navigate("/Dashboard");
  };

  return (
    <div className="text-white flex justify-between items-center p-5 bg-purple-900 shadow-lg">
      <div className="flex items-center space-y-4 ">
        <img src={Image} alt="Logo" className="h-10" />
      </div>
      <Search />
      <NavigationMenu>
        <NavigationMenuList className="flex space-x-2 items-center ">
          <NavigationMenuItem className="transform transition-transform duration-300 hover:scale-110 ">
            <Button 
              onClick={home}
              className="rounded-full border border-white text-white">
              <img src={Home} alt="Home" />
            </Button>
          </NavigationMenuItem>
          <NavigationMenuItem  className="transform transition-transform duration-300 hover:scale-110 ">
            <Button className="rounded-full border border-white text-white">
              <img src={Cart} alt="Cart" />
            </Button>
          </NavigationMenuItem>
          <NavigationMenuItem className="transform transition-transform duration-300 hover:scale-110 ">
            <Hover /> {/* Corrected usage */}
          </NavigationMenuItem>
          <NavigationMenuItem  className="transform transition-transform duration-300 hover:scale-110 ">
            <DropMenu />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavBar;
