import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { 
  HomeOutlined, 
  YoutubeOutlined,  
  LineChartOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';

const { Sider } = Layout;

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iconStyle: {
        fontSize: "30px",
        marginLeft: "-8px",
        marginTop: "5px"
      },
      collapsed: true,
      show3: false,
      redirect: { awaiting: false, path: this.props.path }
    };
    this.onCollapse = this.onCollapse.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.path !== this.props.path) {
      this.setState({ redirect: { awaiting: false, path: this.props.path } });
    }
  }


  onCollapse = collapsed => {
    if (collapsed) {
      this.setState({
        iconStyle: {
          ...this.state.iconStyle,
          marginLeft: "-8px",
          marginTop: "5px"
        },
        collapsed
      });
    } else {
      this.setState({
        iconStyle: {
          ...this.state.iconStyle,
          marginLeft: "3px",
          marginTop: "0px"
        },
        collapsed
      })
    }
    this.setState({ collapsed });
  };

  onSelect({ item, key }) {
    if (key === "/dashboard") {
      this.setState({ redirect: { awaiting: true, path: "/dashboard" } });
    } else if (key === "/workspace") {
      this.setState({ redirect: { awaiting: true, path: "/login" } }); //Change me to work
    } else if (key === "/analytics") {
      this.setState({ redirect: { awaiting: true, path: "/analytics" } });
    }
  };

  render() {
    const menuItemStyle = {
      display: "flex",
      alignItems: "center",
      height: "60px",
      marginTop: "0px"
    };

    if (this.state.redirect.awaiting) {
      return <Redirect to={this.state.redirect.path}></Redirect>;
    }

    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <div className="logo" />
        <Menu theme="dark" onSelect={this.onSelect} selectedKeys={[window.location.pathname]} defaultSelectedKeys={['home']} mode="inline">
          <Menu.Item key="/dashboard" style={menuItemStyle}>
            <HomeOutlined style={this.state.iconStyle} />
            <span >Home</span>
          </Menu.Item>
          <Menu.Item key="/workspace" style={menuItemStyle}>
            <YoutubeOutlined style={this.state.iconStyle} />
            <span>Workspace</span>
          </Menu.Item>
          <Menu.Item key="/analytics" style={menuItemStyle}>
            <LineChartOutlined style={this.state.iconStyle} />
            <span>Analytics</span>
          </Menu.Item>
        </Menu>
        <img
          alt=""
          className="nav-logo"
          src={require("../../images/logo.svg")}
        />
      </Sider>
    );
  }
}

export default Nav;