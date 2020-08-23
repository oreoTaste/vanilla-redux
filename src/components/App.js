import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "../routes/Home"
import Detail from "../routes/Detail"

export default function App() {
    return (
        <HashRouter>
            <Route path="/" exact component={Home}></Route>
            <Route path="/:id" component={Detail}></Route>
        </HashRouter>
    )
}