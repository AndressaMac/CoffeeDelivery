import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import { DefaultLayout } from './Layout/index'

export default function Router(){
  return(
  <Routes>
    <Route path="/" element={<DefaultLayout />}>
     <Route path='/' element={<Home/>} />
     <Route path='/Checkout' element="Checkout" />
     <Route path='/Success' element="Success" />
     </Route>
  </Routes>
  )
}