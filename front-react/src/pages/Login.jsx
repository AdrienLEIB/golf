import React from 'react';
import LoginForm from '../components/LoginForm';

export default class Login extends React.Component {
	constructor(){
		super();
		this.state = {
			title:"Connnectez-Vous",
			subtitle: "Entre votre mot de passe et identifiant"
		}
	}
	render() {
		if (localStorage.getItem('token') === null) {
		return (
			<div>
				<h1>
					{this.state.title}
				</h1>
				<h2>
					{this.state.subtitle}
				</h2>
				<LoginForm/>
			</div>
		);
	}else{
		return(
			<div> 
			Vous etes connectés
			</div>
		)
	}
	}
}
