///////////////////////////////////////////////////////////////////////////////////////////////
// Home component
///////////////////////////////////////////////////////////////////////////////////////////////
import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon';
import { Card, CardContent, CardActionArea } from '@material-ui/core'
import { Link } from 'react-router-dom'
import {MpgGraph} from '../MpgGraph'
///////////////////////////////////////////////////////////////////////////////////////////////
// define interfaces for state and props
///////////////////////////////////////////////////////////////////////////////////////////////
interface IHomeProps {
  graph: MpgGraph
}
interface IHomeState {
  graph: MpgGraph
}
///////////////////////////////////////////////////////////////////////////////////////////////
// Home component class
///////////////////////////////////////////////////////////////////////////////////////////////
export class Home extends React.Component<IHomeProps, IHomeState> {
  constructor (props: IHomeProps){
    super(props)
    this.state = {
      graph: props.graph
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
    const cardWidth = 160
    return (
      <div>
        <AppBar position="fixed" style={{ backgroundColor: cyan }}>
          <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link to='/Menu' style={{ color: 'white' }}>
            <Icon>menu</Icon>
          </Link>
            <Typography variant="title" color="inherit">
             My Personal Graph
          </Typography>
            <Icon>
              search
          </Icon>
          </Toolbar>
        </AppBar>
        <div style={{ paddingTop: 59 }}>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', padding: 10, flexWrap: 'wrap' }}>
          {homeCards.map((card) => (<Card key={card.key} style={{ maxWidth: cardWidth, minWidth: cardWidth, margin: 5 }}>
            <Link to={card.link} style={{ textDecoration: 'none' }}>
              <CardActionArea>
                <CardContent>
                  <Icon style={{ color: cyan }}>
                    {card.icon}
                  </Icon>
                  <Typography variant="h6" style={{ color: cyan }}>
                    {card.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>))}
        </div>
      </div>
    )
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////
  // event handlers
  ///////////////////////////////////////////////////////////////////////////////////////////////
}
