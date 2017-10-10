import React from "react";
import { Route, Switch } from "react-router-dom";
import * as Routes from '../constants/routePath';
import HomePage from '../pages/home.page';
import HeaderContainer from '../containers/Layout/header.container';
import FooterContainer from '../containers/Layout/footer.container';
// import NotFoundPage from '../pages/notFound.page';


const RouteComponent = () => {
    return (
        <div>
            <Switch>
                <Route component={HeaderContainer} />
            </Switch>
            <Switch>
                <Route exact path={Routes.HOME} component={HomePage} />
                {/* <Route component={NotFoundPage} /> */}
            </Switch>
            <Switch>
                <Route component={FooterContainer} />
            </Switch>
        </div>
    )
};

export default RouteComponent;