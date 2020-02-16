import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import Logout from './pages/Logout'
import Golfs from './pages/Golfs'
import createGolf from './pages/createGolf'
import updateGolf from './pages/updateGolf'
import Managers from './pages/Managers'
import createManager from './pages/createManager'
import updateManager from './pages/updateManager'

export default class Routes extends React.Component {
	render() {
		return (
			<div> 
					<Route exact path='/' component={Login}/>
					<Route exact path='/golfs' component={Golfs}/>
					<Route exact path='/golf' component={createGolf}/>
					<Route exact path='/golf/:id' component={updateGolf}/>
					<Route exact path='/managers' component={Managers}/>
					<Route exact path='/manager' component={createManager}/>
					<Route exact path='/manager/:id' component={updateManager}/>
					<Route exact path='/logout' component={Logout}/>
			</div>
		);
	}
}
