import React, { useState } from "react";

const App = () => {
    var [count, setcount] = useState(1);

    function add()
    {
       setcount(count+1)
    }
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={add}>add</button>
        </div>
    )
}

export default App;