import { Grid, Toolbar } from "@mui/material";
import { NavBar, SideBar } from "../components";

export const DashboardLayout = ({ children }) => {
  const drawerWidth = 0; // drawer-caja

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: '100vh',
        backgroundColor: 'primary.main',
        padding: 2,
      }}
    >
      <Grid item>
        <NavBar drawerWidth={drawerWidth} />
      </Grid>

      <Toolbar />

      <Grid container direction="row" sx={{ minHeight: '90vh', gap: '20px' }}>
        <Grid 
          item 
          xs={12} 
          md={8.8} 
          sx={{
            display: 'flex',
            maxWidth: { xs: '100%', md: '70%' }, // 100% width on small screens
            background: '#e2e2e2',
            p: 3,
            borderRadius: '5px',
          }}
        >
          {/* Toolbar - Barra de herramientas */}
          <Toolbar />
          {children}
        </Grid>

        <Grid 
          item 
          xs={12} 
          md={3} 
          sx={{
            display: 'flex',
            background: '#e2e2e2',
            maxWidth: { xs: '100%', md: '30%' }, // 100% width on small screens
            borderRadius: '5px',
          }}
        >
          <SideBar />
        </Grid>
      </Grid>
    </Grid>
  );
};