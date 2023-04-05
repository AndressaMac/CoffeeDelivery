import { useContext, useEffect, useState } from 'react'
import { CounterContext } from '../../App'
import { ButtonContainer } from './styles'
import { CoffeeInfor } from '../../Coffes'

export default function QuantityButton({ id = '', quantity = '' }) {
  const { addCart, subtCart, TotalShoppingCart, findquantity, quantityid } =
    useContext(CounterContext)

  useEffect(() => {
    // findquantity(Number(id))
  }, [quantityid])

  function PlusButton() {
    addCart(id)
    TotalShoppingCart()
  }

  function RemoveButton() {
    subtCart(id)
    TotalShoppingCart()
  }

  return (
    <ButtonContainer key={id}>
      <button onClick={RemoveButton}>-</button>
      <span>{quantity}</span>
      <button onClick={PlusButton}>+</button>
    </ButtonContainer>
  )
}
