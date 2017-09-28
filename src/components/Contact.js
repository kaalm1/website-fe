import React from 'react'
import {Container, Form, Input, TextArea, Button, Message} from 'semantic-ui-react'

export default class Contact extends React.Component{
  state = {
    name: '',
    email: '',
    about: '',
    isMissing: false
  }

  onChange = (event) =>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onClick = () => {
    if (this.state.name !== '' && this.state.email !== '' && this.state.about !==''){
      let options = {
        method: 'post',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json'
        },
        body: JSON.stringify(this.state)
      }
      // fetch('https://vast-plains-31864.herokuapp.com/contact', options)
      fetch('http://localhost:3000/contact', options)
      this.setState({
        name: '',
        email: '',
        about: '',
        isMissing: false
      })
    } else {
      this.setState({
        isMissing: true
      })
    }
  }

  render(){
    console.log(this.state)
    return(
      <Container>
      {this.state.isMissing ?  <Message
           error
           content='Please fill out all input fields.'
         /> : null }
        <Form>
          <Form.Group widths='equal'>
            <Form.Field id='name' control={Input} label='Name' placeholder='Name' name='name' value={this.state.name} onChange={this.onChange} />
            <Form.Field id='email' control={Input} label='Email' placeholder='Email' name='email' value={this.state.email} onChange={this.onChange}/>
          </Form.Group>
          <Form.Field id='about' control={TextArea} label='About' placeholder='About' name='about' value={this.state.about} onChange={this.onChange}/>
          <Form.Field id='public' control={Button} content='Confirm' onClick={this.onClick}/>
        </Form>
      </Container>
    )
  }
}
