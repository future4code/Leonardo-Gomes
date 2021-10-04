import React, {useState} from "react";
import Home from "./Components/Home";
import Matches from "./Components/Matches"


const Astromatch = () => {
  const [currentPage, setCurrentPage] = useState("Home");
  
  const renderCurrentPage = () => {
    switch(currentPage){
      case "Home":
        return <Home changePage={changePage} />
      case "Matches":
        return <Matches changePage={changePage} />
      default:
        return <Home />;
    }
  };

  const changePage = () => {
    setCurrentPage();
  };

  return (
    <div>
      {renderCurrentPage()}

    </div>
  );
}

export default Astromatch;