import Logo from '../../assets/Logo.svg'
import { HeaderContainer,SpanLocal,SpanCart } from './styles'
import {ShoppingCart, MapPin} from 'phosphor-react'


export default function Header(){

  return(
    <HeaderContainer>
    
      <div>
      <img src={Logo}/>
      </div>
      <nav>
        <SpanLocal><MapPin size={22} color="#8047f8" weight="fill" />Localidade</SpanLocal>
        <SpanCart><ShoppingCart size={22} color='#C47F17' weight="fill"  /></SpanCart>
    </nav>
    </HeaderContainer>
  )
}