import Tithes from '../../Components/Tithe/Tithes'
import Index from '../../Components/DasnboardContent/Index'
import {Routes, Route} from 'react-router-dom'
import Offerings from '../../Components/Offfering/Offerings'
import LoginPage from '../Login/LoginPage'

const AppRouter = () => {
  return (
    <>
     <Routes>
        <Route path= '/' element={<LoginPage  />} history={history}/>
        <Route path= '/Index' element={<Index/>}/>
         <Route path='/Offerings' element={<Offerings/>}/>
         <Route path='/Tithes' element={<Tithes/>}/>
    </Routes>
    
    </>
  )
}

export default AppRouter