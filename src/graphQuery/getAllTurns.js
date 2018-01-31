import gql from 'graphql-tag'

export const GET_ALL_TURNS = gql`
  query getAllTurns {
      allTurns{
          id
          date
          message
          operator
          category
      }
  }
`

export const GET_TURNS_BY_DAY = gql`
  query getTurnsOfDay($beginDay: DateTime!, $endDay: DateTime!) {
      allTurns(filter: {AND: {date_gte: $beginDay date_lt: $endDay}}) {
          id
          date
          message
          operator
          category
      }
  }
`