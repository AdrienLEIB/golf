import React from 'react';
import AuthService from '../services/admin.service'

export default class LoginForm extends React.Component {
	constructor(){
		super();
		this.state = {
			email: "",
			password: ""
		};
		this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.Auth = new AuthService();
	}
	handleChange(event) {
		this.setState({
			[event.target.name] : event.target.value
		})
		// console.log(this.state);
	}
    handleSubmit(event){
        event.preventDefault();
        this.Auth.login(this.state)
            .then(function(data){
                localStorage.setItem('token', data.token);
                window.location.reload();
                console.log(data)
            }).catch(function(err){
                console.log(err)
            });
    }
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="connexion"/>
                    </div>
                </form>
			</div>
		);
	}
}
