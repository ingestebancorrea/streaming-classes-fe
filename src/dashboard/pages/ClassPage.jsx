import { useEffect, useState } from "react";
import { Typography, CircularProgress, Box } from "@mui/material";
import { DashboardLayout } from "../layout/DashboardLayout";
import { useFetchData } from "../../hooks/useFetchData";
import { Modal } from "../components/Modal";
import { useDispatch } from "react-redux";
import { logout } from "../../store/auth";

export const ClassPage = () => {
  const dispatch = useDispatch();
  const { fetchData, data: response, error } = useFetchData();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchClassData = async () => {
      await fetchData('/class');
    };

    fetchClassData();
  }, []);

  useEffect(() => {
    if(error && error.status == 400) {
      setOpen(true);
    }
  }, [error]);

  const handleClose = () => {
    setOpen(false);
    dispatch(logout());
  };
  
  if (!response) {
    return (
      <DashboardLayout>
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
          <CircularProgress />
        </Box>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      {response && response.data && response.data.length > 0 && (
        <Box
          key={response.data[0].id}
          sx={{
            mr: 6,
            width: { xs: '100%', sm: '90%', md: '80%', lg: '100%', xl: '100%' },
            height: { xs: '100%', sm: '300px', md: '100%', lg: '100%', xl: '100%' },
          }}
        >
          <Typography variant="h6">{response.data[0].name}</Typography>
          {response.data[0].video_url && (
            <iframe
              style={{ width: '100%', height: '100%', border: '0px' }}
              src={response.data[0].video_url}
              title={response.data[0].name}
              allowFullScreen
            ></iframe>
          )}
        </Box>
      )}

      <Modal open={open} handleClose={handleClose} error="Ya existe un moderador asociado a la clase activa, inicie sesión nuevamente." />
    </DashboardLayout>
  );
};