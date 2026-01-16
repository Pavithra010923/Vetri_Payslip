import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './pages/Login'
import './App.css'
import Register from './pages/Register'
import Payslip from './pages/Payslip'
import PayslipReview from './pages/PayslipReview'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/payslip' element={<Payslip/>}></Route>
        <Route path='/payslipreview' element={<PayslipReview/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
