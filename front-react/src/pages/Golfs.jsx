import React from 'react';
import AuthService from '../services/admin.service';
import { Link } from 'react-router-dom';
export default class Golfs extends React.Component {
	constructor(){
		super();
		this.state = {
			title: 'Golfs',
			golfs:[]
		}
		this.Auth = new AuthService();
		const token = this.Auth.getToken();
		var self = this;
		this.Auth.getGolfs(token)
		.then(function(data){
			console.log(data)
			self.setState({golfs: data})		
		});

        this.delete = this.delete.bind(this);
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
				<h1> Golfs </h1>

				{this.state.golfs.map(golf => (
						<div>
							<ul class="golfs">
								<li>{ golf._id } 
								</li>

								<li>{ golf.title } 
								</li>
								<li>{ golf.longitude } 
								</li>
								<li>{ golf.latitude } 
								</li>
								<li>{ golf.description } 
								</li>
								<li>{ golf.manager_id } 
								</li>
								<li>	<button onClick={(e) => this.delete(golf._id)}> x </button> </li>
								<li> <Link to={"/golf/"+golf._id}>Modifier</Link> </li>
																																										
							</ul>
						</div>
					))}

			</div>
		);
	}
}
