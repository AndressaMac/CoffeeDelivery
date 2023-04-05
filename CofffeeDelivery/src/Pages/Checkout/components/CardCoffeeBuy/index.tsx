import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { CounterContext } from '../../../../App'
import QuantityButton from '../../../../Components/BuyButton'
import { CoffeeSelect } from './styless'

export default function CardCoffeeBuy({
  title = '',
  image = '',
  id = '',
  quantity = 0
}) {
  const { RemoveCoffe } = useContext(CounterContext)

  function trash() {
    RemoveCoffe(id)
  }

  return (
    <CoffeeSelect key={id}>
      <img className="image" src={image} />
      <div>
        <p>{title}</p>
        <div className="buttons">
          <QuantityButton id={id} quantity={quantity} />
          <button onClick={() => trash()}>
            <Trash size={16} color="#8047F8" weight="thin" />
            Remover
          </button>
        </div>
      </div>
      <span> RS 9,90</span>
    </CoffeeSelect>
  )
}
