import Logo from '../../assets/Logo.svg'
import { HeaderContainer,SpanLocal,SpanCart, CounterCart } from './styles'
import {ShoppingCart, MapPin} from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { CounterContext } from '../../App'
import { useContext } from 'react'



export default function Header(){

  const { totalCart } = useContext(CounterContext)

  return(
    <HeaderContainer>
    
      <div>
      <NavLink to="/"><img src={Logo}/></NavLink>
      </div>
      <nav>
        <SpanLocal><MapPin size={22} color="#8047f8" weight="fill" />Porto Alegre, RS</SpanLocal>
        
        <SpanCart>
          <NavLink to="/Checkout">
            <ShoppingCart  size={22} color='#C47F17' weight="fill"  />
          </NavLink>
          
          <CounterCart>{totalCart}</CounterCart>
        </SpanCart>
        

    </nav>
    </HeaderContainer>
  )
}