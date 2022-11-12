import React from 'react'; 
import { CssBaseline, Grid, createTheme, ThemeProvider, Box, Typography } from '@mui/material';

//inline styles

const titleSectionStyle={
  border: '1px solid gray',
  padding: '10px',
  borderRadius: '10px'
}

const cardStyle={
  border: '1px solid gray',
  borderRadius: '10px', 
  height: '200px'
}

const dyagramStyle={
  border: '1px solid gray',
  borderRadius: '10px', 
  height: '500px'
}

const themeOptions = {
    palette: {
      type: 'light',
      primary: {
        main: '#483d8b',
      },
      secondary: {
        main: '#8a2be2 ',
      }
    },
  };

const theme = createTheme(themeOptions);

function Dashboard (){
return (<div>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '50px'
    }}>

    <Grid container 
    direction='row'
    justifyContent='center'
    alignItems='center'
    spacing={4}>
    <Grid item xs={12} sm={6} md={4}>
    <div style={titleSectionStyle}>
        <Typography component='h1' variant='h4' sx={{color: 'primary.main'}}>
            Dashboard
        </Typography>
        <Typography>
            Payment updates
        </Typography>
    </div>
  </Grid>
  {/* <Grid item xs={12} sm={6} md={8}>
    <div style={titleSectionStyle}>xs=6 md=4</div>
  </Grid>
  <Grid item xs={12} sm={12} md={8}>
    <div style={dyagramStyle}>xs=6 md=</div>
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
    <div style={dyagramStyle}>xs=6 md=8</div>
  </Grid>

  <Grid item xs={12} sm={6} md={4}>
  <div style={cardStyle}>card1</div>
  </Grid>

  <Grid item xs={12} sm={6} md={4}>
  <div style={cardStyle}>card1</div>
  </Grid>

  <Grid item xs={12} sm={6} md={4}>
  <div style={cardStyle}>card1</div>
  </Grid> */}

    </Grid>
    </Box>
    </ThemeProvider>
</div>)
}

export default Dashboard; 