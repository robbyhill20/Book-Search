import {gql} from '@apollo/client'

//Query ME 
export const QUERY_ME = gql`
{
    me{
        _id
        username
        email
        savedBooks{
            bookId
            authors
            image
            description
            title
            link
        }
    }
}
`;