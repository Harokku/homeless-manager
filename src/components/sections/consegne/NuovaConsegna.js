import React from 'react'
import {compose, withStateHandlers, withHandlers} from 'recompose'
import {graphql} from 'react-apollo'
import moment from 'moment'

import {Card, Form, Input, TextArea, Button, Dropdown} from 'semantic-ui-react'

// Graph queries
import GET_ENUMS from '../../../graphQuery/getEnums'

// Standard HOC guards
import LoadingSpinner from '../../standards/LoadingSpinner'
import ErrorComp from '../../standards/ErrorComp'
import renderWhileLoading from '../../enhancers/renderWhileLoading'
import renderWhenFetchError from '../../enhancers/renderWhenFetchError'

// DropDown filler
const dropDownFiller = (enumList) => (
  enumList.map(enumItem => ({
      text: enumItem.name,
      value: enumItem.name
    })
  ))

const dateFiller = (dayNumber) => {
  let today = moment();

  return [...Array(dayNumber)].map((day, index) => ({
      text: today.clone().subtract(index, 'd').format('YYYY-MM-DD'),
      value: today.clone().subtract(index, 'd').format('YYYY-MM-DD')
    })
  )
}

const NuovaConsegna = (props) => (
  <Card centered>
    <Card.Content header='Nuova consegna'/>
    <Card.Content>
      <Form>
        <Form.Field name='formDate' value={props.formDate} selection required options={dateFiller(3)} control={Dropdown}
                    label='Data' placeholder='Data della consegna' onChange={props.updateFormState}/>
        <Form.Field name='formOperator' value={props.formOperator} control={Input} required label='Operatore'
                    placeholder='Cognome Nome' onChange={props.updateFormState}/>
        <Form.Group grouped>
          <Form.Field name='formCategory' value={props.formCategory} selection required
                      options={dropDownFiller(props.data.__type.enumValues)} control={Dropdown}
                      label='Categoria' placeholder='Categoria' onChange={props.updateFormState}/>
          <Form.Field name='formConsegna' value={props.formConsegna} rows={2} autoHeight required control={TextArea}
                      label='Inserisci consegna'
                      placeholder='Nuova consegna' onChange={props.updateFormState}/>
        </Form.Group>
        <Form.Field positive control={Button} content='Salva'/>
      </Form>
    </Card.Content>
  </Card>
)

export default compose(
  graphql(GET_ENUMS, {options: {variables: {enumName: 'NOTE_CATEGORIES'}}}),
  renderWhileLoading(LoadingSpinner),
  renderWhenFetchError(ErrorComp),
  withStateHandlers(() => ({
      formDate: '',
      formOperator: '',
      formCategory: '',
      formConsegna: '',
    }),
    {
      updateFormState: () => (event, data) => ({
        [data.name]: data.value
      })
    })
)
(NuovaConsegna)