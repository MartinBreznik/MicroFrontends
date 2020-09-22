import React from "react";
import ReactDOM from "react-dom";
import Terminals from 'terminal/App';
import "./index.css";

const HomeApp = () => 
<div>

    <Terminals />
<div>
    Hi there, I'm React from Webpack 5 8080.</div>;
</div>
ReactDOM.render(<HomeApp />, document.getElementById("app"));
