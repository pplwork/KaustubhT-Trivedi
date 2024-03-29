import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://puurs.stepzen.net/api/ranting-terrier/__graphql',
    headers:{
        Authorization:`Apikey ${process.env.NEXT_PUBLIC_STEPZEN_KEY}`,

    },
    cache: new InMemoryCache(),
  });

  export default client