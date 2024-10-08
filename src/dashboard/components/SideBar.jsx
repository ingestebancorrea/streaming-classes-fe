import { Avatar, Box, Divider, Typography } from "@mui/material"
import { useSelector } from "react-redux"

export const SideBar = () => {

    const auth = useSelector(state => state.auth);

    return (
        <Box component="div" sx={{ p: '20px' }}>
            <Avatar
                alt="Descripción de la imagen"
                src={ auth.photoURL }
                sx={{ width: '60px', height: '60px' }}
            />

            <Typography>{ auth.name }</Typography>
            <Divider />     
        </Box>
    )
}