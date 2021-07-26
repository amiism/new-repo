import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/main");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/main");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="just-forms">
        <div className='form-container'>
          <div className='form-content-left'>
            <img className='form-img' src='img/img-2.svg' alt='spaceship' />
          </div>
          <div className="form-content-right">
            <form noValidate className='form' onSubmit={this.onSubmit}>
              <h1>
                <b>Login</b> below
              </h1>
              <div className="form-inputs">
                <label className='form-label' htmlFor="email">NUS Email</label>
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("form-input", {
                    invalid: errors.email || errors.emailnotfound
                  })}
                />
                {errors.email && <p>{errors.email}</p>}
                {errors.emailnotfound && <p>{errors.emailnotfound}</p>}
              </div>
              <div className="form-inputs">
                <label className='form-label' htmlFor="password">Password</label>
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("form-input", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                />
                {errors.password && <p>{errors.password}</p>}
                {errors.passwordincorrect && <p>{errors.passwordincorrect}</p>}
              </div>
              <button
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem"
                }}
                type="submit"
                className="form-input-btn"
              >
                Login
              </button>
              <span className="form-input-login">
                Don't have an account? <Link to="/">Register</Link>
              </span>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);