import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

// Material UI componnents
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

class Navbar extends Component {
    render() {
        return (
            <div>
                <AppBar color="secondary" className="navigation">
                    <Toolbar>
                        <Button color="inherit" component={Link} to="/login">Login</Button>
                        <Button color="inherit" component={Link} to="/signup">SignUp</Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default Navbar;
