// src/components/EditableTeamTable.js

import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Box } from '@mui/material';

const initialTeams = [
  { id: 1, name: 'Houston', coach: 'Coleman', record: '0-1', passingYards: 374, rushingYards: 12, ptd: 2, rtd: 1 },
  { id: 2, name: 'Boise State', coach: 'Lasso', record: '1-1', passingYards: 415, rushingYards: 479, ptd: 3, rtd: 6 },
  { id: 3, name: 'Fresno State', coach: 'Freeman', record: '2-1', passingYards: 863, rushingYards: 432, ptd: 10, rtd: 3 },
  { id: 4, name: 'Wake Forest', coach: 'Falco', record: '3-0', passingYards: 806, rushingYards: 630, ptd: 7, rtd: 7 },
  { id: 5, name: 'Buffalo', coach: 'Options', record: '1-2', passingYards: 1096, rushingYards: 246, ptd: 7, rtd: 4 },
  { id: 6, name: 'Rice', coach: 'Alstott', record: '1-1', passingYards: 240, rushingYards: 527, ptd: 3, rtd: 7 },
];

const EditableTeamTable = () => {
  const [teams, setTeams] = useState(initialTeams);

  const handleEditCellChange = ({ id, field, props }) => {
    if (props.value !== undefined) {
      setTeams((prevTeams) =>
        prevTeams.map((team) =>
          team.id === id ? { ...team, [field]: props.value } : team
        )
      );
    }
  };

  const handleDelete = (id) => {
    setTeams((prevTeams) => prevTeams.filter((team) => team.id !== id));
  };

  const handleAdd = () => {
    const newId = teams.length ? Math.max(...teams.map((t) => t.id)) + 1 : 1;
    setTeams((prevTeams) => [
      ...prevTeams,
      { id: newId, name: '', coach: '', record: '', passingYards: 0, rushingYards: 0, ptd: 0, rtd: 0 },
    ]);
  };

  const columns = [
    { field: 'name', headerName: 'Name', width: 150, editable: true },
    { field: 'coach', headerName: 'Coach', width: 150, editable: true },
    { field: 'record', headerName: 'Record', width: 100, editable: true },
    { field: 'passingYards', headerName: 'Passing Yards', width: 150, editable: true },
    { field: 'rushingYards', headerName: 'Rushing Yards', width: 150, editable: true },
    { field: 'ptd', headerName: 'PTD', width: 100, editable: true },
    { field: 'rtd', headerName: 'RTD', width: 100, editable: true },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleDelete(params.row.id)}
        >
          Delete
        </Button>
      ),
    },
  ];

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <Button variant="contained" color="primary" onClick={handleAdd}>
        Add Team
      </Button>
      <DataGrid
        rows={teams}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        onEditCellPropsChange={handleEditCellChange}
      />
    </Box>
  );
};

export default EditableTeamTable;
