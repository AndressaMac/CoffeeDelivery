import {
  CurrencyDollar,
  MapPinLine,
  CreditCard,
  Bank,
  Money,
  Trash,
  Radio
} from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { CounterContext } from '../../App'

import CardCoffeeBuy from './components/CardCoffeeBuy'
import {
  FormContainer,
  CoffeBuy,
  FormContent,
  CheckoutContainer,
  Payment,
  CoffeePrice
} from './styles'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useNavigate } from 'react-router'

interface coffeProps {
  title: string
  description: string
  tag: string[]
  image: any
  id: string | number
  quantity: number
}

const schema = yup
  .object({
    cep: yup.string().required('O cep é obrigatório'),
    rua: yup.string().required('A rua é obrigatório'),
    numero: yup.string().required('O número é obrigatório'),
    complemento: yup.string(),
    bairro: yup.string().required('O bairro é obrigatório'),
    cidade: yup.string().required('A cidade é obrigatório'),
    uf: yup.string().required('O uf é obrigatório'),
    payment: yup
      .string<'debito' | 'credito' | 'dinheiro'>()
      .required('O campo de pagamento é obrigatório')
  })
  .required()
type FormData = yup.InferType<typeof schema>

export default function Checkout() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  const [coffes, setCoffes] = useState<coffeProps[]>([])

  const onSubmit: SubmitHandler<FormData> = data => {
    console.log(data)
    let paymentValue = getValues('payment')
    let streetValue = getValues('rua')
    let numberValue = getValues('numero')
    let cictyValue = getValues('cidade')
    let ufValue = getValues('uf')
    let bairroValue = getValues('bairro')

    localStorage.setItem('@ignite-Coffe:Payment', paymentValue)
    localStorage.setItem('@ignite-Coffe:street', streetValue)
    localStorage.setItem('@ignite-Coffe:number', numberValue)
    localStorage.setItem('@ignite-Coffe:bairro', bairroValue)
    localStorage.setItem('@ignite-Coffe:city', cictyValue)
    localStorage.setItem('@ignite-Coffe:uf', ufValue)
    handleClick()
  }

  let jsonCoffe = localStorage.getItem('@ignite-Coffe:')
  useEffect(() => {
    console.log('COFFES', jsonCoffe)
    if (jsonCoffe) {
      let coffe = JSON.parse(jsonCoffe)
      setCoffes(coffe)
    } else {
      setCoffes([])
    }
  }, [jsonCoffe])

  const { totalCart } = useContext(CounterContext)

  const pricecoffe = totalCart * 9.9
  const totalPricecoffe = pricecoffe + 3.5

  let navigate = useNavigate()

  function handleClick() {
    navigate('/Success')
  }

  return (
    <CheckoutContainer id="hook-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="formcontainer">
        <FormContainer>
          <div className="formTitle">
            <MapPinLine size={16} color="#C47F17" />
            <div className="Title">
              <h1>Endereço de Entrega</h1>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>

          <FormContent>
            <div className="inptbase">
              <input
                type="text"
                placeholder="CEP"
                className="cep"
                {...register('cep')}
              />
              <p className="error-message">{errors.cep?.message}</p>
            </div>
            <div>
              <input
                type="text"
                className="rua"
                placeholder="RUA"
                {...register('rua')}
              />
              <p className="error-message">{errors.rua?.message}</p>
            </div>
            <div className="inputFlexfist">
              <input
                type="number"
                placeholder="NÚMERO"
                className="numero"
                {...register('numero')}
              />
              <p className="error-message">{errors.numero?.message}</p>
              <input
                type="text"
                className="complemento"
                placeholder="COMPLEMENTO      opcional"
                {...register('complemento')}
              />
            </div>
            <div className="inputFlex">
              <input
                type="text"
                placeholder="BAIRRO"
                className="bairro"
                {...register('bairro')}
              />
              {<p className="error-message">{errors.bairro?.message}</p>}
              <input
                type="text"
                placeholder="CIDADE"
                className="cidade"
                {...register('cidade')}
              />
              {<p className="error-message">{errors.cidade?.message}</p>}
              <input
                type="text"
                placeholder="UF"
                className="uf"
                {...register('uf')}
              />
              {<p className="error-message">{errors.uf?.message}</p>}
            </div>
          </FormContent>
        </FormContainer>
        <FormContainer>
          <div className="formTitle">
            <CurrencyDollar size={16} color="#8047F8" />
            <div className="Title">
              <h1>Pagamento</h1>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>
          <Payment>
            <div>
              <input
                type="Radio"
                value="credito"
                id="credit"
                {...register('payment')}
              />
              <label htmlFor="credit">
                <CreditCard size={16} color="#8047F8" weight="thin" />
                Cartão de crédito
              </label>
            </div>

            <div>
              <input
                type="Radio"
                value="debito"
                id="debit"
                {...register('payment')}
              />
              <label htmlFor="debit">
                <Bank size={16} color="#8047F8" weight="thin" />
                cartão de débito
              </label>
            </div>

            <div className="paymentBox">
              <input
                type="Radio"
                value="dinheiro"
                id="cash"
                {...register('payment')}
              />
              <label htmlFor="cash">
                <Money size={16} color="#8047F8" weight="thin" />
                dinheiro
              </label>
            </div>
          </Payment>
        </FormContainer>
      </div>

      <CoffeBuy>
        {coffes.map(coffe => (
          <CardCoffeeBuy
            title={coffe?.title}
            image={coffe?.image}
            id={coffe?.id}
            quantity={coffe?.quantity}
          />
        ))}

        <CoffeePrice>
          <div>
            <p>Total de itens</p>
            <p>{pricecoffe}</p>
          </div>
          <div>
            <p>Entrega</p>
            <p>R$ 3,50</p>
          </div>
          <div>
            <p className="Total">Total</p>
            <p className="Total">{totalPricecoffe}</p>
          </div>
          <button
            type="submit"
            form="hook-form"
            disabled={!isValid}
            onClick={handleSubmit(onSubmit)}
          >
            Confirmar pedido
          </button>
        </CoffeePrice>
      </CoffeBuy>
    </CheckoutContainer>
  )
}
