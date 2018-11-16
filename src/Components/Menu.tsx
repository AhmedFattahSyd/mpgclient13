///////////////////////////////////////////////////////////////////////////////////////////////
// Menu component
///////////////////////////////////////////////////////////////////////////////////////////////
import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import { MpgGraph } from '../MpgGraph'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { Lock } from '@material-ui/icons'
import Amplify, { Auth } from 'aws-amplify';
import { withRouter } from 'react-router'
import { RouteComponentProps } from "react-router";
///////////////////////////////////////////////////////////////////////////////////////////////
// define interfaces for state and props
///////////////////////////////////////////////////////////////////////////////////////////////
interface IMenuProps extends RouteComponentProps {
    graph: MpgGraph,
    setUserAuthenticated: Function
}
interface IMenuState {
    graph: MpgGraph,
}
///////////////////////////////////////////////////////////////////////////////////////////////
// Menu component class
///////////////////////////////////////////////////////////////////////////////////////////////
class MenuBase extends React.Component<IMenuProps, IMenuState> {
    constructor(props: IMenuProps) {
        super(props)
        this.state = {
            graph: props.graph,
        }
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////
    // render 
    ///////////////////////////////////////////////////////////////////////////////////////////////
    public render = () => {
        const cyan = '#006064'
        interface ICard {
            key: number
            name: string
            icon: string
            link: string
        }
        const DriveCard: ICard = { key: 1, name: 'Drives', icon: 'navigation', link: 'DriveList' }
        const actionsCard: ICard = { key: 2, name: 'Actions', icon: 'my_location', link: 'ActionList' }
        const homeCards: ICard[] = []
        homeCards.push(DriveCard)
        homeCards.push(actionsCard)
        return (
            <div>
                <AppBar position="fixed" style={{ backgroundColor: cyan }}>
                    <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Icon>
                            home
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
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <List component="nav">
                        <ListItem button onClick={this.handleLogoff}>
                            <ListItemIcon style={{ color: cyan }}>
                                <Lock />
                            </ListItemIcon>
                            <ListItemText style={{ color: cyan }} primary="Logoff" />
                        </ListItem>
                    </List>
                </div>
            </div>
        )
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////
    // event handlers
    ///////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////
    // handle logoff
    ///////////////////////////////////////////////////////////////////////////////////////////////
    handleLogoff = () => {
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
        Auth.signOut()
            .then(data => this.handleLogoutSuccessful())
            .catch(err => console.log('Logout error. error:', err));
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////
    // handle logout successful
    ///////////////////////////////////////////////////////////////////////////////////////////////
    handleLogoutSuccessful = () => {
        console.log("Signout successful. Navigating to home");
        this.state.graph.setUserName('Not signed in')
        this.state.graph.setUserAuthenticated(false)
        this.props.graph.setUserAuthenticated(false)
        this.props.setUserAuthenticated(false)
        this.props.history.push('/Landing')
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////
// export component withRouter
///////////////////////////////////////////////////////////////////////////////////////////////
const Menu = withRouter(MenuBase)
export default Menu
