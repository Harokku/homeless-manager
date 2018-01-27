import gql from 'graphql-tag'

export const GET_ALL_PRESENCES = gql`
    query getAllPresences{
        allPresences{
            id
            createdAt
            guests{
                id
                nickName
                dob
            }
        }
    }
`

export const GET_PRESENCES_OF_DAY = gql`
    query getPresencesOfDay($beginDay: DateTime!, $endDay: DateTime!) {
        allPresences(filter: {AND: {createdAt_gt: $beginDay createdAt_lt: $endDay}}) {
            id
            createdAt
            guests {
                id
                nickName
                dob
            }
        }
    }


`