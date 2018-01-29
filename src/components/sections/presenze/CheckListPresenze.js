import React from 'react'
import {compose, withState, withHandlers} from 'recompose'
import {graphql} from 'react-apollo'
import moment from 'moment'

import {Card, Button} from 'semantic-ui-react'
import GuestList from './GuestsList'

// Graph Queries
import GET_ALL_GUESTS from '../../../graphQuery/getAllGuests'
import {POST_PRESENCES} from '../../../graphQuery/postPresences'
import {GET_PRESENCES_OF_DAY} from '../../../graphQuery/getAllPresences'
// Standard HOC guards
import LoadingSpinner from '../../standards/LoadingSpinner'
import ErrorComp from '../../standards/ErrorComp'
import renderWhileLoading from '../../enhancers/renderWhileLoading'
import renderWhenFetchError from '../../enhancers/renderWhenFetchError'
import renderNullIfNotToday from '../../enhancers/renderNullIfNotToday'

const CheckListPresenze = (props) => (
  <Card centered>
    <Card.Content header={'Presenti al ' + props.day.format('DD/MM/YYYY')}/>
    <Card.Content>
      {GuestList(props.data.allGuests, props.togglePresent)}
    </Card.Content>
    <Card.Content extra>
      <Button.Group>
        <Button>Reset</Button>
        <Button.Or text='O'/>
        <Button positive onClick={() => props.mutate({
          variables: {guestId: props.presentList},
          refetchQueries: [{
            query: GET_PRESENCES_OF_DAY,
            variables: {
              beginDay: moment().format('YYYY-MM-DD'),
              endDay: moment().add(1, 'd').format('YYYY-MM-DD')
            }
          }]
        })}>Save</Button>
      </Button.Group>
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
  renderNullIfNotToday(),
  withState('presentList', 'setPresent', []),
  stateManager,
)(CheckListPresenze)