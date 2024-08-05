import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// Sort teams by record
const sortTeamsByRecord = (teams) => {
    return teams.sort((a, b) => {
      const [aWins, aLosses] = a.record.split('-').map(Number);
      const [bWins, bLosses] = b.record.split('-').map(Number);
  
      // Compare wins first, then losses
      if (aWins !== bWins) return bWins - aWins;
      return aLosses - bLosses;
    });
  };

const TeamTable = ({ teams }) => {
  const sortedTeams = sortTeamsByRecord(teams);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Team</TableCell>
            <TableCell>Coach</TableCell>
            <TableCell>Record</TableCell>
            <TableCell>Passing Yards</TableCell>
            <TableCell>Rushing Yards</TableCell>
            <TableCell>Passing TD</TableCell>
            <TableCell>Rushing TD</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedTeams.map((team, index) => (
            <TableRow key={index}>
              <TableCell>{team.name}</TableCell>
              <TableCell>{team.coach}</TableCell>
              <TableCell>{team.record}</TableCell>
              <TableCell>{team.passingYards}</TableCell>
              <TableCell>{team.rushingYards}</TableCell>
              <TableCell>{team.ptd}</TableCell>
              <TableCell>{team.rtd}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TeamTable;
