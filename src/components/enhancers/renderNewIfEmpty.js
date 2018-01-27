import {branch, renderComponent} from 'recompose'

const renderNewIfEmpty = (component, queryName, propName = 'data') =>
  branch(
    props => props[propName][queryName].length === 0,
    renderComponent(component)
  );

export default renderNewIfEmpty