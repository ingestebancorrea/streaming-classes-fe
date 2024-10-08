import { Grid, MenuItem, Select, TextField, Typography, useTheme } from '@mui/material'
import { useState } from 'react';
import useFetch from '../../hooks/useFetch';


export const RegisterView = () => {

    const { palette } = useTheme();

    const [selectedOption, setSelectedOption] = useState('option');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const { data, error } = useFetch('/students');

    return (
        <Grid container sx={{ display: 'flex', gap: '20px' }}>
            <Grid item sx={{ flex: '0 0 45%', background: 'white', borderRadius: '5px', justifyContent: 'center', textAlign: 'center' }}>
                <Grid item sx={{ background: '#FD5149', color: 'white', p: 1 }}>
                    <Typography>General</Typography>
                </Grid>

                <Typography></Typography>

                <TextField
                    label="Nombre Proyecto"
                    fullWidth
                    sx={{ width: '80%', mt: '10px' }}
                />

                <TextField
                    label="Descripción del Proyecto"
                    fullWidth
                    sx={{ width: '80%', mt: '10px' }}
                />
            </Grid>

            <Grid item sx={{ flex: '0 0 45%', background: 'white', borderRadius: '5px', textAlign: 'center' }} >
                <Grid item sx={{ background: palette.primary.main, color: 'white', p: 1 }}>
                    <Typography>Grupo de trabajo</Typography>
                </Grid>

                {data && data.students !== null && (
                    <Select
                        value={selectedOption}
                        onChange={handleChange}
                        fullWidth
                        sx={{ width: '80%', mt: '10px' }}
                    >
                        <MenuItem value="option" disabled>
                            Select an option
                        </MenuItem>
                        {data.students.map((option) => (
                            <MenuItem key={option.id} value={option.id}>
                                {option.name}
                            </MenuItem>
                        ))}
                    </Select>
                )}
            </Grid>
        </Grid>
    )
}