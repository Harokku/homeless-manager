import gql from 'graphql-tag'

const GET_ENUMS = gql`
    query enumValuesOfMetaInformationTags($enumName: String!){
        __type(name: $enumName) {
            name
            enumValues{
                name
            }
        }
    }
`

export default GET_ENUMS