import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import {FormContainer, CoffeBuy,FormContent, CheckoutContainer} from './styles'


export default function Checkout(){

   return(
    <CheckoutContainer>
      <div>
      <FormContainer>
        <div>
         <MapPinLine size={16} color="#C47F17" />
         <h1>Endereço de Entrega</h1>
         <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
        
        <FormContent>
          <div className='inptbase'>
           <input type="text" placeholder='CPF' />
          </div>
          <div>
            <input type='text' placeholder='RUA'/>
          </div>
          <div>
            <input type="number" placeholder='NÚMERO' />
            <input type="text"  placeholder='COMPLEMENTO               opcional'/>
          </div>
          <div>  
            <input type="text" placeholder='BAIRRO' />
            <input type="text" name="" id=""  placeholder='CIDADE'/>
            <input type="number" placeholder='UF'/>
          </div>
           
          
        </FormContent>

      </FormContainer>
      <FormContainer>
      <CurrencyDollar size={16} color='#8047F8' />
        <h1>Pagamento</h1>
        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>

        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </FormContainer>
      </div>
      <CoffeBuy>
             
           <img src=''/>
           <p>coffe name </p>
           <button> +- </button>
           <button>trash</button>
           <span></span>
        
        <button>Confirmar pedido</button>
      </CoffeBuy>

    </CheckoutContainer>

   )



}