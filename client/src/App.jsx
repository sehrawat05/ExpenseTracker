
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Expenses from './pages/Expenses'
import ExpenseEdit from './pages/ExpenseEdit'
import ExpensesAdd from './pages/ExpensesAdd'
function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/expense/edit/:id" element={<ExpenseEdit />} />
        <Route path="/expense/add" element={<ExpensesAdd />} />
      </Routes>
    </>
  )
}

export default App
