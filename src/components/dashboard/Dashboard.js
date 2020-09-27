import React from "react";
import Nav from "./Nav"
import { Layout } from "antd";
import ListandAdd from "./ListandAdd"
import "../../styles/Dashboard.css";
const { Content } = Layout;



const Dashboard = () => {
  return (

    <Layout style={{ minHeight: "100vh" }}>
      <Nav />
      <Content
        style={{ margin: "24px", background: "white", padding: "16px 24px" }}
      >
        <ListandAdd />
      </Content>
    </Layout>
  );

}
export default Dashboard;