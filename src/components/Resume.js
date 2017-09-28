import React from 'react'
import {Container, Image} from 'semantic-ui-react'

export default class Resume extends React.Component{

  render(){
    const imgUrl = require('../assets/images/resume.png')
    return(
      <Container>
        <Image src={imgUrl}/>
      </Container>
    )
  }
}
