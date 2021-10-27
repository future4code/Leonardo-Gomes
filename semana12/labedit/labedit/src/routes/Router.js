import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import FeedPage from "../pages/FeedPage/FeedPage";
import PostPage from "../pages/PostPage/PostPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>

                <Route exact path={"/"}>
                    <LoginPage />
                </Route>

                <Route exact path={"/register"}>
                    <RegisterPage />
                </Route>

                <Route exact path={"/feed"}>
                    <FeedPage />
                </Route>

                <Route exact path={"/post/:id"}>
                    <PostPage />
                </Route>

		        <Route>
                    < ErrorPage />
                </Route>

            </Switch>
        </BrowserRouter>
    );
};

export default Router; 