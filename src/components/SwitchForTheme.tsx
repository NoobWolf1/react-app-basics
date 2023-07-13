import React, { useContext } from 'react'
import { Grid, Box } from '@mui/material'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import ThemeContext from '../contexts/ThemeContext'

export default function SwitchForTheme() {
    const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    }

    return (
        <>
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center"
                rowGap='auto'
            >
            <Box sx={{ mx: '3px', py: '30px'}} />
            <FormGroup>
                <FormControlLabel
                    control={
                        <Switch
                            checked={isDarkMode}
                            onChange={toggleDarkMode}
                            inputProps={{ 'aria-label' : 'controlled' }}
                    />}
                    label="Enable Dark Mode" />
            </FormGroup>
            </Grid>
        </>
    )
}
