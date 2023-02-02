import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import { DefaultLayout } from './Layout/index'
import Checkout from './Pages/Checkout'
import Succes from './Pages/Succes'

export default function Router(){
  return(
  <Routes>
    <Route path="/" element={<DefaultLayout />}>
     <Route path='/' element={<Home/>} />
     <Route path='/Checkout' element={<Checkout/>} />
     <Route path='/Success' element={<Succes/>} />
     </Route>
  </Routes>
  )
}