import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'

export function Rotas(){
    return(
        <BrowserRouter>
           <AppRoutes/> 
        </BrowserRouter>
    )
}