import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import * as Cookie from "js-cookie";
import { userRoutes } from "routes/allRoutes";
import authenticationService from "services/authentication-service";
import App from "app/App";

export const PrivateRoute = ({ ...rest }) => (
  <Route
    {...rest}
    render={props => {
      const currentUser = authenticationService.currentUserValue;
      const token = Cookie.get("Token");
      if (!currentUser || !token) {
        return (
          <Redirect
            to={{
              pathname: `${process.env.PUBLIC_URL}/login`,
              state: { from: props.location },
            }}
          />
        );
      }

      return (
        <React.Suspense fallback={null}>
          <App>
            <Switch>
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/`}
                render={() => {
                  return (
                    <Redirect
                      to={`${process.env.PUBLIC_URL}/product`}
                    />
                  );
                }}
              />
              {userRoutes.map(({ path, component: Component }) => (
                <Route
                  key={path}
                  path={path}
                  render={props => {
                    return <Component />;
                  }}
                ></Route>
              ))}
            </Switch>
          </App>
        </React.Suspense>
      );
    }}
  />
);
