import { useState } from "react";
import { CssBaseline } from "@mui/material";
import MaterialTable from "material-table";


const TablePage = () =>{
    const [tableData, setTableData] = useState([]);
    const columns=[
        {title: 'First', field: 'first'},
        {title: 'Second', field: 'second'},
        {title: 'Third', field: 'third'},
        {title: 'Fourth', field: 'fourth'},
    ];

    return(<div>
        <CssBaseline />
        <MaterialTable columns={columns} data={tableData} title='demo title' />
    </div>)
};

export default TablePage; 