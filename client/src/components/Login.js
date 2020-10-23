import React, { Component } from 'react'
import { login } from './UserFunctions'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            user_name: '',
            password: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit (e) {
        e.preventDefault()

        const user = {
            user_name: this.state.user_name,
            password: this.state.password
        }

        login(user).then(res => {

                this.props.history.push(`/profile`)
            
        })
    }

    render () {
        return (
            <body className="bodyLogin">
            <div className="containerLogin">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Inicia Sesion</h1>
                            <div className="form-group">
                                <label htmlFor="user_name">Ingresa usuario</label>
                                <input type="text"
                                    className="form-control"
                                    name="user_name"
                                    placeholder="User"
                                    value={this.state.user_name}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Ingresa contraseña </label>
                                <input type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.onChange} />
                            </div>

                            <button type="submit" className="btn btn-lg btn-primary btn-block">
                                Iniciar Sesion
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            </body>
        )
    }
}

export default Login