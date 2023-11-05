import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { useSelector } from 'react-redux'
import { RootReducer } from '../store'
import * as S from './styles'
import { useGetProdutosQuery } from '../services/api'

const ProdutosComponent = () => {
  const { data: produtos } = useGetProdutosQuery()
  const itensFavoritos = useSelector(
    (state: RootReducer) => state.favorito.itens
  )
  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = itensFavoritos.map((f) => f.id)

    return IdsDosFavoritos.includes(produtoId)
  }

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
