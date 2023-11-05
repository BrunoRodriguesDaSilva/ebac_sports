import { RootReducer } from '../../store'
import { useSelector } from 'react-redux'
import { paraReal } from '../Produto'
import * as S from './styles'
import cesta from '../../assets/cesta.png'

const Header = () => {
  const itensCarrinho = useSelector(
    (state: RootReducer) => state.carrinho.itens
  )
  const itensFavoritos = useSelector(
    (state: RootReducer) => state.favorito.itens
  )

  const valorTotal = itensCarrinho.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{itensFavoritos.length} favoritos</span>
        <img src={cesta} />
        <span>
          {itensCarrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
