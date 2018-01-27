import React from 'react'
import {compose, withState, withHandlers} from 'recompose'
import {graphql} from 'react-apollo'

import {Card, Button} from 'semantic-ui-react'
import GuestList from './GuestsList'

// Graph Queries
import GET_ALL_GUESTS from '../../../graphQuery/getAllGuests'
import {POST_PRESENCES} from '../../../graphQuery/postPresences'
import ENDPOINT_TEST_QUERY from '../../../graphQuery/testQuery'

// Standard HOC guards
import LoadingSpinner from '../../standards/LoadingSpinner'
import ErrorComp from '../../standards/ErrorComp'
import renderWhileLoading from '../../enhancers/renderWhileLoading'
import renderWhenFetchError from '../../enhancers/renderWhenFetchError'

const CheckListPresenze = (props) => (
  <Card>
    <Card.Content header={props.header}/>
    <Card.Content>
      {GuestList(props.data.allGuests, props.togglePresent)}
    </Card.Content>
    <Card.Content extra>
      <Button.Group>
        <Button>Reset</Button>
        <Button.Or text='O'/>
        <Button positive onClick={() => props.mutate({
          variables: {guestId: props.presentList},
          refetchQueries: [{query: ENDPOINT_TEST_QUERY}]
        })}>Save</Button>
      </Button.Group>
      {JSON.stringify(props.presentList)}
    </Card.Content>
  </Card>
)

const stateManager = withHandlers({
  togglePresent: ({presentList, setPresent}) => (event, data) => {
    if (data.checked)
      setPresent([...presentList, data.guestid])
    else
      setPresent( presentList.filter(present => present !== data.guestid) )
  },
  reset: ({setPresent}) => () => setPresent({}),
})

export default compose(
  graphql(GET_ALL_GUESTS),
  graphql(POST_PRESENCES),
  renderWhileLoading(LoadingSpinner),
  renderWhenFetchError(ErrorComp),
  withState('presentList', 'setPresent', []),
  stateManager,
)(CheckListPresenze)