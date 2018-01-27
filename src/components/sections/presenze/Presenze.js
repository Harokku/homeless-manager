import React from 'react'
import PresenzeDelGiorno from './PresenzeDelGiorno'
import PresenzeDateSelector from './PresenzeDateSelector'
import moment from 'moment'

const Presenze = () => (
  <div>
    <PresenzeDateSelector/>
    <PresenzeDelGiorno
      day={moment()}
    />
    {/*<CheckListPresenze header={'Inserisci presenti del ' + moment().format('ddd DD/MMM/YYYY')}/>*/}
  </div>
)

export default Presenze


// beginDay={moment().format('YYYY-MM-DD')}
// endDay={moment().add(1,'d').format('YYYY-MM-DD')}