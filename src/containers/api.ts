export const REGISTER_MUTATION = `
  mutation RegisterUser($email: String!, $password: String!, $role: String!) {
    register(email: $email, password: $password, role: $role) {
      token
      user {
        id
      }
    }
  }
`;