import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage, RegisterPage, SelectRolePage } from "../pages"

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={ <LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="role" element={<SelectRolePage />} />
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  )
}