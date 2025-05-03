import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
      node { 
       
        createdAt
        fullName
        
        ratingAverage
        reviews {
          totalCount
        }
        reviewCount
        stargazersCount
        watchersCount
        forksCount
        openIssuesCount
        url
        ownerAvatarUrl
        description
        language
      }
    }
    }
  }
`;


export const ME = gql`
{
  me {
    id
    username
  }
}
`;





// other queries...