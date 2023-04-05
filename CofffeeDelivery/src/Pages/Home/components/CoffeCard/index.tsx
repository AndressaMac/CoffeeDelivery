import { ShoppingCart } from 'phosphor-react'
import { CoffeeCard, Buy, Coffee, CartPurple } from './styles'
import { useContext, useEffect, useState } from 'react'
import { CounterContext } from '../../../../App'
import { ButtonContainer } from '../../../../Components/BuyButton/styles'
//import { ButtonContainer } from '../../../../Components/BuyButton/styles'

export default function CoffeCard({
  title = '',
  description = '',
  tag = [''],
  image = '',
  id = ''
}) {
  const { addCart, subtCart, TotalShoppingCart } = useContext(CounterContext)
  const [CoffeConter, setCoffeCounter] = useState(0)

  function PlusButton() {
    setCoffeCounter(CoffeConter + 1)
    addCart(id)
  }

  function RemoveButton() {
    setCoffeCounter(CoffeConter - 1)
    subtCart(id)
  }

  return (
    <CoffeeCard key={id}>
      <Coffee src={image} />
      <div>
        {tag.map(tags => (
          <p style={{ display: 'inline-block', marginLeft: '2px' }}>{tags}</p>
        ))}
      </div>
      <h1>{title}</h1>
      <span>{description}</span>
      <Buy>
        <p>RS</p>
        <span>9,90</span>
        <ButtonContainer key={id}>
          <button onClick={RemoveButton} disabled={CoffeConter < 1}>
            -
          </button>
          <span>{CoffeConter}</span>
          <button onClick={PlusButton}>+</button>
        </ButtonContainer>
        <CartPurple>
          <ShoppingCart
            size={22}
            color="white"
            weight="fill"
            onClick={() => TotalShoppingCart()}
          />
        </CartPurple>
      </Buy>
    </CoffeeCard>
  )
}
