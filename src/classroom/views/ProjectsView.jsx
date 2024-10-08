import { Add, Delete, Edit } from "@mui/icons-material"
import { Card, CardActions, CardMedia, Grid, IconButton, Typography } from "@mui/material"
import project from '../../assets/projects.jpg'
import { Link } from "react-router-dom"

export const ProjectsView = () => {
    return (
        <Grid container direction="column">
            <Grid item sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h5">Proyectos</Typography>

                <IconButton component={Link} to="/project/register">
                    <Add />
                </IconButton>
            </Grid>

            <Grid item>
                <Card sx={{ width: '275px' }}>
                    <CardMedia
                        component="img"
                        image={project}
                        sx={{ width: '275px', height: '183px' }}
                    />
                    <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography>PA 1</Typography>
                        <IconButton>
                            <Edit />
                            <Delete />
                        </IconButton>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    )
}
