/*
 * Using export async function graphqlRequest<VariablesType, ResponseType>({
 * VariablesType and ResponseType are generic types that allow you to specify the types of the variables and response data for the GraphQL request.
 * Usual functions are not type-safe and can lead to runtime errors if the types of the variables or response data do not match the expected types.
 *
 */
type GraphQLRequestArgs<VariablesType> = {
  query?: string;
  mutation?: string;
  variables?: VariablesType;
  token?: string | null;
};

export async function graphqlRequest<VariablesType, ResponseType>({
  mutation,
  query,
  variables,
  token,
}: GraphQLRequestArgs<VariablesType>) {
  const body = {
    query: query || mutation,
    variables,
  };

  // const graphqlEndpoint = import.meta.env.VITE_GRAPHQL_ENDPOINT;
  const graphqlEndpoint = "http://localhost:3000/graphql";
  if (!graphqlEndpoint) {
    throw new Error('GRAPHQL_ENDPOINT is not defined in environment variables');
  }

    const response = await fetch(graphqlEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(body),
    });

  return response.json() as Promise<ResponseType>;
}
