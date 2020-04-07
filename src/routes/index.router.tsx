import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import HomeComponent from '../pages/home/Home.component';
import SingleViewComponent from '../pages/singleView/singleView.component';
import './index.router.scss';

function IndexRouter() {
    return (
        <Router>
            {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}

            <div className="page-title">
                <h1>Truecaller Blogs</h1>
            </div>
            <Switch>
                <Route path="/post/:id">
                    <SingleViewComponent />
                </Route>
                <Route path="/Home">
                    <HomeComponent />
                </Route>

                <Route render={() => <Redirect to="/Home" />} />
            </Switch>
        </Router>
    );
}

export default IndexRouter;
