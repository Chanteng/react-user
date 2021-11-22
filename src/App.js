import React from 'react'
import { BrowserRouter, Route} from "react-router-dom"
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from "./Pages/Register"
import ProtectRoute from "./Components/ProtectRoute"

function App () {
    return (
        <BrowserRouter>
            <ProtectRoute exact path="/" component={Home}/>
            <Route exact path="/register" component={Register}/>   
            <Route exact path="/login" component={Login}/>  
        </BrowserRouter>
    )
}

export default App
