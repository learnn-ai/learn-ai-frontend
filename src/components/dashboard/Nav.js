import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { 
  HomeOutlined, 
  YoutubeOutlined, 
  UserOutlined, 
  LineChartOutlined,
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined, 
} from '@ant-design/icons';
import { Layout, Menu, Button } from 'antd';

const { SubMenu } = Menu;
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
    if (key === "home") {
      this.setState({ redirect: { awaiting: true, path: "/home" } });
    } else if (key === "workspace") {
      this.setState({ redirect: { awaiting: true, path: "/login" } }); //Change me to work
    } else if (key === "3") {
      this.setState({ redirect: { awaiting: true, path: "/analytics" } }); //Change me to work
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
        <Menu theme="dark" onSelect={this.onSelect} defaultSelectedKeys={['home']} mode="inline">
          <Menu.Item key="home" style={menuItemStyle}>
            <HomeOutlined style={this.state.iconStyle} />
            <span >Home</span>
          </Menu.Item>
          <Menu.Item key="workspace" style={menuItemStyle}>
            <YoutubeOutlined style={this.state.iconStyle} />
            <span>Workspace</span>
          </Menu.Item>
          <Menu.Item key="3" style={menuItemStyle}>
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

      // <div style={{ width: 256 }}>
      //   <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
      //     {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
      //   </Button>
      //   <Menu
      //     defaultSelectedKeys={['1']}
      //     defaultOpenKeys={['sub1']}
      //     mode="inline"
      //     theme="dark"
      //     inlineCollapsed={this.state.collapsed}
      //   >
      //     <Menu.Item key="1" icon={<PieChartOutlined />}>
      //       Option 1
      //     </Menu.Item>
      //     <Menu.Item key="2" icon={<DesktopOutlined />}>
      //       Option 2
      //     </Menu.Item>
      //     <Menu.Item key="3" icon={<ContainerOutlined />}>
      //       Option 3
      //     </Menu.Item>
      //     <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
      //       <Menu.Item key="5">Option 5</Menu.Item>
      //       <Menu.Item key="6">Option 6</Menu.Item>
      //       <Menu.Item key="7">Option 7</Menu.Item>
      //       <Menu.Item key="8">Option 8</Menu.Item>
      //     </SubMenu>
      //     <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
      //       <Menu.Item key="9">Option 9</Menu.Item>
      //       <Menu.Item key="10">Option 10</Menu.Item>
      //       <SubMenu key="sub3" title="Submenu">
      //         <Menu.Item key="11">Option 11</Menu.Item>
      //         <Menu.Item key="12">Option 12</Menu.Item>
      //       </SubMenu>
      //     </SubMenu>
      //   </Menu>
      // </div>
    );
  }
}

export default Nav;