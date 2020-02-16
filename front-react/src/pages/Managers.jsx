import React from 'react';
import AuthService from '../services/admin.service';
import { Link } from 'react-router-dom';

export default class Managers extends React.Component {
	constructor(){
		super();
		this.state = {
			title: 'Managers',
			managers:[]
		}
		this.Auth = new AuthService();
		const token = this.Auth.getToken();
		var self = this;
		this.Auth.getManagers(token)
		.then(function(data){
			console.log(data)
			self.setState({managers:data})
			return data		
		});

		// this.setState({golfs: toto})	
		// console.log(golfs)
	}
    delete(id){
    	const token = this.Auth.getToken()
		this.Auth.deleteGolf(id, token);
		window.location.reload();
    }	
	render() {
		return (
			<div>
				<h1> Managers </h1>

				{this.state.managers.map(manager => (
						<div>
							<ul class="golfs">
								<li> { manager._id } </li>
								<li> {manager.name} </li>
								<li> {manager.surname} </li>
								<li> {manager.email} </li>
								<li> {manager.telephone} </li>
								<li> {manager.golf_id} </li>
								<li>	<button onClick={(e) => this.delete(manager._id)}> x </button> </li>
								<li> <Link to={"/manager/"+manager._id}>Modifier</Link> </li>
							</ul>
						</div>						
					))}

			</div>
		);
	}
}
