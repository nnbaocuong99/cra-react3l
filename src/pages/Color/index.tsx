/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import MetaTags from "react-meta-tags";
import { Container } from "reactstrap";

const titleColor = {
  width: "100%",
  height: "72px",
  backgroundColor: "#F8F8FA",
  padding: "24px 72px",
};

function Color() {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Color</title>
        </MetaTags>
        <Container fluid>
          <div className="row">
            <div className="col-md-12">
              <h2 className="bold-text">Color Palletes</h2>
            </div>
            <div className="col-md-12 mt-3">
              <div style={titleColor}>
                <span className="body-text--lg bold-text">Cerulean</span>
              </div>
              <div className="row">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-cerulean-900"
                  >
                    <span className="color-white">900</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-cerulean-400"
                  >
                    <span>400</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-cerulean-800"
                  >
                    <span className="color-white">800</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-cerulean-300"
                  >
                    <span>300</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-cerulean-700"
                  >
                    <span className="color-white">700</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-cerulean-200"
                  >
                    <span>200</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-cerulean-600"
                  >
                    <span className="color-white">600</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-cerulean-100"
                  >
                    <span>100</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-cerulean-500"
                  >
                    <span className="color-white">500</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-cerulean-50"
                  >
                    <span>50</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 mt-3">
              <div style={titleColor}>
                <span className="body-text--lg bold-text">Grayscale</span>
              </div>
              <div className="row">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-grayscale-900"
                  >
                    <span className="color-white">900</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-grayscale-400"
                  >
                    <span>400</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-grayscale-800"
                  >
                    <span className="color-white">800</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-grayscale-300"
                  >
                    <span>300</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-grayscale-700"
                  >
                    <span className="color-white">700</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-grayscale-200"
                  >
                    <span>200</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-grayscale-600"
                  >
                    <span className="color-white">600</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-grayscale-100"
                  >
                    <span>100</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-grayscale-500"
                  >
                    <span className="color-white">500</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-grayscale-50"
                  >
                    <span>50</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 mt-3">
              <div style={titleColor}>
                <span className="body-text--lg bold-text">Yellow</span>
              </div>
              <div className="row">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-yellow-900"
                  >
                    <span className="color-white">900</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-yellow-400"
                  >
                    <span>400</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-yellow-800"
                  >
                    <span className="color-white">800</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-yellow-300"
                  >
                    <span>300</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-yellow-700"
                  >
                    <span className="color-white">700</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-yellow-200"
                  >
                    <span>200</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-yellow-600"
                  >
                    <span className="color-white">600</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-yellow-100"
                  >
                    <span>100</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-yellow-500"
                  >
                    <span className="color-white">500</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-yellow-50"
                  >
                    <span>50</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 mt-3">
              <div style={titleColor}>
                <span className="body-text--lg bold-text">Green</span>
              </div>
              <div className="row">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-green-900"
                  >
                    <span className="color-white">900</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-green-400"
                  >
                    <span>400</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-green-800"
                  >
                    <span className="color-white">800</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-green-300"
                  >
                    <span>300</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-green-700"
                  >
                    <span className="color-white">700</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-green-200"
                  >
                    <span>200</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-green-600"
                  >
                    <span className="color-white">600</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-green-100"
                  >
                    <span>100</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-green-500"
                  >
                    <span className="color-white">500</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-green-50"
                  >
                    <span>50</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 mt-3">
              <div style={titleColor}>
                <span className="body-text--lg bold-text">Red</span>
              </div>
              <div className="row">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-red-900"
                  >
                    <span className="color-white">900</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-red-400"
                  >
                    <span>400</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-red-800"
                  >
                    <span className="color-white">800</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-red-300"
                  >
                    <span>300</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-red-700"
                  >
                    <span className="color-white">700</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-red-200"
                  >
                    <span>200</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-red-600"
                  >
                    <span className="color-white">600</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-red-100"
                  >
                    <span>100</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-red-500"
                  >
                    <span className="color-white">500</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-red-50"
                  >
                    <span>50</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 mt-3">
              <div style={titleColor}>
                <span className="body-text--lg bold-text">Teal</span>
              </div>
              <div className="row">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-teal-900"
                  >
                    <span className="color-white">900</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-teal-400"
                  >
                    <span>400</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-teal-800"
                  >
                    <span className="color-white">800</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-teal-300"
                  >
                    <span>300</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-teal-700"
                  >
                    <span className="color-white">700</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-teal-200"
                  >
                    <span>200</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-teal-600"
                  >
                    <span className="color-white">600</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-teal-100"
                  >
                    <span>100</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-teal-500"
                  >
                    <span className="color-white">500</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-teal-50"
                  >
                    <span>50</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 mt-3">
              <div style={titleColor}>
                <span className="body-text--lg bold-text">Cyan</span>
              </div>
              <div className="row">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-cyan-900"
                  >
                    <span className="color-white">900</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-cyan-400"
                  >
                    <span>400</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-cyan-800"
                  >
                    <span className="color-white">800</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-cyan-300"
                  >
                    <span>300</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-cyan-700"
                  >
                    <span className="color-white">700</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-cyan-200"
                  >
                    <span>200</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-cyan-600"
                  >
                    <span className="color-white">600</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-cyan-100"
                  >
                    <span>100</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-cyan-500"
                  >
                    <span className="color-white">500</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-cyan-50"
                  >
                    <span>50</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 mt-3">
              <div style={titleColor}>
                <span className="body-text--lg bold-text">Blue</span>
              </div>
              <div className="row">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-blue-900"
                  >
                    <span className="color-white">900</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-blue-400"
                  >
                    <span>400</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-blue-800"
                  >
                    <span className="color-white">800</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-blue-300"
                  >
                    <span>300</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-blue-700"
                  >
                    <span className="color-white">700</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-blue-200"
                  >
                    <span>200</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-blue-600"
                  >
                    <span className="color-white">600</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-blue-100"
                  >
                    <span>100</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-blue-500"
                  >
                    <span className="color-white">500</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-blue-50"
                  >
                    <span>50</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 mt-3">
              <div style={titleColor}>
                <span className="body-text--lg bold-text">Indigo</span>
              </div>
              <div className="row">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-indigo-900"
                  >
                    <span className="color-white">900</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-indigo-400"
                  >
                    <span>400</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-indigo-800"
                  >
                    <span className="color-white">800</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-indigo-300"
                  >
                    <span>300</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-indigo-700"
                  >
                    <span className="color-white">700</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-indigo-200"
                  >
                    <span>200</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-indigo-600"
                  >
                    <span className="color-white">600</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-indigo-100"
                  >
                    <span>100</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-indigo-500"
                  >
                    <span className="color-white">500</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-indigo-50"
                  >
                    <span>50</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 mt-3">
              <div style={titleColor}>
                <span className="body-text--lg bold-text">Purple</span>
              </div>
              <div className="row">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-purple-900"
                  >
                    <span className="color-white">900</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-purple-400"
                  >
                    <span>400</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-purple-800"
                  >
                    <span className="color-white">800</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-purple-300"
                  >
                    <span>300</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-purple-700"
                  >
                    <span className="color-white">700</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-purple-200"
                  >
                    <span>200</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-purple-600"
                  >
                    <span className="color-white">600</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-purple-100"
                  >
                    <span>100</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-purple-500"
                  >
                    <span className="color-white">500</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-purple-50"
                  >
                    <span>50</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 mt-3">
              <div style={titleColor}>
                <span className="body-text--lg bold-text">Pink</span>
              </div>
              <div className="row">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-pink-900"
                  >
                    <span className="color-white">900</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-pink-400"
                  >
                    <span>400</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-pink-800"
                  >
                    <span className="color-white">800</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-pink-300"
                  >
                    <span>300</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-pink-700"
                  >
                    <span className="color-white">700</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-pink-200"
                  >
                    <span>200</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-pink-600"
                  >
                    <span className="color-white">600</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-pink-100"
                  >
                    <span>100</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-pink-500"
                  >
                    <span className="color-white">500</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-pink-50"
                  >
                    <span>50</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 mt-3">
              <div style={titleColor}>
                <span className="body-text--lg bold-text">Orange</span>
              </div>
              <div className="row">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-orange-900"
                  >
                    <span className="color-white">900</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-orange-400"
                  >
                    <span>400</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-orange-800"
                  >
                    <span className="color-white">800</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-orange-300"
                  >
                    <span>300</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-orange-700"
                  >
                    <span className="color-white">700</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-orange-200"
                  >
                    <span>200</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-orange-600"
                  >
                    <span className="color-white">600</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-orange-100"
                  >
                    <span>100</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-orange-500"
                  >
                    <span className="color-white">500</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-orange-50"
                  >
                    <span>50</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 mt-3">
              <div style={titleColor}>
                <span className="body-text--lg bold-text">Amber</span>
              </div>
              <div className="row">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-amber-900"
                  >
                    <span className="color-white">900</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-amber-400"
                  >
                    <span>400</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-amber-800"
                  >
                    <span className="color-white">800</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-amber-300"
                  >
                    <span>300</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-amber-700"
                  >
                    <span className="color-white">700</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-amber-200"
                  >
                    <span>200</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-amber-600"
                  >
                    <span className="color-white">600</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-amber-100"
                  >
                    <span>100</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-amber-500"
                  >
                    <span className="color-white">500</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-amber-50"
                  >
                    <span>50</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 mt-3">
              <div style={titleColor}>
                <span className="body-text--lg bold-text">Brown</span>
              </div>
              <div className="row">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-brown-900"
                  >
                    <span className="color-white">900</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-brown-400"
                  >
                    <span>400</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-brown-800"
                  >
                    <span className="color-white">800</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-brown-300"
                  >
                    <span>300</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-brown-700"
                  >
                    <span className="color-white">700</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-brown-200"
                  >
                    <span>200</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-brown-600"
                  >
                    <span className="color-white">600</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-brown-100"
                  >
                    <span>100</span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="d-flex justify-content-center">
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-brown-500"
                  >
                    <span className="color-white">500</span>
                  </div>
                  <div
                    style={{ width: 568, height: 56 }}
                    className="d-flex justify-content-between bg-palette-brown-50"
                  >
                    <span>50</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default Color;
