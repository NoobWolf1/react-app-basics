import React, {useState} from 'react'
import Button from '@mui/material/Button'
import { Grid } from '@mui/material'

export default function Body() {
    const [count, setCount] = useState(0);
    const  handleChange = () => {
        setCount(count+1);
    }
    const handleReset = () => {
        setCount(0);
    }
  return (
    <>
        <Grid container
            direction="row"
            justifyContent="center"
            alignItems="center"
            rowGap='auto'>
                <Button
                    variant="contained"
                    color="success"
                    onClick={handleChange}
                >
                    Clicks {count}
                </Button>
                <Button
                    variant="contained"
                    color="error"
                    onClick={handleReset}
                >
                    Reset
                </Button>
            </Grid>         
    </>
    
  )
}
