import React from 'react'
import {Container} from 'semantic-ui-react'
import YoutubeEmbedVideo from 'youtube-embed-video';

export default class Demos extends React.Component{
  render(){
    return(
      <Container>
        <YoutubeEmbedVideo size="medium" videoId="jxA8enww5kc" suggestions={false} />
        <YoutubeEmbedVideo size="medium" videoId="VnxUy7vZUtU" suggestions={false} />
      </Container>
    )
  }
}
