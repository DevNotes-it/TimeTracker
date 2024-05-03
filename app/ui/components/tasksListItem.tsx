import { Task } from '@/utils/types/task';
import { IconButton, ListItem, ListItemText, Paper, styled } from '@mui/material';
import { Delete as DeleteIcon, AccessTime as TimerIcon } from '@mui/icons-material';
import React from 'react'


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
          <IconButton edge="end" aria-label="delete" style={{ margin: '0.5rem' }} >
            <TimerIcon />
          </IconButton>
          <IconButton edge="end" aria-label="delete" style={{ margin: '0.5rem' }}>
            <DeleteIcon />
          </IconButton>
        </>
      }
    >
      <ListItemText primary={task.title} secondary={task.status} />
    </TaskListItem>

  )
}