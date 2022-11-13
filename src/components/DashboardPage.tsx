import React from 'react';
import {   BarChart, Bar, LineChart, Line, CartesianGrid, YAxis, XAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CssBaseline, Grid, createTheme, ThemeProvider, Box, Typography } from '@mui/material';
import peopleList from '../data/contactList';
import { chartData } from '../data/chartData'; 


interface personObjTypes{
  name?: string,
  id?: number,
  job?: string,
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
            margin: '50px'
    }}>
{/*
    <h1 style={{marginBottom: '0px'}}>Dashboard Page</h1>
    <p style={{marginTop: '0px'}}>subtitle for the dash</p> */}

    <div style={{display: 'flex'}}>

        </div>

    <Grid container
    direction='row'
    justifyContent='center'
    alignItems='center'
    spacing={4}>
    <Grid item xs={12} sm={6} md={4}>
    <div>
        <Typography component='h1' variant='h4' sx={{color: 'primary.main'}}>
            Dashboard
        </Typography>
        <Typography>
            Payment updates
        </Typography>
    </div>
  </Grid>
  <Grid item xs={12} sm={6} md={8}>

  </Grid>
  <Grid item xs={12} sm={12} md={8}>
  <div style={{border: '2px solid black'}}>
  <LineChart width={500} height={500} data={chartData}>
      <Line type="monotone" dataKey="uv" stroke="red" />
      <Line type="monotone" dataKey="pv" stroke="#8884d8" />
      <CartesianGrid stroke="gray" />
      <YAxis />
      <Tooltip />
      <Legend />
      <XAxis dataKey="name" />
    </LineChart>
    </div>
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
 <h1> no data found </h1>
 </Grid>
  <Grid item xs={12} sm={12} md={12}>
  <div style={{display: 'flex'}}>
  {
      peopleList.map((item)=>
        <Card
        key={`${item.id}`}
        name={item.name}
        picture={item.picture}
        job={item.job}
        number={item.number}
        />)
    }
    </div>
  </Grid>

    </Grid>

    </Box>
    </ThemeProvider>
</div>)
}



function Card (props: personObjTypes){


  return(
    <div style={{
      backgroundColor: 'rgb(230,235,240)',
      borderBottom: '3px solid rgb(200,200,200)',
      minWidth: '200px',
      maxWidth: '200px',
      height: '200px',
      padding: '15px',
      margin: '10px',
      borderRadius: '10px'}}>
      <div style={{display:'flex', justifyContent: 'space-between'}}>

        <div>
      <h2 style={{opacity: '90%'}}>{props.name}</h2>
      <p style={{opacity: '70%'}}>{props.job}</p>
      </div>

      <div style={{width:'50px', height:'50px', borderRadius:'50px'}}>
      <img src={props.picture} alt='propic' style={{width: '50px', borderRadius: '50px', objectFit: 'contain', border: '2px solid rgb(255,255,255)'}}/>
      </div>

      </div>
      <p>Phone: {props.number} </p>
    </div>
  )
}



export default Dashboard;
