import React from 'react'
import {Header ,Icon, Segment} from 'semantic-ui-react'

const ErrorComp = () => (
  <Segment inverted color='red'>
    <Header as='h2'>
    <Icon bordered inverted size='huge' color='red' name='alarm outline'/>
      <Header.Content>
        An error occurred while loading...
        <Header.Subheader>
          Please refresh the page
        </Header.Subheader>
      </Header.Content>
    </Header>
  </Segment>
)

export default ErrorComp