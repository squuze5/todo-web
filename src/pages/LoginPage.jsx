import React, { Component } from 'react';
import axios from 'axios';
import Link from 'react-router-dom/Link';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

// Material UI componnents
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
    login: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column"
    },
    textField: {
        margin: "10px auto 10px auto"
    },
    buttonSubmit: {
        marginTop: "20px",
        position: "relative"
    },
    customError: {
        color: "#e20150",
        fontSize: "0.8rem"
    },
    signUp: {
        display: "flex",
        marginTop: "20px",
        justifyContent: "center"
    },
    progress: {
        position: "absolute"
    }
}
const urlAPI = "https://us-central1-todo-server-a7d16.cloudfunctions.net/api";

class LoginPage extends Component {

    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            loading: false,
            errors: {}
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({ loading: true });
        const userData = {
            email: this.state.email,
            password: this.state.password
        }

        axios.post(`${urlAPI}/login`, userData)
            .then(res => {
                console.log(res.data);
                this.setState({ loading: false });
                this.props.history.push('/');
            })
            .catch(err => {
                this.setState({ 
                    errors: err.response.data, 
                    loading: false 
                });
            });
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        const { classes} = this.props;
        const { errors, loading } = this.state; 

        return (
            <div className={classes.login}>
                <div className="header-login">
                    <h3>Wellcome!</h3>
                    <span>Sign in to your account</span>
                </div>
                <div className="body-login">
                    <form noValidate onSubmit={this.handleSubmit} >
                        <TextField 
                            id="email"
                            name="email"
                            type="email"
                            label="Email"
                            className={classes.textField}
                            helperText={errors.email}
                            error={errors.email ? true : false}
                            value={this.state.email}
                            onChange={this.handleChange}
                            fullWidth
                        />
                        <TextField 
                            id="password"
                            name="password"
                            type="password"
                            label="Password"
                            className={classes.textField}
                            helperText={errors.password}
                            error={errors.password ? true : false}
                            value={this.state.password}
                            onChange={this.handleChange}
                            fullWidth
                        />
                        {errors.error && (
                            <span className={classes.customError}>
                                {errors.error}
                            </span>
                        )}
                        <br />
                        <Button 
                            type="submit" 
                            variant="contained" 
                            color="secondary"
                            className={classes.buttonSubmit}
                            disabled={loading}
                        >
                            Login
                            {loading && (
                                <CircularProgress  
                                    className={classes.progress} 
                                />
                            )}
                        </Button>
                        <br />
                        <small className={classes.signUp}>
                            dont have account? 
                            <Link to="/signup">sign up</Link>
                        </small>
                    </form>
                </div>
            </div>
        )
    }
}

LoginPage.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(LoginPage);