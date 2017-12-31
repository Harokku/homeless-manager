import gql from 'graphql-tag'

const ENDPOINT_TEST_QUERY = gql `
  query endpointTest {
    allPresences {
      id
      createdAt
      notes
    }
  }
`;

export default ENDPOINT_TEST_QUERY