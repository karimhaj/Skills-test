import React from 'react';
import { useEffect } from 'react';
import {   
  LineChart, 
  Line, 
  CartesianGrid, 
  YAxis, 
  XAxis, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  BarChart,
  Bar
 } from 'recharts';
import { 
  CssBaseline, 
  Grid, 
  createTheme, 
  ThemeProvider, 
  Box, 
  Typography
 } from '@mui/material';
import peopleList from '../data/contactList';
import { lineChartData, radarChartData, barChartData } from '../data/chartData'; 


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

const url = 'https://run.mocky.io/v3/026acf14-78aa-4dbc-855e-16eacd0c5bc0';

async function fetcher(url : string){
  try{
    const fetchData = await fetch(url);
    //const dataJson = await fetchData.json();
    console.log(fetchData); 
    return fetchData;
    }
    catch(e){
      console.log(e);
    }
}; 

const Dashboard = () =>{
  useEffect(()=>{
    fetcher(url)
  }, [])

return (<div>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '40px'
    }}>

    <Grid container
    direction='row'
    justifyContent='center'
    spacing={4}>

    <Grid item xs={12} sm={4} md={3} sx={{
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  }}>
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
    <Box sx={{
      marginBottom: '30px'
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

  <Grid item xs={12} sm={8} md={9}>

<Box sx={{
    display: 'flex',
    flexDirection: {md: 'row', xs: 'column'},
    alignItems: {xs: 'center'},
    height: 'max-content'
  }}>
<ResponsiveContainer width='80%' aspect={1}>
  <LineChart width={500} height={500} data={lineChartData}>
      <Line type='monotone' dataKey='firstCompany' stroke='red' />
      <Line type='monotone' dataKey='secondCompany' stroke='#8884d8' />
      <CartesianGrid stroke='gray' />
      <YAxis />
      <Tooltip />
      <Legend />
      <XAxis dataKey='name' />
    </LineChart>
  </ResponsiveContainer>

    <ResponsiveContainer width='100%' aspect={1/1}>
    <RadarChart
      cx={300}
      cy={250}
      outerRadius={150}
      data={radarChartData}
    >
      <PolarGrid/>
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
    </ResponsiveContainer>

    </Box>

    <Box>
      <ResponsiveContainer width="90%" aspect={3 / 1}>
        <BarChart data={barChartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
        </ResponsiveContainer>
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
      marginTop:{md: '20px', xs: '10px'},
      borderRadius: '10px'}}>
      <div style={{display:'flex', justifyContent: 'space-between'}}>

        <div>
      <h2 style={{opacity: '90%', color: 'rgb(72, 61, 139)'}}>{props.name}</h2>
      <p style={{opacity: '70%', color: 'rgb(72, 61, 139)'}}>{props.job}</p>
      </div>

      <div style={{width:'40px', height:'50px', borderRadius:'40px'}}>
      <img src={props.picture} alt='propic' style={{width: '50px', borderRadius: '50px', objectFit: 'contain'}}/>
      </div>

      </div>
      <p style={{color: 'rgb(72, 61, 139)', marginTop: '0'}}>Phone: {props.number} </p>
    </Box>
  )
}



export default Dashboard;
