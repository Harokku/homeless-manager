import React from 'react'
import PropTypes from 'prop-types'
import {compose} from 'recompose'
import {graphql} from 'react-apollo'
import moment from 'moment'

import Consegna from './Consegna'

// Graph query import
import {GET_TURNS_BY_DAY} from '../../../graphQuery/getAllTurns'
// Standard HOC guards
import LoadingSpinner from '../../standards/LoadingSpinner'
import ErrorComp from '../../standards/ErrorComp'
import renderWhileLoading from '../../enhancers/renderWhileLoading'
import renderWhenFetchError from '../../enhancers/renderWhenFetchError'

const ConsegneList = (props) => (
  <div>
    {props.data.allTurns.map(consegna => (
      <Consegna key={consegna.id}
                day={moment(consegna.date)}
                operator={consegna.operator}
                category={consegna.category}
                message={consegna.message}
      />
    ))}
  </div>
)

ConsegneList.propTypes = {
  day: PropTypes.object.isRequired
}

export default compose(
  graphql(GET_TURNS_BY_DAY,
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
)(ConsegneList)