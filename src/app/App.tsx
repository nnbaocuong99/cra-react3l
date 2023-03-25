import PropTypes from "prop-types";
import React from "react";

import { connect, ConnectedComponent } from "react-redux";

// layouts Format
import VerticalLayout from "../components/VerticalLayout";
import HorizontalLayout from "../components/HorizontalLayout";

// Import scss
import "assets/scss/theme.scss";

const App = (props: any) => {
  function getLayout() {
    let layoutCls;
    switch (props.layout.layoutType) {
      case "horizontal":
        layoutCls = HorizontalLayout;
        break;
      default:
        layoutCls = VerticalLayout;
        break;
    }
    return layoutCls;
  }

  const Layout: ConnectedComponent<any , any> = getLayout();

  React.useEffect(() => {
    //write listPath api call here
  }, []);

  return (
    <React.Fragment>
      <Layout>{props.children}</Layout>
    </React.Fragment>
  );
};

App.propTypes = {
  layout: PropTypes.any,
};

const mapStateToProps = (state: any) => {
  return {
    layout: state.Layout,
    authorized: state.Authorized
  };
};

export default connect(mapStateToProps, {

})(App);
