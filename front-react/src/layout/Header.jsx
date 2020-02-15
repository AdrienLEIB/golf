import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ImgUser from "../assets/2.jpg"

export default class Header extends Component {
    render() {
        return (
            <header class="header-user-dropdown">


			<div class="header-limiter">
				<h1> <Link to='/'> <span>Golf </span></Link></h1>

				<nav>
					<Link to='/'>Liste des golfs</Link>
					<Link to='/'>Ajouter un golf</Link>
					<Link to='/'>Liste des managers</Link>
					<Link to='/'>Ajouter un manager</Link>
				</nav>


				<div class="header-user-menu">
					<img src={ImgUser} alt="Img"/>

					<ul>
						<li><Link to='/'>Login</Link></li>
						<li><Link to='/'class="highlight">Logout</Link></li>
					</ul>
				</div>

			</div>               
            </header>

        )
    }
}