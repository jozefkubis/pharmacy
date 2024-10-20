import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import GlobalStyles from "./styles/GlobalStyles"

import Dashboard from "./pages/Dashboard"
import Pharmacy from "./pages/Pharmacy"
import Account from "./pages/Account"
import Settings from "./pages/Settings"
import Orders from "./pages/Orders"
import Users from "./pages/Users"
import Login from "./pages/Login"
import PageNotFound from "./pages/PageNotFound"
import AppLayout from "./ui/AppLayout"

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="pharmacy" element={<Pharmacy />} />
            <Route path="account" element={<Account />} />
            <Route path="settings" element={<Settings />} />
            <Route path="orders" element={<Orders />} />
            <Route path="users" element={<Users />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
