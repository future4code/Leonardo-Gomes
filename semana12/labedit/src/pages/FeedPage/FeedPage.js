import React from "react";
import {useHistory} from "../../routes/coordinator";

const FeedPage = () => {
    
    const history = useHistory()
    
    
    return(
        <div>
            <h1> Feed de Posts</h1>

                <div>
                    <button onClick={PostPage}> Entrar no Post </button>
                </div>
        </div>
    )
}

export default FeedPage;