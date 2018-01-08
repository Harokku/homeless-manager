import gql from 'graphql-tag'

const GET_ALL_GUESTS = gql`
  query getAllGuests {
      allGuests{
          id
          idCode
          nickName
          dob
      }
  }
`

export default GET_ALL_GUESTS
