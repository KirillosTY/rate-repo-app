import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query Repositories($orderDirection: OrderDirection, $orderBy: AllRepositoriesOrderBy, $searchKeyword: String) {
  repositories(orderDirection: $orderDirection, orderBy: $orderBy, searchKeyword: $searchKeyword) {
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
query  getCurrentUser($includeReviews: Boolean!){
  me {
    id
    username
     reviews @include(if: $includeReviews) {
        edges {
          node {
          id
         
          repository {
            fullName
            id
          }
          userId
          repositoryId
          rating
          createdAt
          text
        }
  }
     }}}
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
query Reviews($repositoryId: ID!, $pageSize: Int, $after: String){
  repository(id: $repositoryId) {
    id
    fullName
    reviews(first: $pageSize, after: $after) {
        totalCount
        edges {
          node {
            id
            text
            rating
            createdAt
            repositoryId
            user {
              id
              username
            }
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
      }
    }
  }

`;




// other queries...