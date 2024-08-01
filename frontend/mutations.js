const ADD_USER = `
mutation Mutation($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
  }
}
`