import React, {useState} from "react";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Matches from "./Components/Match/Matchs"


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
      <Header />
      {renderCurrentPage()}

    </div>
  );
}

export default Astromatch;