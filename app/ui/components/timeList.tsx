import { Time } from '@/utils/types/time'
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import { DateTime } from 'luxon'
import React from 'react'

type TimeListProps = {
  taskId: string,
  times: Time[]
}


export const TimeList = ({ taskId, times }: TimeListProps) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Start</TableCell>
              <TableCell>End</TableCell>
              <TableCell>Duration</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {times.map(time => (
              <TableRow
                key={time.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{time.start ? time.start.toString() : '-'}</TableCell>
                <TableCell>{time.end ? time.end.toString() : '-'}</TableCell>
                <TableCell>{time.duration}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}