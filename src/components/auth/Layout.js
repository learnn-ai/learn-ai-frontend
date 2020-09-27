import React, { Component } from "react";
import { Form, Header } from "semantic-ui-react";
import "../../styles/auth.css";
import logo from "../../images/logo.svg";

class Layout extends Component {
	render() {
		return (
			<div className="auth-main">
				<div class="auth-content">
					<div className="auth-card">
						<h1>learn.ai</h1>
						<img src={logo} alt="Logo" className="auth-logo" />
						<Header as="h2" color="black" textAlign="center">
							{this.props.header}
						</Header>
						<Form.Group size="large" className="auth-form" autocomplete="off">
							{this.props.children}
						</Form.Group>
					</div>
				</div>
			</div>
		);
	}
}

export default Layout