import React from 'react'
import {graphql} from 'react-apollo'
import ENDPOINT_TEST_QUERY from '../graphQuery/testQuery'
import {compose} from 'recompose'

import {Segment} from 'semantic-ui-react'

// Standard HOC guards
import LoadingSpinner from '../components/standards/LoadingSpinner'
import ErrorComp from '../components/standards/ErrorComp'
import renderWhileLoading from '../components/enhancers/renderWhileLoading'
import renderWhenFetchError from '../components/enhancers/renderWhenFetchError'

function RenderList(props) {

  // 3
  const linksToRender = props.data.allPresences

  return (
    <Segment>
      Segment rendered, here is data
      {linksToRender.map( link => (
        <p>
          {link.id} - {link.createdAt}
        </p>
      ))}
    </Segment>
  )
}

export default compose(
  graphql(ENDPOINT_TEST_QUERY),
  renderWhileLoading(LoadingSpinner),
  renderWhenFetchError(ErrorComp),
)(RenderList)