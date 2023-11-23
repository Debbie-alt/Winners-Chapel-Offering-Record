import Index from '../Pastors/DasnboardContent/Index'
import {Routes, Route, useLocation} from 'react-router-dom'
import LoginPage from '../Components/Login/LoginPage'
import OfficerPage from '../Components/Officer/OfficerPage'
import AddOffering from '../Components/Officer/FormPages/AddOffering'
import AddTithe from '../Components/Officer/FormPages/AddTithe'
import AddTransport from '../Components/Officer/FormPages/AddTransport'
import PastorsOffering from '../Pastors/DasnboardContent/Payments/AddOffferingPastors'
import PastorsTithes from '../Pastors/DasnboardContent/Payments/AddTithe.'
import PastorsTransport from '../Pastors/DasnboardContent/Payments/AddTransportPastors'
import { AnimatePresence } from "framer-motion";
import Body from '../Components/Body'




const AppRouter = () => {
  return (
    <>
     <Routes location={location} key={location.pathname}>
        <Route index element={<LoginPage  />} history={history}/>
        <Route path= '/Index' element={<Index/>}/>
         <Route path='/OfficerPage' element={<OfficerPage/>}/>
         <Route path='/OfferingForm' element={<AddOffering/>}></Route>
         <Route path='/TitheForm' element={<AddTithe/>}/>
         <Route path='/TransportForm' element={<AddTransport/>}/>
         <Route path='/Offerings' element={<PastorsOffering/>}/>
         <Route path='/Tithes' element={<PastorsTithes/>}/>
         <Route path='/TransportSeed' element={<PastorsTransport/>}/>
         <Route path= '/Body' element={<Body/>}/>


    </Routes>
    
    </>
  )
}

export default AppRouter