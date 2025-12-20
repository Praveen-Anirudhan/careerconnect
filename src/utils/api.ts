type GraphQLRequestArgs<VariablesType> = {
    query: string;
    variables?: VariablesType;
};

export async function graphqlRequest<VariablesType, ResponseType>(
    { query, variables }: GraphQLRequestArgs<VariablesType>
): Promise<ResponseType> {
    const response = await fetch('https://careerconnect-21bk.onrender.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query, variables }),
    });

    return response.json() as Promise<ResponseType>;
}
