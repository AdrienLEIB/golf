import React from 'react';
import registerForm from '../components/registerForm'

export default class Register extends React.Component {
	constructor(){
		super();
		this.state = {
			title:"Inscrivez-Vous"
		}
	}
	render() {
		return (
			<div>
				<h1>
					{this.state.title}
				</h1>
				<registerForm/>
			</div>
		);
	}
}
