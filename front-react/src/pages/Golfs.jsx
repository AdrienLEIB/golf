import React from 'react';
import AuthService from '../services/admin.service';

export default class Golfs extends React.Component {
	constructor(){
		super();
		this.state = {
			title: 'Golfs',
			golfs:[]
		}
		this.Auth = new AuthService();
		const token = this.Auth.getToken();
		
		this.Auth.getGolfs(token)
		.then(function(data){
			console.log(data)
			// return data
			//setState(this.state)
			//this.setState({golfs: data.response[0]})		
		});
		// console.log(golfs)
	}
	render() {
		return (
			<div>
				<h1> Golfs </h1>

				{this.state.golfs.map(product => (
						<div>
							{ product } 
						</div>
					))}

			</div>
		);
	}
}
