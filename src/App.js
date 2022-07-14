import React, { useState } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import './styles/App.css';
import './styles/AppMediaQuery.css';
import Header from './components/Header';
import Landing from './pages/Landing';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

  const [poster, setPoster] = useState(false);

  return (
    <ApolloProvider client={client}>
      <Router>

        <Header poster={poster}/>
        <Routes>
          <Route
            path="/"
            element={<Landing poster={poster} setPoster={setPoster}/>}
          />
          <Route
            path="*"
            element={<Landing poster={poster} setPoster={setPoster}/>}
          />
        </Routes>

      </Router>
    </ApolloProvider>
  );
}

export default App;
