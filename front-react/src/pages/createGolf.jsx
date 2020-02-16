import React from 'react';
import GolfForm from '../components/GolfForm';

export default class Golf extends React.Component {
	constructor(){
		super();
		this.state = {
			title:"Ajoutez un golf",
		}
	}
	render() {
		return (
			<div>
				<h1>
					{this.state.title}
				</h1>
				<GolfForm/>
			</div>
		);
	}
}
