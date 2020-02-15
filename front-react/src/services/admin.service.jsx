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
            console.log(res);
            return res.json();
        })
    }
    getToken() {
        return localStorage.getItem('token');
    }
    getUserProfil(){
        return jwtDecode(this.getToken());
    }
    // getuserDetail(id){
    //     fetch(`http://localhost:3000/api/v1/users/${id}`)
    //         .then( (res) =>{
    //             return res.json();
    //         })
    // }    
}