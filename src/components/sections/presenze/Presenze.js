import React from 'react'
import PresenzeDelGiorno from './PresenzeDelGiorno'
import PresenzeDateSelector from './PresenzeDateSelector'
import moment from 'moment'

import {compose, withState, withHandlers} from 'recompose'

const Presenze = (props) => (
  <div>
    <PresenzeDateSelector
      selectedDate={props.selectedDate}
      onAddDay={props.addDay}
      onRemoveDay={props.removeDay}
      onToday={props.today}
    />
    <PresenzeDelGiorno
      day={moment(props.selectedDate)}
    />
    {/*<CheckListPresenze header={'Inserisci presenti del ' + moment().format('ddd DD/MMM/YYYY')}/>*/}
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
  withState('selectedDate', 'setDate', moment().toISOString() ),
  stateManager
)(Presenze)


// beginDay={moment().format('YYYY-MM-DD')}
// endDay={moment().add(1,'d').format('YYYY-MM-DD')}