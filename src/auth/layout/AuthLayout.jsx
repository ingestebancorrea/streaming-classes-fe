import { Grid, Typography } from "@mui/material"

export const AuthLayout = ({ children, title = '' }) => {
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
                xs={3}
                sx={{
                    width: { sm: 420 },
                    backgroundColor: 'white',
                    padding: 3,
                    borderRadius: 2
                }}
            >
                <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center', pt: '5px' }}>{title}</Typography>

                {children}
            </Grid>
        </Grid>
    )
}
