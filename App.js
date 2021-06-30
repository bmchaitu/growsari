import React from 'react';
import { StyleSheet } from 'react-native';
import { ApolloClient, InMemoryCache, HttpLink, ApolloLink, ApolloProvider, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";
import AsyncStorage from '@react-native-async-storage/async-storage';

import AppNavigation from './navigation/AppNavigation';
import AppProvider from './context/AppState';


const httpLink = new HttpLink({
  uri: "https://x7wzu2lz1m.execute-api.ap-southeast-1.amazonaws.com/dev/graphql"
});

const App = () => {

  const authLink = setContext(async (_, { headers }) => {
    const token = await AsyncStorage.getItem("Token");
    return {
      headers: {
        ...headers,
        "authorization": token ? `Bearer ${token}` : ""
      }
    };
  });
  
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        ),
      );

    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  const client = new ApolloClient({
    link: from([errorLink, authLink, httpLink]),
    cache: new InMemoryCache()
  });


  return (
    <AppProvider>
      <ApolloProvider client={client}>
        <AppNavigation />
      </ApolloProvider>
    </AppProvider>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 35
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    resizeMode: "cover"
  }
});

export default App;