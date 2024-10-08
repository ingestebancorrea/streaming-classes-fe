import React from 'react';
import { Avatar, Box, Button, Grid, Typography } from '@mui/material';
import estudiante from '../../assets/estudiante.jpg';
import profesor from '../../assets/profesor.jpg';
import { useNavigate } from 'react-router-dom';

export const SelectRolePage = () => {
  const navigate = useNavigate();

  const handleButtonClick = (event) => {
    const aliasRole = event.target.value;
    navigate(`/auth/register?role=${aliasRole}`);
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 2 }}
    >
      <Grid
        item
        xs={10} sm={8} md={6} // Ancho responsivo
        sx={{
          padding: 3,
          bgcolor: 'white',
          borderRadius: 1,
          boxShadow: 2,
        }}
      >
        <Box
          sx={{
            height: '40px',
            pt: '5px',
            display: 'flex',
            justifyContent: 'center',
            bgcolor: 'primary.main',
            borderRadius: 0.5,
            mb: 2,
          }}
        >
          <Typography variant="h5" color="white">
            Selecciona tu rol
          </Typography>
        </Box>

        <Grid 
          container 
          spacing={2} 
          justifyContent="center" 
          direction={{ xs: 'column', sm: 'row' }} // Cambia la dirección según el tamaño de la pantalla
        >
          <Grid item xs={12} sm={4}>
            <Avatar
              alt="Estudiante"
              src={estudiante}
              sx={{ width: '100%', height: 'auto', mx: 'auto', borderRadius: 0 }}
            />
            <Box
              sx={{
                height: '40px',
                pt: '5px',
                pb: '5px',
                display: 'flex',
                justifyContent: 'center',
                bgcolor: 'white',
              }}
            >
              <Button variant='outlined' value="STD" onClick={handleButtonClick}>
                Estudiante
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Avatar
              alt="Moderador"
              src={profesor}
              sx={{ width: '100%', height: 'auto', mx: 'auto', borderRadius: 0 }}
            />
            <Box
              sx={{
                height: '40px',
                pt: '5px',
                pb: '5px',
                display: 'flex',
                justifyContent: 'center',
                bgcolor: 'white',
              }}
            >
              <Button variant='outlined' value="MOD" onClick={handleButtonClick}>
                Moderador
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};