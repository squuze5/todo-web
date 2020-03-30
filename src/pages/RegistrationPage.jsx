import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

// Material UI componnents
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

// Redux
import { connect } from 'react-redux';
import { signupUser } from '../redux/actions/userAction';

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

class RegistrationPage extends Component {

    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            confirmPassword:'',
            handle: '',
            errors: {}
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.UI.errors) {
            this.setState({ errors: nextProps.UI.errors });
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({ loading: true });
        const newUserData = {
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
            handle: this.state.handle
        }

        this.props.signupUser(newUserData, this.props.history);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        const { classes, UI: { loading } } = this.props;
        const { errors } = this.state; 

        return (
            <div className={classes.login}>
                <div className="header-login">
                    <h3>Registration!</h3>
                    <span>Create your own account for your own board</span>
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
                            id="handle"
                            name="handle"
                            type="text"
                            label="Username"
                            className={classes.handle}
                            helperText={errors.handle}
                            error={errors.handle ? true : false}
                            value={this.state.handle}
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
                        <TextField 
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            label="Confirm Password"
                            className={classes.textField}
                            helperText={errors.confirmPassword}
                            error={errors.confirmPassword ? true : false}
                            value={this.state.confirmPassword}
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
                            Signup
                            {loading && (
                                <CircularProgress  
                                    className={classes.progress} 
                                />
                            )}
                        </Button>
                        <br />
                        <small className={classes.signUp}>
                            do you have account?  
                            <Link to="/login"> login</Link>
                        </small>
                    </form>
                </div>
            </div>
        )
    }
}

RegistrationPage.propTypes = {
    classes: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired,
    signupUser: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    user: state.user,
    UI: state.UI
});

export default connect(mapStateToProps, { signupUser })(withStyles(styles)(RegistrationPage));