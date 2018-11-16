///////////////////////////////////////////////////////////////////////////////////////////////
// Landing module
///////////////////////////////////////////////////////////////////////////////////////////////
import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon';
import {MpgGraph} from '../MpgGraph'
import { Link } from 'react-router-dom';
///////////////////////////////////////////////////////////////////////////////////////////////
// define interfaces for state and props
///////////////////////////////////////////////////////////////////////////////////////////////
interface ILandingProps {
  graph: MpgGraph
}
interface ILandingState {
}
///////////////////////////////////////////////////////////////////////////////////////////////
// Home component class
///////////////////////////////////////////////////////////////////////////////////////////////
export class Landing extends React.Component<ILandingProps, ILandingState> {
  constructor (props: ILandingProps){
    super(props)
    this.state = {
      graph: new MpgGraph()
    }
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////
  // render 
  ///////////////////////////////////////////////////////////////////////////////////////////////
  public render = () => {
    const cyan = '#006064'
    return (
      <div>
        <AppBar position="fixed" style={{ backgroundColor: cyan }}>
          <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Icon>
              vpn_key
          </Icon>
            <Typography variant="title" color="inherit">
              My Personal Graph
          </Typography>
            <Icon>
              info
          </Icon>
          </Toolbar>
        </AppBar>
        <div style={{ paddingTop: 59 }}>
        </div>
        <div>
        <Typography variant="h6" color="inherit" style={{textAlign:'center', margin: 5}}>
            If you have a user id, please  
                <Link to={'Signin'}> sign in </Link>
            Or, if you don't have a user id,
            Please 
            <Link to={'Signup'}> sign up </Link>
                 to create one.
          </Typography>
        </div>
      </div>
    )
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////
  // event handlers
  ///////////////////////////////////////////////////////////////////////////////////////////////
}
