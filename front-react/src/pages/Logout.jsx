import React from 'react';
import AuthService from '../services/admin.service';

export default class Login extends React.Component {
	constructor(){
		super();
		this.state = {
			title:"Vous etes Deconnecté"
		}
		this.Auth = new AuthService();
		this.Auth.logout();

	}
	render() {
		return (
			<div>
				<h1>
					{this.state.title}
				</h1>
			</div>
		);
	}
}
