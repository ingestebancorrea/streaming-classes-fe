import { LogoutOutlined, MenuOutlined, MessageOutlined, NotificationImportant, NotificationImportantOutlined } from '@mui/icons-material'
import { AppBar, Avatar, Grid, IconButton, Toolbar } from '@mui/material'
import { useDispatch } from 'react-redux'
import logo from '../../assets/Logo.png'

export const NavBar = ({ drawerWidth = 240 }) => {

    const dispatch = useDispatch();

    const onLogout = () => {

    }

    return (
        <AppBar
            position='fixed'
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
                background: 'white'
            }}
        >
            <Toolbar>
                <IconButton
                    color='inherit'
                    edge='start'
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuOutlined />
                </IconButton>

                <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                    <Avatar
                        alt="Descripción de la imagen"
                        src={logo}
                        sx={{ width: 220, height: '100%', borderRadius: 0, objectFit: 'fill' }}
                    />

                    <Grid item>
                        <IconButton
                            color='default'
                        >
                            <MessageOutlined/>
                        </IconButton>
                        <IconButton
                            color='default'

                        >
                            <NotificationImportantOutlined component="" />
                        </IconButton>
                        <IconButton
                            color='default'
                            onClick={onLogout}
                        >
                            <LogoutOutlined />
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}