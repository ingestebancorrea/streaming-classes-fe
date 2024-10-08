import { Box, Grid, Toolbar } from "@mui/material"
import { NavBar, SideBar } from "../components";

export const ClassroomLayout = ({ children }) => {

  const drawerWidth = 0;//drawer-caja

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 2 }}
    >
      <Grid item>
        <NavBar drawerWidth={drawerWidth} />
      </Grid>

      <Toolbar />

      <Grid container direction="row" sx={{ minHeight: '100vh', gap: '20px' }}>
        <Grid item xs={2} md={2} sx={{ display: 'flex', background: '#e2e2e2', maxWidth: '20%', borderRadius: '5px' }}>
          <SideBar />
        </Grid>

        <Grid item xs={9.8}  sx={{ display: 'flex', maxWidth: '80%', background: '#e2e2e2', p: 3,  borderRadius: '5px' }}>
          {/* Toolbar - Barra de herramientas */}
          <Toolbar />
          {children}
        </Grid>
      </Grid>
    </Grid>
  )
}
