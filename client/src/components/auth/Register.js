import React, { useState } from "react"
import PropTypes from "prop-types"
import axios from "axios"
import { connect } from "react-redux"
import { registerUser } from "../../actions/authActions"

function Register(props) {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [password2, setPassword2] = useState("")

	const [errors, setErrors] = useState({})
	const { user } = props.auth

	const onSubmit = (e) => {
		e.preventDefault()

		const newUser = {
			name,
			email,
			password,
			password2,
		}

		props.registerUser(newUser)

		// axios
		// 	.post("/api/users/register", newUser)
		// 	.then((res) => console.log(res.data))
		// 	.catch((err) => setErrors(err.response.data))
	}

	return (
		<div className="register">
			{user ? user.name : null}
			<div className="container">
				<div className="row">
					<div className="col-md-8 m-auto">
						<h1 className="display-4 text-center">Sign Up</h1>
						<p className="lead text-center">
							Create your DevConnector account
						</p>
						<form noValidate onSubmit={onSubmit}>
							<div className="form-group mb-2">
								<input
									type="text"
									className={`form-control form-control-lg ${
										errors.name && "is-invalid"
									}`}
									placeholder="Name"
									name="name"
									value={name}
									onChange={({ target }) =>
										setName(target.value)
									}
								/>
								{errors.name && (
									<div className="invalid-feedback">
										{errors.name}
									</div>
								)}
							</div>
							<div className="form-group mb-2">
								<input
									type="email"
									className={`form-control form-control-lg ${
										errors.email && "is-invalid"
									}`}
									placeholder="Email Address"
									name="email"
									onChange={({ target }) =>
										setEmail(target.value)
									}
									value={email}
								/>
								{errors.email && (
									<div className="invalid-feedback">
										{errors.email}
									</div>
								)}
								<small className="form-text text-muted">
									This site uses Gravatar so if you want a
									profile image, use a Gravatar email
								</small>
							</div>
							<div className="form-group mb-2">
								<input
									type="password"
									className={`form-control form-control-lg ${
										errors.password && "is-invalid"
									}`}
									placeholder="Password"
									name="password"
									value={password}
									onChange={({ target }) =>
										setPassword(target.value)
									}
								/>
								{errors.password && (
									<div className="invalid-feedback">
										{errors.password}
									</div>
								)}
							</div>
							<div className="form-group ">
								<input
									type="password"
									className={`form-control form-control-lg ${
										errors.password2 && "is-invalid"
									}`}
									placeholder="Confirm Password"
									name="password2"
									value={password2}
									onChange={({ target }) =>
										setPassword2(target.value)
									}
								/>
								{errors.password2 && (
									<div className="invalid-feedback">
										{errors.password2}
									</div>
								)}
							</div>
							<input
								type="submit"
								className="btn btn-info btn-block mt-4"
							/>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

Register.propTypes = {
	registerUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
}

const mapStateProps = (state) => ({
	auth: state.auth,
})

export default connect(mapStateProps, { registerUser })(Register)
