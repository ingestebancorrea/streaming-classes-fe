import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { DashboardRoutes } from "../dashboard/routes/DashboardRoutes"
import { Loader } from "../components/Loader";
import { useFetchData } from "../hooks/useFetchData";
import { revalidateToken } from "../store/auth";

export const AppRouter = () => {

  const dispatch = useDispatch();
  const { status } = useSelector(state => state.auth);
  const { fetchData, data: response } = useFetchData();

  useEffect(() => {
    const renewToken = async () => {
      await fetchData('/auth/renew');

      if (response) {
        dispatch(revalidateToken(response));
      }
    };
    
    renewToken();
  }, []);

  if (status === 'checking') {
    return <Loader />
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