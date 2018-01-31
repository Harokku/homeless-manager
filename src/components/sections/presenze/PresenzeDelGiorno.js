import React from 'react'
import {compose} from 'recompose'
import {graphql} from 'react-apollo'
import moment from 'moment'

import {Card, Feed} from 'semantic-ui-react'

// Graph Queries
import {GET_PRESENCES_OF_DAY} from '../../../graphQuery/getAllPresences'

// Standard HOC guards
import LoadingSpinner from '../../standards/LoadingSpinner'
import ErrorComp from '../../standards/ErrorComp'
import CheckListPresenze from './CheckListPresenze'
import renderWhileLoading from '../../enhancers/renderWhileLoading'
import renderWhenFetchError from '../../enhancers/renderWhenFetchError'
import renderNewIfEmpty from '../../enhancers/renderNewIfEmpty'

const PresenzeDelGiorno = (props) => (
  <Card centered>
    <Card.Content>
      <Card.Header>
        Presenze del {props.day.format('ddd DD/MMM/YYYY')}
      </Card.Header>
    </Card.Content>

    <Card.Content>
      <Feed>
        {props.data.allPresences[0].guests.map(guest =>
          <Feed.Event key={guest.id}>
            <Feed.Content>
              <Feed.Summary>
                {guest.nickName}, anni: {moment().diff(guest.dob, 'year')}
              </Feed.Summary>
            </Feed.Content>
          </Feed.Event>
        )}
      </Feed>
    </Card.Content>
  </Card>
)

export default compose(
  graphql(
    GET_PRESENCES_OF_DAY,
    {
      options: ({day}) => {
        const beginDay = day.clone().format('YYYY-MM-DD')
        const endDay = day.clone().add(1, 'd').format('YYYY-MM-DD')
        return ({variables: {beginDay, endDay}})
      }
    }
  ),
  renderWhileLoading(LoadingSpinner),
  renderWhenFetchError(ErrorComp),
  renderNewIfEmpty(CheckListPresenze, 'allPresences')
)(PresenzeDelGiorno)