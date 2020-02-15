import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
export default class Routes extends React.Component {
	render() {
		return (
			<div> 
					<Route exact path='/' component={Login}/>
			</div>
		);
	}
}
