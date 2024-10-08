import { useState } from "react";
import { Link, Link as RouterLink } from "react-router-dom";
import { Button, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import { AuthLayout } from "../layout/AuthLayout";
import { GoogleComponent, FacebookComponent } from "../components";

export const LoginPage = () => {
  const url = `${import.meta.env.VITE_API_URL}/auth/login`;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(url, { email, password });
      console.log(response.data);
    } catch (err) {
      // setError("Correo o contraseña incorrectos.");
      console.error(err);
    }
  };

  return (
    <AuthLayout title="Welcome">
      <form onSubmit={handleSubmit}>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          {error && (
            <Typography color="error" sx={{ mb: 2 }}>
              {error}
            </Typography>
          )}
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Username"
              type="email"
              placeholder="correo@gmail.com"
              fullWidth
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ width: '280px' }}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ width: '280px' }}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                bgcolor: "#FD5149",
                width: "280px",
              }}
            >
              Login
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
          
          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/role">
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};