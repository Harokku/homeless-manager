import React from 'react'
import { Link } from 'react-router-dom'

import {compose, withState, withHandlers} from 'recompose'

import { Menu } from 'semantic-ui-react'

function MainMenu({activeItem, selectMenuItem}) {
  return (
    <Menu fluid widths={3}>
      <Menu.Item as={Link} to='/' name='presenze' active={activeItem === 'presenze'} onClick={selectMenuItem} />
      <Menu.Item as={Link} to='/consegne' name='consegne' active={activeItem === 'consegne'} onClick={selectMenuItem} />
      <Menu.Item name='materiale' active={activeItem === 'materiale'} onClick={selectMenuItem} />
    </Menu>
  )
}

export default compose(
  withState('activeItem', 'selectActiveItem', null),
  withHandlers({
    selectMenuItem: ({selectActiveItem}) => (event, {name}) => {selectActiveItem (name)}
  })
)(MainMenu)