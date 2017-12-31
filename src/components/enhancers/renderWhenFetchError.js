import {branch, renderComponent} from 'recompose'

const renderWhenFetchError = (component, propName = 'data') =>
  branch(
    props => props[propName] && props[propName].error,
    renderComponent(component)
  )

export default renderWhenFetchError