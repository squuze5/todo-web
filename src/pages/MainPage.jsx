import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

// Material UI componnents & Icons
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh'
    }
}

class MainPage extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.main}>
                <div className="main-content">
                    <span>Your projects</span>
                    <h3>Welcome back, Nikolas</h3>
                    <p>Select the project you want to work on or create a new one.</p>
                </div>

                <div className="projects-list">
                    
                    <div className="project">
                        <Button className="btn-project">
                            N
                        </Button>
                        <p>Name project</p>
                    </div>

                    <div className="project">
                        <Button className="btn-project">
                            N
                        </Button>
                        <p>Name project</p>
                    </div>

                    <div className="btn-add">
                        <Button className="add-project">
                            <AddIcon />
                        </Button>
                        <p>Add project</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(MainPage);