import { CurrencyDollar, MapPinLine,CreditCard, Bank,Money, Trash } from 'phosphor-react'
import ButtonBuy from '../../Components/BuyButton'
import {FormContainer, CoffeBuy,FormContent, CheckoutContainer, Payment, CoffeeSelect, CoffeePrice} from './styles'


export default function Checkout(){

   return(
    <CheckoutContainer>
      <div className='formcontainer'>
      <FormContainer>
        <div className='formTitle' >
         <MapPinLine size={16} color="#C47F17" />
         <div className='Title'>
           <h1>Endereço de Entrega</h1>
           <p>Informe o endereço onde deseja receber seu pedido</p>
         </div>
        </div>
        
        <FormContent>
          <div className='inptbase'>
           <input type="text" placeholder='CPF' className='cpf' />
          </div>
          <div>
            <input type='text' className='rua' placeholder='RUA'/>
          </div>
          <div className='inputFlex'>
            <input type="number" placeholder='NÚMERO' className='numero'/>
            <input type="text" className='complemento'  placeholder='COMPLEMENTO      opcional'/>
          </div>
          <div className='inputFlex'>  
            <input type="text" placeholder='BAIRRO' className='bairro' />
            <input type="text" name="" id=""  placeholder='CIDADE' className='cidade'/>
            <input type="number" placeholder='UF' className='uf'/>
          </div>
        </FormContent>

      </FormContainer>
      <FormContainer>
        <div>
          <CurrencyDollar size={16} color='#8047F8' />
          <div className='Title'>
             <h1>Pagamento</h1>
             <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
          </div>
        </div>
        <Payment>
           <div><CreditCard size={16} color="#8047F8" weight="thin" />Cartão de crédito</div>
           <div><Bank size={16} color="#8047F8" weight="thin" />cartão de débito</div>
           <div><Money size={16} color="#8047F8" weight="thin" />dinheiro</div>
        </Payment>
      </FormContainer>
      </div>
      

      <CoffeBuy>
        <CoffeeSelect>    
           <div className='image'></div>
           <div>
             <p>coffe name </p>
             <div className='buttons'>
               <ButtonBuy/>
               <button><Trash size={16} color="#8047F8" weight="thin" />Remover</button>
             </div>
           </div>
           <span> RS 9,90</span>
        </CoffeeSelect> 
        <CoffeeSelect>    
           <div className='image'></div>
           <div>
             <p>coffe name </p>
             <div className='buttons'>
               <ButtonBuy/>
               <button><Trash size={16} color="#8047F8" weight="thin" />Remover</button>
             </div>
           </div>
           <span> RS 9,90</span>
        </CoffeeSelect>
        <CoffeePrice>
          
          <div>
            <p>Total de itens</p>
            <p>R$ 29,70</p>
          </div>
          <div>
            <p>Entrega</p>
            <p>R$ 3,50</p>
          </div>
          <div>
            <p className='Total'>Total</p>
            <p className='Total'>33,20</p>
          </div>

          <button>Confirmar pedido</button>

        </CoffeePrice>

      </CoffeBuy>

    </CheckoutContainer>

   )



}