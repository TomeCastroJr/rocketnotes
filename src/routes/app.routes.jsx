import {Routes, Route} from 'react-router-dom'

import { NewNote } from '../pages/New/NewNote'
import { Details } from '../pages/Details/Details'
import { Home } from '../pages/Home/Home'
import { Profile } from '../pages/Profile/Profile'

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/new" element={<NewNote/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/details/:id" element={<Details/>} />
        </Routes>
    )
}