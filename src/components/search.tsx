import { useState } from "react";
import { Input } from "@/components/ui/input";
import  searchIcon  from "@/assets/search.svg";

const Search = () => {
  const [query, setQuery] = useState("");

  // const handleSearch = () => {
  //   // Handle search logic here
  //   console.log("Search query:", query);
  // };

  return (
    <div className="flex">
      
        <img src={searchIcon}/>
        <div className="mb-4 text-black">
          <Input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="mb-4"
          />
        </div>
      </div>
    
  );
};

export default Search;
