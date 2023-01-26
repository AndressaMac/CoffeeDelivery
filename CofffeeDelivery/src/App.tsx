import Router from './Router'
import {BrowserRouter} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './Global/Global'
import {defaultTheme} from './Global/GlobalTheme'


export default function App() {
return(
  <div>
    <ThemeProvider theme={defaultTheme}>
     <BrowserRouter>
     <Router/>
     </BrowserRouter>
     <GlobalStyle/>
     </ThemeProvider>
  </div>
)
}


