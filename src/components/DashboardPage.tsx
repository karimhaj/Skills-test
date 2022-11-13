import React from 'react'; 
import PropTypes from 'prop-types';
import { CssBaseline, Grid, createTheme, ThemeProvider, Box, Typography } from '@mui/material';

import peopleList from '../data/contactList'; 

interface personObjTypes{
  name?: string, 
  id?: number,
  age?: number,
  number?: string,
  picture?: string,
  children?: JSX.Element|JSX.Element[];
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

const Dashboard = () =>{
return (<div>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '50px'
    }}>
    
    <h1 style={{marginBottom: '0px'}}>Dashboard Page</h1>
    <p style={{marginTop: '0px'}}>subtitle for the dash</p>

    <div style={{display: 'flex'}}>
    {
      peopleList.map((item)=>
        <Card 
        key={`${item.id}`}
        name={item.name}
        picture={item.picture}
        age={item.age}
        number={item.number}
        />)
    }
        </div>
{/* 
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
  <Grid item xs={12} sm={6} md={8}>
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
  </Grid>

    </Grid> */}
    </Box>
    </ThemeProvider>
</div>)
}



function Card (props: personObjTypes){


  return(
    <div style={{
      border: '1px solid rgb(200,200,200)',
      padding: '10px',
      margin: '10px',
      borderRadius: '10px'}}>
      <div style={{display:'flex', justifyContent: 'space-between'}}>
      <h2>{props.name}</h2>

      <div style={{width:'50px', height:'50px', borderRadius:'50px'}}>
      <img src={props.picture} alt='propic' style={{width: '50px', borderRadius: '50px', objectFit: 'contain'}}/>
      </div>

      </div>
      <h3>Age: {props.age}</h3>
      <p>Number: {props.number} </p>
    </div>
  )
}
export default Dashboard; 