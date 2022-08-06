import { gql } from '@apollo/client'

export const GET_USERS_QUERY = gql`
    query GetUsers {
        getUsers {
            id
            firstName
            age
            companyName
            companyNameString {
                companyName
                description
            }
        }
    }
`

export const GET_COMPANIES_QUERY = gql`
    query GetCompanies {
        getCompanies {
            id
            companyName
            description
        }
    }
`

export const ADD_USER_MUTATION = gql`
    mutation AddUser($firstName: String!, $age: Int, $companyName: ID) {
        addUser(firstName: $firstName, age: $age, companyName: $companyName) {
            id
            firstName
            age
            companyName
        }
    }
`
