///////////////////////////////////////////////////////////////////////////////////////////////
// Action List component
///////////////////////////////////////////////////////////////////////////////////////////////
import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';
///////////////////////////////////////////////////////////////////////////////////////////////
// class ActionList
///////////////////////////////////////////////////////////////////////////////////////////////
export class ActionList extends React.Component {
    public render = () => {
        const cyan = '#006064'
        return (
            <div>
                <AppBar position="fixed" style={{ backgroundColor: cyan }}>
                    <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Link to='/' style={{ color: 'white' }}>
                            <Icon>
                                home
                    </Icon>
                        </Link>
                        <Typography variant="title" color="inherit">
                            My Actions
                </Typography>
                        <Icon>
                            add_circle
                </Icon>
                    </Toolbar>
                </AppBar>
                <div style={{ paddingTop: 60 }}>
                </div>
            </div>
        )
    }
}