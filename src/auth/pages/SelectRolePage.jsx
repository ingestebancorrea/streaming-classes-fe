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
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
    >
      <Grid
        item
        xs={3}
        sx={{
          width: { sm: 580 },
          padding: 3,
          
        }}
      >
        <Box
          sx={{
            height: '40px',
            pt: '5px',
            display: 'flex',
            justifyContent: 'center',
            bgcolor: 'white',
            borderRadius: 0.5
          }}
        >
          <Typography variant="h5" mb={4}>
            Selecciona tu Rol
          </Typography>
        </Box>

        <Grid container direction="row" sx={{ width: "auto" }}>
          <Grid item xs={12} sm={6}>
            <Avatar
              alt="Descripción de la imagen"
              src={estudiante}
              sx={{ width: 266, height: '100%', mx: 'auto', borderRadius: 0 }}
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
              <Button variant='outlined' value="ESTUDIANTE" onClick={handleButtonClick}>Estudiante</Button>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Avatar
              alt="Descripción de la imagen"
              src={profesor}
              sx={{ width: 266, height: '100%', mx: 'auto', borderRadius: 0 }}
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
              <Button variant='outlined' value="MODERADOR" onClick={handleButtonClick}>Moderador</Button>
            </Box>
          </Grid>
        </Grid>

      </Grid>
    </Grid>
  );
};
