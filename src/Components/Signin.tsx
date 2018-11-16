///////////////////////////////////////////////////////////////////////////////////////////////
// Signin module
///////////////////////////////////////////////////////////////////////////////////////////////
import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core'
import {Paper} from '@material-ui/core'
import Icon from '@material-ui/core/Icon';
import {MpgGraph} from '../MpgGraph'
import { TextField } from '@material-ui/core'
import Amplify, { Auth } from 'aws-amplify';
import {withRouter} from 'react-router'
import {RouteComponentProps} from "react-router";
import { CognitoUser } from 'amazon-cognito-identity-js';
///////////////////////////////////////////////////////////////////////////////////////////////
// define interfaces for state and props
///////////////////////////////////////////////////////////////////////////////////////////////
interface ISigninProps extends RouteComponentProps{
  graph: MpgGraph,
  setUserAuthenticated: Function
}
interface ISigninState {
    graph: MpgGraph,
    email: string,
    password: string,
    stateMsg: string
}
///////////////////////////////////////////////////////////////////////////////////////////////
// Signin component class
///////////////////////////////////////////////////////////////////////////////////////////////
class SigninBase extends React.Component<ISigninProps, ISigninState> {
  constructor (props: ISigninProps){
    super(props)
    this.state = {
      graph: props.graph,
      email: '',
      password: '',
      stateMsg: 'Please enter email and password'
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
        <div style={{ paddingTop: 59 }}/>
        <Paper style={{padding: '10px', margin:'10px'}} >
            <Typography variant="h6" style={{textAlign: 'center', color: cyan}}>
              Sign in
            </Typography>
            <div style={{margin: '10px'}}>
            <TextField
                id="userEmail"
                label="email"
                value={this.state.email}
                margin="normal"
                style={{ marginLeft: 5, marginRight: 10, width: "70%",}}
                onChange={this.handleEmailChange}
            />
            <TextField
                id="password"
                label="Password"
                value={this.state.password}
                margin="normal"
                type="password"
                style={{ marginLeft: 5, marginRight: 10, width: "50%",}}
                onChange={this.handlePasswordChange}
            />
            </div>
            <Button variant="contained" onClick={this.handleSignin} style={{margin: '15px', backgroundColor: cyan, color:'white'}}>
              Sign In
            </Button>
            <div>
            <Typography variant="body1" style={{textAlign: 'center', color: cyan}}>
              {this.state.stateMsg}
            </Typography>    
            </div>
            </Paper>
      </div>
    )
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////
  // event handlers
  ///////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////
  // handle email text change
  ///////////////////////////////////////////////////////////////////////////////////////////////
  handleEmailChange = (event: React.ChangeEvent ) =>{
    this.setState({email: (event.target as HTMLInputElement).value})
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////
  // handle password change
  ///////////////////////////////////////////////////////////////////////////////////////////////
  handlePasswordChange = (event: React.ChangeEvent ) =>{
    this.setState({password: (event.target as HTMLInputElement).value})
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////
  // handle sign in
  ///////////////////////////////////////////////////////////////////////////////////////////////
  handleSignin = () => {
    Amplify.configure({
        Auth: {
            // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
            identityPoolId: 'n/a', 
            // REQUIRED - Amazon Cognito Region
            region: 'ap-southeast-2',
            // OPTIONAL - Amazon Cognito Federated Identity Pool Region 
            // Required only if it's different from Amazon Cognito Region
            identityPoolRegion: 'ap-southeast-2',
            // OPTIONAL - Amazon Cognito User Pool ID
            userPoolId: 'ap-southeast-2_FwEEKBFL4',
            // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
            userPoolWebClientId: '6tfdcjimo3vjidie2oludop11u',
            // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
            mandatorySignIn: false,
            // OPTIONAL - Configuration for cookie storage
            cookieStorage: {
            // REQUIRED - Cookie domain (only required if cookieStorage is provided)
                domain: '.yourdomain.com',
            // OPTIONAL - Cookie path
                path: '/',
            // OPTIONAL - Cookie expiration in days
                expires: 365,
            // OPTIONAL - Cookie secure flag
                secure: true
            },
            // OPTIONAL - customized storage object
            storage: undefined,
            // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
            authenticationFlowType: 'USER_SRP_AUTH'
        }
    });
    Auth.signIn(this.state.email, this.state.password)
    .then((user: CognitoUser) => this.handleSigninSuccess(user))
    .catch((err: any) => this.handleSigninError(err))
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////
  // handle signin sucesss
  ///////////////////////////////////////////////////////////////////////////////////////////////
  handleSigninSuccess = (user: CognitoUser) => {
        console.log("Signin success. user:",user);
        this.state.graph.setUserAuthenticated(true)
        this.state.graph.setUserName(user.getUsername())
        this.props.setUserAuthenticated(false)
        this.props.history.push('/Home')
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////
  // handle signin error
  ///////////////////////////////////////////////////////////////////////////////////////////////
  handleSigninError = (err: any) => {
    console.log("Signin error. err:",err);
  }
}
///////////////////////////////////////////////////////////////////////////////////////////////
// wrap the component withRouter
///////////////////////////////////////////////////////////////////////////////////////////////
const Signin = withRouter(SigninBase)
export default Signin