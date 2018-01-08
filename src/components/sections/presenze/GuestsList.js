import React from 'react'
import moment from 'moment'
import {Checkbox, List} from 'semantic-ui-react'

const ListGuests = (allGuests) => (
  <List divided relaxed>
    {allGuests.map(guest =>
      <List.Item key={guest.id}>
        <List.Icon name='user circle' size='huge' verticalAlign='middle'/>
        <List.Content>
          <List.Header><Checkbox label={guest.nickName}/></List.Header>
          <List.Description>Eta' {moment().diff(guest.dob, 'year')} anni</List.Description>
        </List.Content>
      </List.Item>
    )}
  </List>
)

export default ListGuests