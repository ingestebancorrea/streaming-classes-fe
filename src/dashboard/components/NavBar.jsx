import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { AppBar, Avatar, Grid, IconButton, Toolbar } from '@mui/material';
import { useDispatch } from 'react-redux';
import logo from '../../assets/logo.png';
import { logout } from '../../store/auth';

export const NavBar = ({ drawerWidth = 240 }) => {
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(logout());
        localStorage.removeItem('token');
    };

    return (
        <AppBar
            position='fixed'
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
                background: 'white',
            }}
        >
            <Toolbar>
                {/* Icono de hamburguesa, visible solo en pantallas pequeñas */}
                <IconButton
                    color='inherit'
                    edge='start'
                    sx={{ mr: 2, display: { xs: 'flex', sm: 'none' } }} // Cambia aquí
                    aria-label="open drawer"
                >
                    <MenuOutlined />
                </IconButton>

                <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                    <Avatar
                        alt="Logo de la aplicación"
                        src={logo}
                        sx={{ width: 80, height: 60, borderRadius: 0, objectFit: 'fill' }}
                    />

                    <Grid item>
                        <IconButton
                            color='default'
                            onClick={onLogout}
                            aria-label="logout"
                        >
                            <LogoutOutlined />
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};
