import React from 'react'
import {Card, Container, Image, Button, Divider} from 'semantic-ui-react'

class Projects extends React.Component{
  render(){
    return(
      <Container>
        <Card.Group>
          <Card>
            <Card.Content>
              <Image src='https://i.imgur.com/f0p7jGn.png' />
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Image src='https://media.giphy.com/media/xT9IgGvkBEbxH5DWne/giphy.gif' />
              <Divider hidden />
              <Card.Header>
                JSoulDates
              </Card.Header>
              <Card.Meta>
                Your SoulDate is but a Click Away!
              </Card.Meta>
              <Card.Description>
                A React-Native front-end, Rails & Node back-end dating app. Uses SocketIO and Node to facilitate chat between those that are dating as well as message notifications. Uses Facebook OAuth for additional security and an easier user experience. Uses Redux and Navigation to enable a streamless application process. Please contact me if you would like to request access.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green'>Find The One!</Button>
              </div>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Image  src='http://i.imgur.com/MubF8Tb.png' />
              <Divider hidden />
              <Card.Header>
                QSmart
              </Card.Header>
              <Card.Meta>
                Never stay online again!
              </Card.Meta>
              <Card.Description>
                A React front-end, Rails back-end queue management application, completed with David Tomczyk and Joe Teichman. Uses ActionCable to facilitate instant rendering of line, position in line, and total users in line information. Uses Twilio API to notify users by SMS when it is their turn. Note: SMS notifications currently require authorization. Please contact me if you would like to request access.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a href="https://qsmart-react.herokuapp.com/" target='_blank' rel="noopener noreferrer">
              <div className='ui two buttons'>
                <Button basic color='green'>Stop Waiting</Button>
              </div>
            </a>
            </Card.Content>
          </Card>
        </Card.Group>
      </Container>
    )
  }
}

export default Projects
