///////////////////////////////////////////////////////////////////////////////////////////////
// Core Value Details component
///////////////////////////////////////////////////////////////////////////////////////////////
import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';
import { TextField } from '@material-ui/core'
///////////////////////////////////////////////////////////////////////////////////////////////
// class DriveDetails
///////////////////////////////////////////////////////////////////////////////////////////////
export class DriveDetails extends React.Component {
    public render = () => {
        const cyan = '#006064'
        return (
            <div>
                <AppBar position="fixed" style={{ backgroundColor: cyan }}>
                    <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Link to='/DriveList' style={{ color: 'white' }}>
                            <Icon>
                                cancel
                    </Icon>
                        </Link>
                        <Typography variant="title" color="inherit">
                            Drive Details
                </Typography>
                        <Icon>
                            save
                </Icon>
                    </Toolbar>
                </AppBar>
                <div style={{ paddingTop: 60 }}>
                </div>
                <div>
                    <TextField
                        id="itemName"
                        label="Name"
                        value='New Drive'
                        margin="normal"
                        style={{ marginLeft: 10, marginRight: 10, width: "90%",}}
                    />
                    <TextField
                        id="itemPriority"
                        label="Priority"
                        value='50'
                        margin="normal"
                        style={{ marginLeft: 10, marginRight: 10, width: "5%",}}
                    />
                </div>
            </div>
        )
    }
}