//index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import App from './App';


// Create Apollo Client instance
const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL, // Add your GraphQL endpoint here
  cache: new InMemoryCache(),
});

// Render the main App component wrapped with ApolloProvider
ReactDOM.render(
  <React.StrictMode >
    <ApolloProvider client={client}>
   
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')

);

