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
}