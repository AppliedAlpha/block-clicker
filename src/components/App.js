import React from "react";
import {firebaseInstance} from "fBase";

const App = () => {
    console.log(firebaseInstance);

    return (
        <div>
            <h1>Hi</h1>
        </div>
    );
};

export default App;
