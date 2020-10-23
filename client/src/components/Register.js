import React, { Component } from 'react'
import { register } from './UserFunctions'

class Register extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            user_name: '',
            password: '',
            grade: '',
            institution: ''
            
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit (e) {
        e.preventDefault()

        const newUser = {
            name: this.state.name,
            user_name: this.state.user_name,
            password: this.state.password,
            grade: this.state.grade,
            institution: this.state.institution
        }

        register(newUser).then(res => {
            this.props.history.push(`/login`)
        })
    }

    render () {
        return (
            <body className="bodyRegister">
            <div className="container1">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Registrate</h1>
                            <div className="form-group">
                                <label htmlFor="name">Nombre</label>
                                <input type="text"
                                    className="form-control"
                                    name="name"
                                    placeholder="Ingresa nombre"
                                    value={this.state.name}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="user_name">Nombre de usuario</label>
                                <input type="text"
                                    className="form-control"
                                    name="user_name"
                                    placeholder="Ingresa nombre de usuario"
                                    value={this.state.user_name}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Contraseña </label>
                                <input type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Ingresa contraseña"
                                    value={this.state.password}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="grade">Ingresa grado escolar</label>
                                <input type="text"
                                    className="form-control"
                                    name="grade"
                                    placeholder="Ingresa grado"
                                    value={this.state.grade}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="institution">Ingresa institucion</label>
                                <input type="text"
                                    className="form-control"
                                    name="institution"
                                    placeholder="Ingresa institucion"
                                    value={this.state.institution}
                                    onChange={this.onChange} />
                            </div>
                            

                            <button type="submit" className="btn btn-lg btn-primary btn-block">
                                Registrar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            </body>
        )
    }
}

export default Register