import { Itens } from '../Home/styles'
import {BoxResults, SuccessBox,LesftBox} from './style'
import { Timer, CurrencyDollar, MapPin } from 'phosphor-react'
import image from '../../assets/illustration.png'
import { useEffect, useState } from 'react'





export default function Succes(){

  
 const [paymentValue,setPaymentValue] = useState('')
 const [streetValues, setStreetValues ] = useState('')
 const [numberValues, setNumberValues] =useState('')
 const [cictyValues, setCictyValues] =useState('')
 const [ufValues, setUfValues] =useState('')
 const [bairroValues,setBairroValues] = useState('')

 
  useEffect(()=>{
    let infor = localStorage.getItem('@ignite-Coffe:Payment') || ''
    let streetValue = localStorage.getItem('@ignite-Coffe:street') || ''
    let numberValue = localStorage.getItem('@ignite-Coffe:number') || ''
    let cictyValue = localStorage.getItem('@ignite-Coffe:city') || ''
    let ufValue = localStorage.getItem('@ignite-Coffe:uf') || ''
    let bairroValue = localStorage.getItem('@ignite-Coffe:bairro') || ''

    setBairroValues(bairroValue)
    setStreetValues(streetValue)
    setNumberValues(numberValue)
    setCictyValues(cictyValue)
    setUfValues(ufValue)
    setPaymentValue(infor)
},[])



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
           <MapPin size={30} color="#fbf4f4" weight="fill" />
        </Itens>
        <p>Entrega em <strong>{streetValues}, {numberValues} </strong> {bairroValues} - {cictyValues}, {ufValues}   </p>
        
      </div>
      <div>
        <Itens  statusColor="clock">
           <Timer size={30} color="#fbf4f4" weight="fill" />
        </Itens>
        <p>Previsão de entrega <strong>20 min - 30 min</strong></p>
      </div>
      <div>
        <Itens  statusColor="cart">
           <CurrencyDollar size={30} color="#fbf4f4" weight="fill" />
        </Itens>
        <p>Pagamento na entrega <strong>{paymentValue}</strong>  </p>
      </div>
        
    </BoxResults>
    </LesftBox>  

    <img src={image}/>
    </SuccessBox>
  )




}