import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const blueTheme = createTheme({
    palette: {
        primary: {
            main: '#003275'
        },
        secondary: {
            main: '#FFA500'
        },
        error: {
            main: red.A200
        }
    }
})