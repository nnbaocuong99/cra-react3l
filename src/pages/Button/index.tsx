/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import MetaTags from "react-meta-tags";
import { Container } from "reactstrap";

function Button() {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Button</title>
        </MetaTags>
        <Container fluid>
          <div className="row">
            <div className="col-md-12">
              <h2 className="bold-text">Heading</h2>
            </div>
            <div className="col-md-12">
              <button className="btn">Button</button>
              <button className="btn btn--sm ms-2">Button</button>
              <button className="btn btn--lg ms-2">Button</button>
            </div>
            <div className="col-md-12 mt-3">
              <button className="btn btn--primary">Button</button>
              <button className="btn btn--primary btn--sm ms-2">Button</button>
              <button className="btn btn--primary btn--lg ms-2">Button</button>
            </div>
            <div className="col-md-12 mt-3">
              <button className="btn btn--secondary">Button</button>
              <button className="btn btn--secondary btn--sm ms-2">
                Button
              </button>
              <button className="btn btn--secondary btn--lg ms-2">
                Button
              </button>
            </div>
            <div className="col-md-12 mt-3">
              <div className="d-flex">
                <button className="btn btn--secondary">Button</button>
                <button className="btn btn--secondary btn--sm ms-2">
                  Button
                </button>
                <button className="btn btn--secondary btn--lg ms-2">
                  Button
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default Button;
