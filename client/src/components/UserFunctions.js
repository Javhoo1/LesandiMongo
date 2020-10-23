import axios from 'axios'

export const register = newUser => {
    return axios
        .post("users/register", {
            name: newUser.name,
            user_name: newUser.user_name,
            password: newUser.password,
            grade: newUser.grade,
            institution: newUser.institution
            
        })
        .then(response => {
            console.log("Registrado")
        })
}

export const login = user => {
    return axios
        .post("users/login", {
            user_name: user.user_name,
            password: user.password
        })
        .then(response => {
            localStorage.setItem('usertoken', response.data.token)
            return response.data.token
        })
        .catch(err => {
            console.log(err)
        })
}