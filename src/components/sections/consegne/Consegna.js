import React from 'react'
import PropTypes from 'prop-types'

import {getLabelColor} from '../../utils/getColors'

import {Card, Label, Segment, Item} from 'semantic-ui-react'

const Consegna = (props) => (
  <Card centered>
    <Card.Content>
      <Card.Header>
        Consegna del {props.day.format('ddd DD/MM/YYYY')}
      </Card.Header>
    </Card.Content>

    <Card.Content>
      <Segment padded>
        <Label color={getLabelColor(props.category)} attached='top left'>{props.category}</Label>
        <Item>
          <Item.Content>
            <Item.Header as='h4'>Operatore: {props.operator}</Item.Header>
            <Item.Meta>Consegna:</Item.Meta>
            <Item.Description>{props.message}</Item.Description>
          </Item.Content>
        </Item>
      </Segment>
    </Card.Content>
  </Card>
)

Consegna.propTypes = {
  day: PropTypes.object.isRequired,
  operator: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
}

export default Consegna