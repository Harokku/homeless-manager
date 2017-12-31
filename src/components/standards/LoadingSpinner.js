import React from 'react'
import {Dimmer, Loader, Icon, Segment} from 'semantic-ui-react'

const LoadingSpinner = () => (
  <Segment>
    <Dimmer active>
      <Loader indeterminate>Loading your data...</Loader>
    </Dimmer>

    <Icon name='grid layout' size='huge'/>
  </Segment>
)

export default LoadingSpinner