import React from 'react';
import AuthService from '../services/admin.service'

export default class ManagerForm extends React.Component {
	constructor(){
		super();
		this.state = {
			name: "",
			surname: "",
            email: "",
            telephone: ""
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
        this.Auth.createManager(this.state, token)
            .then(function(data){
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
                            telephone
                        </label>
                        <input
                            type="text"
                            name="telephone"
                            value={this.state.telephone}
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
