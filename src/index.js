import React from "react"
import ReactDOM from "react-dom"
import TodoContainer from "./components/TodoContainer/TodoContainer.js"
import { BrowserRouter as Router} from 'react-router-dom'
import "./App.css"
//const reactElement = <h1>Hello aus index.js</h1>  //  intern: React.createELement()



// Rendert unsere Components/React-Elemente im DOM
// hier wird es an das HTML Element #root hinzugefügt 
// (siehe public -> index.html -> <body><)
ReactDOM.render(
    <React.StrictMode>
        <Router>
            <TodoContainer/>
        </Router>
    </React.StrictMode>, 
    document.getElementById("root"));



