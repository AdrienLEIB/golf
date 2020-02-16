import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import Golfs from './pages/Golfs'
import Golf from './pages/createGolf'
export default class Routes extends React.Component {
	render() {
		return (
			<div> 
					<Route exact path='/' component={Login}/>
					<Route exact path='/golfs' component={Golfs}/>
					<Route exact path='/golf' component={Golf}/>
			</div>
		);
	}
}
