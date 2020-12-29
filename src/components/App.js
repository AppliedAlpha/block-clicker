import React from "react";
import {firebaseInstance} from "fBase";

const App = () => {
    const firebaseApp = firebaseInstance.app;

    return (
        <div className="App">
            <h1>Hi</h1>
        </div>
    );
};

export default App;
