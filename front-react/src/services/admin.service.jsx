import jwtDecode from 'jwt-decode'

export default class AuthService {
    login(body) {
        return fetch("http://localhost:3000/api/v1/admin/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
            .then(function (res) {
            //console.log(res);
            return res.json();
        })
    }
    logout(){
        return localStorage.clear();
    }
    getToken() {
        return localStorage.getItem('token');
    }
    getAdminToken(){
        return jwtDecode(this.getToken());
    }

    getGolfs(token){
        return fetch(`http://localhost:3000/api/v1/golfs`, {method: 'GET', headers:{
            token:token
        }})
        .then( (res) =>{
            return res.json();
        });
    } 
    createGolf(body, token){
        return fetch(`http://localhost:3000/api/v1/golf`, {
            method: 'POST', 
            headers:{
                'token':token,
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(body)
        })
        .then( (res) =>{
            return res.json();
        });
    }
    deleteGolf(id, token){
        return fetch(`http://localhost:3000/api/v1/golf/${id}`, {
            method: 'DELETE', 
            headers:{
                'token':token,
                'Content-Type': 'application/json'
            }
        })
        .then( (res) =>{
            return res.json();
        });
    }

     getGolf(id, token){
        return fetch(`http://localhost:3000/api/v1/golf/${id}`, {
            method: 'GET', 
            headers:{
                'token':token,
                'Content-Type': 'application/json'
            }
        })
        .then( (res) =>{
            return res.json();
        });
    } 

     updateGolf(id,body, token){
        return fetch(`http://localhost:3000/api/v1/golf/${id}`, {
            method: 'POST', 
            headers:{
                token:token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then( (res) =>{
            return res.json();
        });
    }

    getManagers(token){
        return fetch(`http://localhost:3000/api/v1/managers`, {method: 'GET', headers:{
            token:token
        }})
        .then( (res) =>{
            return res.json();
        });
    }
    getManager(id, token){
        return fetch(`http://localhost:3000/api/v1/manager/${id}`, 
            {method: 'GET', 
            headers:{
                token:token,
                'Content-Type': 'application/json'
            }
        }).then( (res) =>{
                return res.json();
        });
    }
    updateManager(id, body,token){
        console.log(body)
        return fetch(`http://localhost:3000/api/v1/manager/${id}`, {
            method: 'POST', 
            headers:{
                token:token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then( (res) =>{
            console.log(res);
            return res.json();
        });
    }               
    createManager(body, token){
        return fetch(`http://localhost:3000/api/v1/manager`, {
            method: 'POST', 
            headers:{
                token:token,
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(body)
        })
        .then( (res) =>{
            return res.json();
        });
    }
    deleteManager(id, token){
        return fetch(`http://localhost:3000/api/v1/manager/${id}`, {
            method: 'DELETE', 
            headers:{
                token:token,
                'Content-Type': 'application/json'
            }
        })
        .then( (res) =>{
            return res.json();
        });
    }                       
}