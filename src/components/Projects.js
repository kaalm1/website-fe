import React from 'react'
import {Card, Container, Image, Button, Divider} from 'semantic-ui-react'
const imgUrl = require('../assets/images/forje.png')

class Projects extends React.Component{

  render(){
    return(
      <Container>
        <Card.Group>
          {/* <Card>
            <Card.Content>
              <Image src='https://i.imgur.com/f0p7jGn.png' />
            </Card.Content>
          </Card> */}
          <Card>
            <Card.Content>
              <Image src={imgUrl} />
              <Divider hidden />
              <Card.Header>
                forJe
              </Card.Header>
              <Card.Meta>
                #1 dating app powered by A.I.!
              </Card.Meta>
              <Card.Description>
                The quality of the matches produced by ForJe’s advanced compatibility algorithms are simply unparalleled. That’s because this app is intelligently designed to support singles who are looking for something lasting and real. Meaningful connections and true love are at the heart of this innovative dating solution.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a href='https://play.google.com/store/apps/details?id=com.lovelabs.forje' target='_blank'>
              <div className='ui two buttons'>
                <Button basic color='green'>Find The One!</Button>
              </div>
              </a>
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
