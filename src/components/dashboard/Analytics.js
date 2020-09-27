import React from "react";
import Nav from "./Nav"
import { Layout } from "antd";
import "../../styles/Dashboard.css";
const { Content } = Layout;


const Analytics = () => {
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Nav />
            <Content
                style={{ margin: "24px", background: "white", padding: "16px 24px" }}
            >
            </Content>
        </Layout>
    );
}


export default Analytics;