import React, { useState, useEffect } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import { TableData } from '../data/chartData';
import { 
    CssBaseline, 
    Grid, 
    createTheme, 
    ThemeProvider, 
    Box, 
    Typography
   } from '@mui/material';

interface DataRow {
    id: number;
    descrizione: string; 
    data: string;
    valore1: number;
    valore2: number;
    valore3: number; 
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

const TablePage = () =>{

    const [tableData, setTableData] = useState([]);
    const [searchedText, setSearchedText] = useState('');

    const columns: TableColumn<DataRow>[] = [
        {
            name: 'ID',
            selector: row => row.id,
        },
        {
            name: 'Descrizione',
            selector: row => row.descrizione,
        },
        {
            name: 'Data',
            selector: row => row.data,
        },
        {
            name: 'Valore 1',
            selector: row => row.valore1,
        },
        {
            name: 'Valore 2',
            selector: row => row.valore2,
        },
        {
            name: 'Valore 3',
            selector: row => row.valore3,
        },
    ];

    let filteredData = TableData?.filter((item)=> item.data?.toLowerCase().includes(searchedText.toLowerCase()));
    

    return(<div>
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{
            margin:{md: '20px', xs: '10px'}
        }}>
        <Typography component='h1' variant='h4' sx={{
            color: 'primary.main',
            mb: '20px'}}>Table page</Typography>
        <input type='number' value={searchedText} onChange={(e: React.FormEvent<HTMLInputElement>)=>{
        setSearchedText(e.currentTarget.value)}} placeholder='search calendar date...' />
        <DataTable
            columns={columns}
            data={filteredData}
            pagination
            noDataComponent={<p>Loading data...</p>}
            responsive
        />
        </Box>
        </ThemeProvider>
    </div>);
};

export default TablePage; 