import React, {useState} from "react";
import Home from "./Components/Home/Home";
import Match from "./Components/Match/Match";


const Astromatch = () => {
  const [currentPage, setCurrentPage] = useState("Home");

  const pageHome = () => {
    setCurrentPage("Home")
  }
  
  const pageMatch = () => {
    setCurrentPage("Match")
  }
  
  const renderCurrentPage = () => {
    switch(currentPage){
      case "Home":
        return <Home changePage={pageMatch} />
      case "Match":
        return <Match changePage={pageHome} />
      default:
        return <Home />;
    }
  };

  return (
    <div>
      {renderCurrentPage()}
    </div>
  );
}

export default Astromatch;