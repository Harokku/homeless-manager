import React from 'react'
import {compose, withState, withHandlers} from 'recompose'
import moment from 'moment'

import {Grid, Button} from 'semantic-ui-react'

const PresenzeDateSelector = (props) => (
  <Grid columns='equal'>
    {console.log(props.selectedDate)}
    <Grid.Column>
      {moment(props.selectedDate).subtract(1, 'd').toString()}
    </Grid.Column>
    <Grid.Column>
      {props.selectedDate}
    </Grid.Column>
    <Grid.Column>
      {moment(props.selectedDate).add(1, 'd').toString()}
    </Grid.Column>
  </Grid>
)

const stateManager = withHandlers({
  addDay: ({selectedDate, setDate}) => (event, data) => {
    event.preventDefault()
    setDate(moment(selectedDate).add(1, 'd').toString())
  },
  removeDay: ({selectedDate, setDate}) => (event, data) => {
    event.preventDefault()
    setDate(moment(selectedDate).subtract(1, 'd').toString())
  },
  today: ({setDate}) => (event, data) => {
    event.preventDefault()
    setDate(moment().toString())
  }
})

export default compose(
  withState('selectedDate', 'setDate', moment().toString() ),
  stateManager
)(PresenzeDateSelector)