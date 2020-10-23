import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            user_name: '',
            grade: ''
        }
    }

    componentDidMount () {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            name: decoded.identity.name,
            user_name: decoded.identity.user_name,
            grade: decoded.identity.grade
        })
    }

    render () {
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">PROFILE</h1>
                    </div>
                    <table className="table col-md-6 mx-auto">
                        <tbody>
                            <tr>
                                <td>Nombre</td>
                                <td>{this.state.name}</td>
                            </tr>
                            <tr>
                                <td>Nombre de usuario</td>
                                <td>{this.state.user_name}</td>
                            </tr>
                            <tr>
                                <td>Grado Escolar</td>
                                <td>{this.state.grade}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Profile