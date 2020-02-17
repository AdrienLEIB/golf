import React from 'react';
import AuthService from '../services/admin.service'

export default class updateManager extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			name: "",
			surname: "",
            email: "",
            telephone: "",
            golf_id: ""
		};
		this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.Auth = new AuthService();
        const token = this.Auth.getToken();
        var self = this;
        this.Auth.getManager(props.match.params.id, token)
        .then(function(data){
            console.log(data)
            self.setState({name:data.name})
            self.setState({surname:data.surname})
            self.setState({email:data.email})
            self.setState({telephone:data.telephone})
            self.setState({golf_id:data.golf_id})

            return data     
        });        
        


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
        const id = this.props.match.params.id;
        // console.log(this.state._id)
        this.Auth.updateManager(id, this.state, token)
            .then(function(data){
                console.log(data)
                window.location.reload();
            }).catch(function(err){
                console.log(err)
            });
        // window.location.reload();
    }
	render() {
		return (
			<div>
                <h1> {this.state._id} </h1>
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
                        <label htmlFor="">
                            golf_id
                        </label>
                        <input
                            disabled
                            type="text"
                            name="golf_id"
                            value={this.state.golf_id}
                            onChange={this.handleChange}
                        />
                    </div>                                                                                 
                    <div className="form-group">
                        <input type="submit" value="update"/>
                    </div>
                </form>
			</div>
		);
	}
}
