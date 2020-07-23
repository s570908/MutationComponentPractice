import React from 'react'
import { render } from 'react-dom'
import Main from './Main'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import 'tachyons'

const client = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v1/cjexem1he3let0153tpc5ftu1'
})

const App = () => (
  <ApolloProvider client={client}>
    <Main />
  </ApolloProvider>
)

render(<App />, document.getElementById('root'))
