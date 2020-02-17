import React from 'react';
import AuthService from '../services/admin.service'

export default class registerAdmin extends React.Component {
	constructor(){
		super();
		this.state = {
			name: "",
			surname: "",
            email: "",
            role: "",
            password:"",
            admin: false
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
        const token = this.Auth.getToken();
        this.Auth.createAdmin(this.state)
            .then(function(data){
                localStorage.setItem('token', data.token)
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
                            name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">
                            surname
                        </label>
                        <input
                            type="text"
                            name="surname"
                            value={this.state.surname}
                            onChange={this.handleChange}
                        />
                    </div>                    
                    <div className="form-group">
                        <label htmlFor="">
                            email
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
                            role
                        </label>
                        <input
                            type="text"
                            name="role"
                            value={this.state.role}
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
                        <label htmlFor="admin">
                            Admin
                        </label>
                        <input
                            type="checkbox"
                            id="admin"
                            name="Admin"
                            onChange={this.handleChange}
                        />
                    </div>                                                                                                  
                    <div className="form-group">
                        <input type="submit" value="create"/>
                    </div>
                </form>
			</div>
		);
	}
}
