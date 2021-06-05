import React from 'react';
import Sidenavbar from "../NavBars/Sidenavbar";
import MainNavBar from "../NavBars/MainNavBar";
import MainNavBar2 from '../NavBars/MainNavBar2';
import Forum from "../Forum/Forum";
import JoinChannel from "../Channel/JoinChannel";
import Shop from "../Shop/Shop";
import Job from "../Job/Job";
import './MainPage.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function MainPage(){
    return(
        <div className="display-route-links">
            <Router>
                <div className="route-links">
                    <Sidenavbar />
                    <MainNavBar2 />
                    {/*<!MainNavBar />*/}
                    <Switch>
                        <Route path="/main" exact component={JoinChannel} />
                        <Route path="/forum" component={Forum} />
                        <Route path="/shop" component={Shop} />
                        <Route path="/job" component={Job} /> 
                    </Switch>   
                </div>
            </Router>
        </div>
    );
}

export default MainPage;