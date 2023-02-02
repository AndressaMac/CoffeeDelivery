import { Itens } from '../Home/styles'
import {BoxResults, SuccessBox,LesftBox} from './style'
import { Timer, CurrencyDollar, MapPin } from 'phosphor-react'
import image from '../../assets/illustration.png'



export default function Succes(){

  return (
    <SuccessBox>
    <LesftBox>
    <div>
     <h1>Uhu! Pedido confirmado</h1>
     <p>Agora é só aguardar que logo o café chegará até você </p>
    </div>
   

    <BoxResults>
      <div>
         <Itens statusColor="cup">
           <MapPin size={20} color="#fbf4f4" weight="fill" />
        </Itens>
        <p>Entrega em Rua João Daniel Martinelli, 102 Farrapos - Porto Alegre, RS</p>
      </div>
      <div>
        <Itens  statusColor="clock">
           <Timer size={20} color="#fbf4f4" weight="fill" />
        </Itens>
        <p>Previsão de entrega 20 min - 30 min</p>
      </div>
      <div>
        <Itens  statusColor="cart">
           <CurrencyDollar size={20} color="#fbf4f4" weight="fill" />
        </Itens>
        <p>Pagamento na entrega Cartão de Crédito </p>
      </div>
        
    </BoxResults>
    </LesftBox>  

    <img src={image}/>
    </SuccessBox>
  )




}