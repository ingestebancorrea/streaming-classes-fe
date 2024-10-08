import { Navigate, Route, Routes } from "react-router-dom"
import { useSelector } from "react-redux";
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { DashboardRoutes } from "../dashboard/routes/DashboardRoutes"
import { Loader } from "../components/Loader";
import { useEffect } from "react";

export const AppRouter = () => {

  const { status } = useSelector(state => state.auth);

  useEffect(() => {
  }, []);
  
  if (status === 'checking') {
    return <Loader/>
  }

  return (
    <Routes>
      {
        (status === 'not-authenticated')
          ? (
            <>
              <Route path="/auth/*" element={<AuthRoutes />} />
              <Route path="/*" element={<Navigate to='/auth/login' />} />
            </>
          )
          : (
            <>
              <Route path="/dashboard/*" element={<DashboardRoutes />} />
              <Route path="/*" element={<Navigate to="/dashboard" />} />
            </>
          )
      }
    </Routes>
  )
}