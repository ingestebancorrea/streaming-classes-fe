import { FileCopyOutlined, Home, Schedule, Settings, TurnedInNot } from "@mui/icons-material"
import { Avatar, Box, Divider, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

export const SideBar = () => {

    const auth = useSelector(state => state.auth);

    return (
        <Box component="div" sx={{ p: '20px' }}>
            <Avatar
                alt="Descripción de la imagen"
                src={ auth.photoURL }
                sx={{ width: '60px', height: '60px' }}
            />

            <Typography>{ auth.displayName }</Typography>

            <Typography>Ing. Sistemas</Typography>

            <Divider />     
            <List >
                <ListItem disablePadding >
                    <ListItemButton sx={{ pl: '0px' }} component={Link} to="/">
                        <ListItemIcon>
                            <Home/>
                            <ListItemText primary={'Home'} />
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton sx={{ pl: '0px' }} component={Link} to="/projects">
                        <ListItemIcon>
                            <FileCopyOutlined/>
                            <ListItemText primary={'Projects'}/>
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton sx={{ pl: '0px' }}>
                        <ListItemIcon>
                            <Schedule/>
                            <ListItemText primary={'Schedule'} />
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton sx={{ pl: '0px' }}>
                        <ListItemIcon>
                            <Settings/>
                            <ListItemText primary={'Settings'}/>
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )
}