import { ShoppingCart } from 'phosphor-react'
import { SpanCart } from '../../../../Components/Header/styles'
import {CoffeeCard, Buy, Coffee, CartPurple} from './styles'
import ButtonBuy from '../../../../Components/BuyButton'




export default function CoffeCard(){



return(
  <CoffeeCard>
      <Coffee> </Coffee>
      <p>Tradicional</p>
      <h1>Expresso Tradicional</h1>
      <span>O tradicional café feito com água quente e grãos moídos</span>
     <Buy>
     <p>RS</p>
     <span> 9,90</span>
     <ButtonBuy/>
     <CartPurple><ShoppingCart size={22} color='white' weight="fill"  /></CartPurple>
     </Buy>

  </CoffeeCard>
)
}