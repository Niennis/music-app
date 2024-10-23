'use client'
import { useState } from 'react';
import Link from 'next/link';

import FavButton from './FavButton';

import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';


const rows = [
  { trackId: 1, nombre_tema: 'Snow', nombre_album: 'Jon', preview_url: 35, precio: 35, fecha_lanzamiento: 35 },
  { trackId: 2, nombre_tema: 'Lannister', nombre_album: 'Cersei', preview_url: 42, precio: 35, fecha_lanzamiento: 35 },
  { trackId: 3, nombre_tema: 'Lannister', nombre_album: 'Jaime', preview_url: 45, precio: 35, fecha_lanzamiento: 35 },
  { trackId: 4, nombre_tema: 'Stark', nombre_album: 'Arya', preview_url: 16, precio: 35, fecha_lanzamiento: 35 },
  { trackId: 5, nombre_tema: 'Targaryen', nombre_album: 'Daenerys', preview_url: null, precio: 35, fecha_lanzamiento: 35 },
  { trackId: 6, nombre_tema: 'Melisandre', nombre_album: null, preview_url: 150, precio: 35, fecha_lanzamiento: 35 },
  { trackId: 7, nombre_tema: 'Clifford', nombre_album: 'Ferrara', preview_url: 44, precio: 35, fecha_lanzamiento: 35 },
  { trackId: 8, nombre_tema: 'Frances', nombre_album: 'Rossini', preview_url: 36, precio: 35, fecha_lanzamiento: 35 },
  { trackId: 9, nombre_tema: 'Roxie', nombre_album: 'Harvey', preview_url: 65, precio: 35, fecha_lanzamiento: 35 },
];

const newRows = rows.map(item => ({ ...item, id: item.trackId }))

const paginationModel = { page: 0, pageSize: 5 };

const DataTable = ({ tracks, handleClick }) => {

  const columns = [
    // { field: 'trackId', headerName: 'ID', width: 10 },
    { field: 'nombre_tema', headerName: 'Nombre canción', width: 170 },
    { field: 'nombre_album', headerName: 'Nombre álbum', width: 250 },
    {
      field: 'preview_url', headerName: 'Url preview', width: 250,
      renderCell: (cellValues) => {
        return <Link href={cellValues.row.preview_url} > Link de descarga </Link>
      }
    },
    { field: 'precio', headerName: 'Precio', width: 100 },
    { field: 'moneda', headerName: 'Moneda', width: 100 },
    { field: 'fecha_lanzamiento', headerName: 'Fecha lanzamiento', width: 200 },
    {
      field: 'ranking', headerName: 'Favorito', width: 90,
      renderCell: (cellValues) => <FavButton cellValues={cellValues} handleClick={() => {handleClick(cellValues)}} />
    },
  ];

  return (
    <Paper sx={{ minHeight: '50%', height: 'min-content', width: '90vw', margin: 'auto' }}>
      <DataGrid
        // rows={newRows}
        rows={tracks}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 30]}
        // checkboxSelection
        sx={{ border: 0 }}
        style={{ contentVisibility: 'auto' }}
      />
    </Paper>
  );
}

export default DataTable;