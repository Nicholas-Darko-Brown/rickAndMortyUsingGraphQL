import { useQuery, gql } from "@apollo/client"

const FETCH_CHARACTERS = gql`
    query {
        characters {
            results {
                id
                name
                image
            }
        }
    }
`

export const useCharacters = () => {
    const { loading, data, error } = useQuery(FETCH_CHARACTERS)

    return { error, data, loading }
}