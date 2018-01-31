import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import {Button} from 'semantic-ui-react'

const DateSequenzialSelector = (props) => (
  <Button.Group size='mini' fluid compact>
    <Button labelPosition='left'
            icon='left chevron'
            content={moment(props.selectedDate).subtract(1, 'd').format('ddd DD/MM/YYYY')}
            onClick={props.onRemoveDay}
    />
    <Button
      content='Oggi'
      onClick={props.onToday}
    />
    <Button labelPosition='right'
            icon='right chevron'
            content={moment(props.selectedDate).add(1, 'd').format('ddd DD/MM/YYYY')}
            onClick={props.onAddDay}
    />
  </Button.Group>
)

DateSequenzialSelector.propTypes = {
  selectedDate: PropTypes.string.isRequired,
  onAddDay: PropTypes.func.isRequired,
  onRemoveDay: PropTypes.func.isRequired,
  onToday: PropTypes.func.isRequired,
}

export default DateSequenzialSelector