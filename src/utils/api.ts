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
 token
}: GraphQLRequestArgs<VariablesType>){
    const body = {
        query: query || mutation,
        variables
    }
    const response = await fetch('https://careerconnect-21bk.onrender.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(body),
    });

    return response.json() as Promise<ResponseType>;
}
