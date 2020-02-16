import React from 'react';
import AuthService from '../services/admin.service'

export default class updateGolf extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			title: "",
			latitude: "",
            longitude: "",
            description: "",
            manager_id: ""
		};

        this.Auth = new AuthService();
        const token = this.Auth.getToken();
        var self = this;
        this.Auth.getGolf(props.match.params.id, token)
        .then(function(data){
            console.log(data)
            self.setState({title:data.title})
            self.setState({latitude:data.latitude})
            self.setState({longitude:data.longitude})
            self.setState({description:data.description})
            self.setState({manager_id:data.manager_id})

            return data     
        });        
        
        // console.log(this.state)

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

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
        this.Auth.updateGolf(id, this.state, token)
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
                            telephone
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
                        <input type="submit" value="update"/>
                    </div>
                </form>
			</div>
		);
	}
}
