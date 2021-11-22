import React from 'react'
import { BrowserRouter, Route} from "react-router-dom"
import Home from './Pages/Home'
import Register from "./Pages/Register"

function App () {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home}/>
            <Route exact path="/register" component={Register}/>    
        </BrowserRouter>
    )
}

export default App
