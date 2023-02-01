import Header from '../../Components/Header'
import CoffeCard from './components/CoffeCard'
import { IntroContainer, Itens, BoxItens } from './styles'
import introImagen from '../../assets/imagem.png'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import images from '../../../../images'


/**const CaffeeInfor = [
  {title: 'Expresso Tradicional',
   description:'O tradicional café feito com água quente e grãos moídos',
   tag:'',
   image: images.expresso
  },
  {title: 'Expresso Tradicional',
  description:'',
  tag:'',
  image: images.expresso
  },
  {title: 'Expresso Tradicional',
  description:'',
  tag:'',
  image: images.expresso
  },
  {title: 'Expresso Tradicional',
  description:'',
  tag:'',
  image: images.expresso
  },
  {title: 'Expresso Tradicional',
  description:'',
  tag:'',
  image: images.expresso
  },
  {title: 'Expresso Tradicional',
  description:'',
  tag:'',
  image: images.expresso
  },
  {title: 'Expresso Tradicional',
  description:'',
  tag:'',
  image: images.expresso
  },
  {title: 'Expresso Tradicional',
  description:'',
  tag:'',
  image: images.expresso
  },
  
  

  ]**/


export default function Home() {
  return (
    <div>
      <IntroContainer>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
          <BoxItens>
            <div>
              <Itens statusColor="cart">
                <ShoppingCart size={16} color="#fbf4f4" weight="fill" />
              </Itens>
              <p>Compra simples e segura</p>
            </div>
            <div>
              <Itens statusColor="box">
                <Package size={16} color="#fbf4f4" weight="fill" />
              </Itens>
              <p>Compra simples e segura</p>
            </div>
            <div>
              <Itens statusColor="clock">
                <Timer size={16} color="#fbf4f4" weight="fill" />
              </Itens>
              <p>Compra simples e segura</p>
            </div>
            <div>
              <Itens statusColor="cup">
                <Coffee size={16} color="#fbf4f4" weight="fill" />
              </Itens>
              <p>Compra simples e segura</p>
            </div>
          </BoxItens>
        </div>
        <img src={introImagen} />
      </IntroContainer>

      <CoffeCard />
    </div>
  )
}
