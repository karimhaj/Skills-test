import React from 'react';
import {   
  LineChart, 
  Line, 
  CartesianGrid, 
  YAxis, 
  XAxis, 
  Tooltip, 
  Legend, 
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis } from 'recharts';
import { CssBaseline, Grid, createTheme, ThemeProvider, Box, Typography } from '@mui/material';
import peopleList from '../data/contactList';
import { lineChartData, radarChartData } from '../data/chartData'; 


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

    <Grid container
    direction='row'
    justifyContent='center'
    alignItems='center'
    border='1px solid red'
    spacing={4}>
    <Grid item xs={12} sm={6} md={4} border='1px solid red'>
    <Box sx={{
      borderBottom: '3px solid rgb(0, 0, 0)',
      borderLeft: '3px solid rgb(0, 0, 0)',
      backgroundColor: 'primary.main',
      color: 'rgb(247, 245, 255)',
      padding: '10px 30px 10px 10px',
      borderRadius: '15px',
      width: 'max-content'
    }}>
        <Typography component='h1' variant='h4'>
            Dashboard
        </Typography>
        <Typography component='p' sx={{opacity: '80%'}}>
            our work, our priority
        </Typography>
    </Box>
  </Grid>
  <Grid item xs={12} sm={6} md={8}>

  </Grid>
  <Grid item xs={12} sm={12} md={6} border='1px solid red'>
  <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
  <LineChart width={700} height={500} data={lineChartData}>
      <Line type='monotone' dataKey='firstCompany' stroke='red' />
      <Line type='monotone' dataKey='secondCompany' stroke='#8884d8' />
      <CartesianGrid stroke='gray' />
      <YAxis />
      <Tooltip />
      <Legend />
      <XAxis dataKey='name' />
    </LineChart>
    </div>
  </Grid>
  <Grid item xs={12} sm={6} md={6} border='1px solid red'>
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
 <RadarChart
      cx={300}
      cy={250}
      outerRadius={150}
      width={600}
      height={500}
      data={radarChartData}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey='subject' />
      <PolarRadiusAxis />
      <Radar
        name='Mike'
        dataKey='A'
        stroke='8884d8'
        fill='#8884d8'
        fillOpacity={0.6}
      />
    </RadarChart>
    </div>
 </Grid>

  <Grid item xs={12} sm={12} md={12}>
  <Box sx={{display:{md: 'flex', xs: 'flex'}, 
  flexDirection:{md: 'row', xs: 'column'}, 
  alignItem:{md: 'center', xs: 'center'},
  justifyContent:{md: 'center', xs: 'center'}
   }}>
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
    </Box>
  </Grid>

    </Grid>

    </Box>
    </ThemeProvider>
</div>)
}



const Card = (props: personObjTypes) =>{


  return(
    <Box sx={{
      backgroundColor: 'rgb(240, 240, 255)',
      borderBottom: '3px solid rgb(72, 61, 139)',
      borderLeft: '2px solid rgb(72, 61, 139)',
      minWidth: '200px',
      maxWidth: '200px',
      height: '200px',
      padding: '15px',
      margin: '10px',
      borderRadius: '10px'}}>
      <div style={{display:'flex', justifyContent: 'space-between'}}>

        <div>
      <h2 style={{opacity: '90%', color: 'rgb(72, 61, 139)'}}>{props.name}</h2>
      <p style={{opacity: '70%', color: 'rgb(72, 61, 139)'}}>{props.job}</p>
      </div>

      <div style={{width:'50px', height:'50px', borderRadius:'50px'}}>
      <img src={props.picture} alt='propic' style={{width: '50px', borderRadius: '50px', objectFit: 'contain', border: '2px solid rgb(255,255,255)'}}/>
      </div>

      </div>
      <p style={{color: 'rgb(72, 61, 139)'}}>Phone: {props.number} </p>
    </Box>
  )
}



export default Dashboard;
