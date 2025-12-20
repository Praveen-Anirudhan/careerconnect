export const REGISTER_MUTATION = `
  mutation RegisterUser($email: String!, $password: String!, $role: String!) {
    register(email: $email, password: $password, role: $role) {
      token
      user {
        id
        role
      }
    }
  }
`;

export const LOGIN_MUTATION = `
  mutation LoginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        role
      }
    }
  }
`;