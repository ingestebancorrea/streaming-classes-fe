import { Typography, CircularProgress, Box } from "@mui/material";
import { DashboardLayout } from "../layout/DashboardLayout";
import { useFetchData } from "../../hooks/useFetchData";
import { useEffect } from "react";

export const ClassPage = () => {
  const { fetchData, data } = useFetchData();

  useEffect(() => {
    fetchData(`/class`);
  }, []);

  console.log("data", data[0]);
  if (!data) {
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
      {data.length > 0 && (
        <Box
          key={data[0].id}
          sx={{
            mr: 6,
            width: { xs: '100%', sm: '90%', md: '80%', lg: '100%', xl: '100%' },
            height: { xs: '100%', sm: '300px', md: '100%', lg: '100%', xl: '100%' },
          }}
        >
          <Typography variant="h6">{data[0].name}</Typography>
          {data[0].video_url && (
            <iframe
              style={{ width: '100%', height: '100%', border: '0px' }}
              src={data[0].video_url}
              title={data[0].name}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          )}
        </Box>
      )}
    </DashboardLayout>
  );
};