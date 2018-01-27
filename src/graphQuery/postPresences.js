import gql from 'graphql-tag'

export const POST_PRESENCES = gql`
    mutation postPresences($guestId: [ID!]) {
        createPresence(guestsIds: $guestId) {
            id
            notes
            guests {
                id
                nickName
            }
        }
    }
`
