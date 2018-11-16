///////////////////////////////////////////////////////////////////////////////////////////////
// Signup module
///////////////////////////////////////////////////////////////////////////////////////////////
import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon';
import {MpgGraph} from '../MpgGraph'
///////////////////////////////////////////////////////////////////////////////////////////////
// define interfaces for state and props
///////////////////////////////////////////////////////////////////////////////////////////////
interface ISignupProps {
  graph: MpgGraph
}
interface ISignupState {
} 
///////////////////////////////////////////////////////////////////////////////////////////////
// Signup component class
///////////////////////////////////////////////////////////////////////////////////////////////
export class Signup extends React.Component<ISignupProps, ISignupState> {
  constructor (props: ISignupProps){
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
              cancel
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
        <Typography variant="body1" color="inherit" style={{textAlign:'center', margin: 5}}>
            <p>SIGNUP CONTNET - TO BE COMPLETED</p>
          </Typography>
        </div>
      </div>
    )
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////
  // event handlers
  ///////////////////////////////////////////////////////////////////////////////////////////////
}
