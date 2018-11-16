///////////////////////////////////////////////////////////////////////////////////////////////
// Core Value List component
///////////////////////////////////////////////////////////////////////////////////////////////
import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';
///////////////////////////////////////////////////////////////////////////////////////////////
// class DriveList
///////////////////////////////////////////////////////////////////////////////////////////////
export class DriveList extends React.Component {
    public render = () => {
        const cyan = '#006064'
        return (
            <div>
                <AppBar position="fixed" style={{ backgroundColor: cyan }}>
                    <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Link to='/home' style={{ color: 'white' }}>
                            <Icon>
                                home
                    </Icon>
                        </Link>
                        <Typography variant="title" color="inherit">
                            My Drives
                </Typography>
                        <Link to='/DriveDetails' style={{ color: 'white' }}>
                            <Icon>
                                add_circle
                    </Icon>
                        </Link>
                    </Toolbar>
                </AppBar>
                <div style={{ paddingTop: 60 }}>
                </div>
            </div>
        )
    }
}