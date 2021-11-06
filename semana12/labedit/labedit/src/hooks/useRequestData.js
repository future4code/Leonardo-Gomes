import axios from "axios";
import {useState, useEffect} from "react";

const useRequestData = (initialState, url) => {
	const [data, setData] = useState(initialState);

	useEffect(() => {
        axios
        .get(url, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then((response) => {
            setData(response.data);
            
        })
        .catch((err) => {
            console.log(err);
            alert("Ocorreu um erro, tente novamente");
        });

    }, [url]);

        return (data);

};

export default useRequestData;