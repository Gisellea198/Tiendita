import React from "react";
import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route
} from "react-router-dom";
import { PublicRouter } from "./PublicRouter";
import NavBar from "../component/NavBar";
import Login from "../views/Login";
import Register from "../views/Register";
import Home from "../views/Home";
import Profile from "../views/Profile";

const Routers = () => {

    return (
        <div>
            <Router>
                <NavBar />
                <Switch>
                    <PublicRouter exact path="/iniciar_sesion" component={Login} />
                    <PublicRouter exact path="/registrarse" component={Register} />
                    <Route exact path="/profile/:id" component={Profile} />
                    <Route exact path="/" component={Home} />
                    <Redirect to="/" />
                </Switch>
            </Router>
        </div>
    );
};

export default Routers;