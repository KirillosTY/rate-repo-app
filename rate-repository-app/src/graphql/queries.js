import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
      node { 
        id       
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


export const GET_REPOSITORY = gql`
  query Repository($repositoryId: ID!) {
    repository(id: $repositoryId) {
      id
      ownerName
      name
      createdAt
      fullName
      reviews {
        totalCount
      }
      ratingAverage
      reviewCount
      stargazersCount
      watchersCount
      forksCount
      openIssuesCount
      url
      ownerAvatarUrl
      description
      language
      userHasReviewed
    }
  }
`;


export const GET_REVIEW = gql`
query Reviews($repositoryId: ID!){
  repository(id: $repositoryId) {
    id
    fullName
    reviews {
      edges {
        node {
          id
          text
          rating
          createdAt
          user {
            id
            username
          }
        }
      }
    }
  }
}
`;


// other queries...