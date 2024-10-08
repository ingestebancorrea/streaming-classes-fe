import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { ClassroomRoutes } from "../classroom/routes/ClassroomRoutes"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={ <AuthRoutes/>} />
      <Route path="/*" element={ <Navigate to='/auth/login'/> }/>
    </Routes>
  )
}