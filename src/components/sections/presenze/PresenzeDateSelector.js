import React from 'react'
import moment from 'moment'

import {Button} from 'semantic-ui-react'

const PresenzeDateSelector = (props) => (
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

export default PresenzeDateSelector