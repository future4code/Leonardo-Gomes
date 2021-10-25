import React from "react";
import {useHistory} from "../../routes/coordinator";


const PostPage = () => {
    
    const history = useHistory()
    
    return(
        <div>
            <h1>Página do Post</h1>

            <div>
                <button onClick={LoginPage}> Home LoginPage </button>
            </div>
        </div>
    )
}

export default PostPage;