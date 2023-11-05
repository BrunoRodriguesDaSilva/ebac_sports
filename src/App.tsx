import { store } from './store'
import { Provider } from 'react-redux'
import { GlobalStyle } from './styles'
import Header from './components/Header'
import Produtos from './containers/Produtos'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos />
      </div>
    </Provider>
  )
}

export default App
