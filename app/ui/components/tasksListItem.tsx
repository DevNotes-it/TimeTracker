import { Task } from '@/utils/types/task';
import { IconButton, ListItem, ListItemText, Typography, styled } from '@mui/material';
import {
  Delete as DeleteIcon,
  AccessTime as TimerIcon,
  Start as StartIcon,
  StopCircle as StopIcon,
} from '@mui/icons-material';
import React from 'react'
import { STATUS } from '@/utils/types/status';


const TaskListItem = styled(ListItem)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(2),
  marginBottom: theme.spacing(1),
  ...theme.typography.body2,
  backgroundColor: theme.palette.background.paper,
  textAlign: 'left',
}));

type TasksListItemProps = {
  task: Task;
}

export const TasksListItem = ({ task }: TasksListItemProps) => {
  return (
    <TaskListItem
      secondaryAction={
        <>
          {
            task.status === STATUS.TODO &&
            <IconButton edge="end" aria-label="delete" style={{ margin: '0.5rem' }} title='Start'>
              <StartIcon />
            </IconButton>
          }
          {
            task.status === STATUS.IN_PROGRESS &&
            <>
              <IconButton edge="end" aria-label="delete" style={{ margin: '0.5rem' }} title='Register time'>
                <TimerIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete" style={{ margin: '0.5rem' }} title='Close task'>
                <StopIcon />
              </IconButton>
            </>
          }
          {
            task.status !== STATUS.IN_PROGRESS &&
            <IconButton edge="end" aria-label="delete" style={{ margin: '0.5rem' }} title='Delete task'>
              <DeleteIcon />
            </IconButton>
          }
        </>
      }
    >
      <ListItemText
        primary={`${task.code} ::  ${task.title} ( ${task.times.reduce((acc, time) => acc, 0)} hours)`}
        secondary={`${task.description}`}
      />

    </TaskListItem>

  )
}