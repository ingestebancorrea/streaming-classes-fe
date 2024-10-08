import { Alert, Button, Grid, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { Link, Link as RouterLink } from 'react-router-dom'
import { FacebookComponent, GoogleComponent } from '../components'

export const RegisterPage = () => {
  const url = import.meta.env.VITE_ENDPOINT_REGISTER;

  return (
    <AuthLayout title='Crear Cuenta'>
      <form>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Nombre completo"
              fullWidth
              name='displayName'
              sx={{ width: '280px' }}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@gmail.com"
              fullWidth
              name='email'
              sx={{ width: '280px' }}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name='password'
              sx={{ width: '280px' }}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ bgcolor: '#FD5149', width: '280px' }}
            >
              Crear cuenta
            </Button>
          </Grid>

          <Grid
            container
            direction="column"
            spacing={1}
            sx={{ mb: 2, mt: 1, minWidth: '10px', maxWidth: '300px' }}
          >
            <Grid item>
              <Typography sx={{ textAlign: 'center' }}>OR</Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <GoogleComponent url={url} />
            </Grid>

            <Grid item>
              <FacebookComponent url={url} />
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color='inherit' to='/auth/login'>
              Ingresar
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  )
}
