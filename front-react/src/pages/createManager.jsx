import React from 'react';
import ManagerForm from '../components/ManagerForm';

export default class Golf extends React.Component {
	constructor(){
		super();
		this.state = {
			title:"Ajoutez un Manager",
		}
	}
	render() {
		return (
			<div>
				<h1>
					{this.state.title}
				</h1>
				<ManagerForm/>
			</div>
		);
	}
}
