///////////////////////////////////////////////////////////////////////////////////////////////
// MpgApp module
///////////////////////////////////////////////////////////////////////////////////////////////
import * as React from 'react';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import { Home } from './Components/Home'
import {Landing} from './Components/Landing'
import Signin from './Components/Signin'
import {Signup} from './Components/Signup'
import { DriveList } from './Components/DriveList'
import { ActionList } from './Components/ActionList'
import { DriveDetails } from './Components/DriveDetails'
import { MpgGraph } from './MpgGraph'
import Menu from './Components/Menu'
///////////////////////////////////////////////////////////////////////////////////////////////
// Interfaces for porops and state
///////////////////////////////////////////////////////////////////////////////////////////////
interface IMpgAppProps { }
interface IMpgAppState {
  graph: MpgGraph,
  userAuthenticated: boolean
}
///////////////////////////////////////////////////////////////////////////////////////////////
// MpgApp class
///////////////////////////////////////////////////////////////////////////////////////////////
export default class MpgApp extends React.Component<IMpgAppProps, IMpgAppState> {
  constructor(props: IMpgAppProps) {
    super(props)
    this.state = {
      graph: new MpgGraph(),
      userAuthenticated: false
    }
  }
  public render() {
    console.log('UserAuthenticated:',this.state.userAuthenticated);
    return (
      <div>
        <Router>
          <div>
            <Route path="/Home" render={(props) => <Home {...props} graph={this.state.graph} />} />
            <Route path="/Landing" component={Landing} />
            <Route path="/DriveList" component={DriveList} />
            <Route path="/ActionList" component={ActionList} />
            <Route path="/DriveDetails" component={DriveDetails} />
            <Route path="/Signin" render={(props) => <Signin {...props} graph={this.state.graph} 
              setUserAuthenticated={this.setUserAuthenticated} />}/>
            <Route path="/Signup" component={Signup}/>
            <Route path="/Menu" render={(props) => <Menu {...props} graph={this.state.graph}
              setUserAuthenticated={this.setUserAuthenticated} />}/>
            <Route
              exact path="/"
                render={() =>
                this.state.userAuthenticated ? (
                <Redirect to="/Home" />
                ) : (
                <Redirect to="/Landing" />
                )
                }
              />
          </div>
        </Router>
      </div>
    )
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////
  // set user authenticated
  ///////////////////////////////////////////////////////////////////////////////////////////////
  setUserAuthenticated = (status: boolean) => {
    this.setState({userAuthenticated: status})
  }
}