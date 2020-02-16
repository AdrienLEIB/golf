import React from 'react';
import AuthService from '../services/admin.service'

export default class LoginForm extends React.Component {
	constructor(){
		super();
		this.state = {
			title: "",
			latitude: "",
            longitude: "",
            description: "", 
            manager_id: "",
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
        this.Auth.createGolf(this.state, token)
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
                            title
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={this.state.title}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">
                            latitude
                        </label>
                        <input
                            type="number"
                            name="latitude"
                            value={this.state.latitude}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">
                            longitude
                        </label>
                        <input
                            type="number"
                            name="longitude"
                            value={this.state.longitude}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">
                            description
                        </label>
                        <input
                            type="text"
                            name="description"
                            value={this.state.description}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">
                            manager_id
                        </label>
                        <input
                            type="text"
                            name="manager_id"
                            value={this.state.manager_id}
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
