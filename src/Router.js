import React from 'react'
import { BrowserRouter, Route} from "react-router-dom"
import App from "./App"
import Register from "./Pages/Register"

const Router = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={App}/>
            <Route exact path="/register" component={Register}/>    
        </BrowserRouter>
    )
}

export default Router
