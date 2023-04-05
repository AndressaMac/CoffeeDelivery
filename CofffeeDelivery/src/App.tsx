import Router from './Router'
import { BrowserRouter, To } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './Global/Global'
import { defaultTheme } from './Global/GlobalTheme'
import React, { createContext, useEffect, useState } from 'react'
import { CoffeeInfor, CoffessProps } from './Coffes'

interface CounterType {
  counter: number
  setcounter: Function
  addCart: Function
  productCart: CounterCart[]
  subtCart: Function
  TotalShoppingCart: Function
  totalCart: number
  RemoveCoffe: Function
  updateTotalCart: Function
 
}

interface CounterCart extends CoffessProps {
  quantity: number
}

export const CounterContext = createContext({} as CounterType)

export default function App() {
  const [counter, setcounter] = useState(0)
  const [productCart, setProductCart] = useState<CounterCart[]>([])
  const [totalCart, setTotalCart] = useState(0)

  function addCart(id: number) {
    const copyProductCart = [...productCart]

    const item = copyProductCart.find(product => product.id === id)
    const product = CoffeeInfor.find(p => p.id === id)

    if (!item) {
      copyProductCart.push({
        id: id,
        quantity: 1,
        title: product?.title || '',
        description: product?.description || '',
        tag: [] || product?.tag,
        image: product?.image
      })

      console.log(copyProductCart)
    } else {
      item.quantity = item.quantity + 1
      const index = copyProductCart.findIndex(product => product.id === id)
      copyProductCart[index] = { ...item }
    }
    setProductCart(copyProductCart)

    console.log(productCart)
  }

  function subtCart(id: number) {
    const copyProductCart = [...productCart]

    const itemIndex = copyProductCart.findIndex(product => product.id === id)
    const item = copyProductCart[itemIndex]

    if (item) {
      item.quantity = item.quantity - 1
      copyProductCart[itemIndex] = { ...item }
      setProductCart([...copyProductCart])
      localStorage.setItem('@ignite-Coffe:', JSON.stringify(productCart))
    }
  }

  function TotalShoppingCart() {
    const copyProductCart = [...productCart]

    const itens = copyProductCart.reduce((total, iten) => {
      return total + iten.quantity
    }, 0)
    setTotalCart(itens)
    localStorage.setItem('@ignite-Coffe:', JSON.stringify(productCart))
  }

  function RemoveCoffe(id: number) {
    const newCart = productCart.filter(product => product.id != id)
    localStorage.setItem('@ignite-Coffe:', JSON.stringify(newCart))

    setProductCart(newCart)
    updateTotalCart(newCart)
  }

  function updateTotalCart(newCart: any = []) {
    const copyProductCart = [...newCart]
    const itens = copyProductCart.reduce((total, iten) => {
      return total + iten.quantity
    }, 0)
    setTotalCart(itens)
  }


  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <CounterContext.Provider
            value={{
              counter,
              setcounter,
              addCart,
              productCart,
              subtCart,
              TotalShoppingCart,
              totalCart,
              RemoveCoffe,
              updateTotalCart,
             
            }}
          >
            <Router />
          </CounterContext.Provider>
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </div>
  )
}
