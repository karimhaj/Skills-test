import React from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import { useState } from "react";
import { CssBaseline } from "@mui/material";

interface DataRow {
    id: number;
    descrizione: string; 
    data: string;
    valore1: number;
    valore2: number;
    valore3: number; 
}

const TablePage = () =>{


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
    
    const data = [
        {
            id: 1,
            descrizione: 'Prova 1',
            data: '12-11-2022',
            valore1: 276,
            valore2: 863,
            valore3: 655
        },
        {
            id: 2,
            descrizione: 'Prova 2',
            data: '12-11-2022',
            valore1: 749,
            valore2: 246,
            valore3: 100
        },
        {
            id: 3,
            descrizione: 'Prova 3',
            data: '13-11-2022',
            valore1: 560,
            valore2: 991,
            valore3: 637
        },
        {
            id: 4,
            descrizione: 'Prova 4',
            data: '13-11-2022',
            valore1: 238,
            valore2: 299,
            valore3: 700
        },  {
            id: 5,
            descrizione: 'Prova 5',
            data: '13-11-2022',
            valore1: 650,
            valore2: 30,
            valore3: 177
        },
        {
            id: 6,
            descrizione: 'Prova 6',
            data: '14-11-2022',
            valore1: 600,
            valore2: 480,
            valore3: 200
        },
        {
            id: 7,
            descrizione: 'Prova 7',
            data: '15-11-2022',
            valore1: 500,
            valore2: 127,
            valore3: 98
        },
        {
            id: 8,
            descrizione: 'Prova 8',
            data: '15-11-2022',
            valore1: 562,
            valore2: 372,
            valore3: 15
        },
        {
            id: 9,
            descrizione: 'Prova 9',
            data: '16-11-2022',
            valore1: 949,
            valore2: 354,
            valore3: 277
        },
        {
            id: 10,
            descrizione: 'Prova 10',
            data: '17-11-2022',
            valore1: 300,
            valore2: 725,
            valore3: 408
        }
    ]

    return(<div>
        <CssBaseline />
        <h1>table</h1>
        <DataTable
            columns={columns}
            data={data}
        />
    </div>)
};

export default TablePage; 