import axios from 'axios'

class AuthenticationService {

    executeBasicAuthenticationService(username, password) {
        return axios.get('http://localhost:8080/todo/basicauth',
            { headers: { authorization: this.createBasicAuthToken(username, password) } })
    }

    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password)
    }

     registerSuccessfulLogin(username, password) {
     	let basicAuthHeader = 'Basic ' +  window.btoa(username + ":" + password)
        console.log('registerSuccessfulLogin')
       sessionStorage.setItem(password, username)
        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password))
    }

    setupAxiosInterceptors(token) {
        axios.interceptors.request.use(
            (config) => {
                    config.headers.authorization = token
                return config
            }
        )
    }
}
export default new AuthenticationService()