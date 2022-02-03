import React from "react";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {

    const [id, setId] = useState([])

    const states = {id}
    const setters = {setId}
    
    return (
        <GlobalStateContext.Provider>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;