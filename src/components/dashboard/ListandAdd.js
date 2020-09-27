import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Typography, Col, PageHeader } from "antd";
import ViewScreen from "./ViewScreen"

const Heading = Typography.Title;



class Table extends Component {
  render() {
    const routes = [{ path: "/home", breadcrumbName: "Home" }];
    const itemRender = route => (
      <Link to={route.path}>{route.breadcrumbName}</Link>
    );
    return (
      <div>
        <Col span={14}>
          <PageHeader breadcrumb={{ itemRender, routes }}>
            <Heading level={2}>Workspaces</Heading>
          </PageHeader>
        </Col>
        <ViewScreen />
        <div style={{ textAlign: "center", marginTop: "10%" }}>
          <img
            alt=""
            src={require("../../images/logo.svg")}
            style={{ width: "200px" }}
          />
        </div>
      </div>
    );
  }
}

export default Table;
