import React from 'react'
import Header from './components/Header'
import MainView from './containers/post'
import { Provider } from 'react-redux'
import configureStore from './store'
import styled from 'styled-components'

const Container = styled.div`
  padding: 8px 16px;
  margin: 0 auto;
  background: #05022b;
  border-radius: 4px;
`
const store = configureStore()
const App = () => (
  <Provider store={store}>
    <Container className="App">
      <Header />
      <MainView />
    </Container>
  </Provider>
)

export default App
