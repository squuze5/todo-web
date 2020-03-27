import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {
    signUp: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh'
    }
}

class RegistrationPage extends Component {
    render() {
        const { classes } = this.props;
        
        return (
            <div className={classes.signUp}>
                <h1>SignUp page</h1>
            </div>
        )
    }
}

export default withStyles(styles)(RegistrationPage);