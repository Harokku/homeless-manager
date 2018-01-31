import React from 'react'
import moment from 'moment'

import {compose, withState, withHandlers} from 'recompose'

import DateSequenzialSelector from '../../standards/DateSequenzialSelector'
import NuovaConsegna from './NuovaConsegna'
import ConsegneList from './ConsegneList'

const Presenze = (props) => (
  <div>
    <DateSequenzialSelector
      selectedDate={props.selectedDate}
      onAddDay={props.addDay}
      onRemoveDay={props.removeDay}
      onToday={props.today}
    />
    <ConsegneList day={moment(props.selectedDate)}/>
    {moment(props.selectedDate).format('YYYY-MM-DD') === moment().format('YYYY-MM-DD') ? <NuovaConsegna/> : null}
  </div>
)

const stateManager = withHandlers({
  addDay: ({selectedDate, setDate}) => (event, data) => {
    event.preventDefault()
    setDate(moment(selectedDate).add(1, 'd').toISOString())
  },
  removeDay: ({selectedDate, setDate}) => (event, data) => {
    event.preventDefault()
    setDate(moment(selectedDate).subtract(1, 'd').toISOString())
  },
  today: ({setDate}) => (event, data) => {
    event.preventDefault()
    setDate(moment().toISOString())
  }
})


export default compose(
  withState('selectedDate', 'setDate', moment().toISOString()),
  stateManager
)(Presenze)