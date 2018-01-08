import React from 'react'
import {compose} from 'recompose'
import {graphql} from 'react-apollo'

import {Card, Button} from 'semantic-ui-react'
import GuestList from './GuestsList'

import GET_ALL_GUESTS from '../../../graphQuery/getAllGuests'

// Standard HOC guards
import LoadingSpinner from '../../standards/LoadingSpinner'
import ErrorComp from '../../standards/ErrorComp'
import renderWhileLoading from '../../enhancers/renderWhileLoading'
import renderWhenFetchError from '../../enhancers/renderWhenFetchError'

const CheckListPresenze = (props) => (
  <Card>
    <Card.Content header={props.header} />
    <Card.Content>
      {GuestList(props.data.allGuests)}
    </Card.Content>
    <Card.Content extra >
      <Button.Group>
        <Button>Cancel</Button>
        <Button.Or />
        <Button positive>Save</Button>
      </Button.Group>
    </Card.Content>
  </Card>
)

export default compose(
  graphql(GET_ALL_GUESTS),
  renderWhileLoading(LoadingSpinner),
  renderWhenFetchError(ErrorComp)
)(CheckListPresenze)