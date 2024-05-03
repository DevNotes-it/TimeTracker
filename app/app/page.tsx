'use client';
import { Box, Container, Grid, List, ListItem, ListItemText } from '@mui/material';
import { useTasksReducer } from '../utils/reducers/tasks'
import { TasksList } from '@/ui/components/tasksList';

export default function Home() {
  const { tasks } = useTasksReducer()
  return (
    <TasksList />
  )
}

