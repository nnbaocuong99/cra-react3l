/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import MetaTags from "react-meta-tags";
import { Container } from "reactstrap";

function Spacing() {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Spacing</title>
        </MetaTags>
        <Container fluid>
          <div className="row">
            <div className="col-md-12">
              <h2 className="bold-text">Padding</h2>
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default Spacing;
