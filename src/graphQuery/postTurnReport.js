import gql from 'graphql-tag'

export const POST_TURN_REPORT = gql`
    mutation createTurnReport(
    $date: DateTime!,
    $operator: String!,
    $category: NOTE_CATEGORIES!,
    $message: String!
    ) {
        createTurn(
            date: $date,
            operator: $operator,
            category: $category,
            message: $message
        ) {
            id
            date
            operator
            category
            message
        }
    }
`