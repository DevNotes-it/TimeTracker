'use client'
import React, { createContext, useContext, useReducer } from 'react';
import { Task } from '../types/task';
import { Time } from '../types/time';
import { STATUS } from '../types/status';
import { tasks as mockedTasks } from '../../mocks/tasks.mock';

interface TasksContextType {
  tasks: Task[];
  dispatch: React.Dispatch<Action>;
}

type Action =
  | { type: 'ADD_TASK'; task: Task }
  | { type: 'DELETE_TASK'; taskId: string }
  | { type: 'ADD_TIME'; taskId: string; time: Time }
  | { type: 'CHANGE_STATUS'; taskId: string; status: STATUS };

const TasksContext = createContext<TasksContextType | undefined>(undefined);

const taskReducer = (state: Task[], action: Action): Task[] => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.task];
    case 'DELETE_TASK':
      return state.filter(task => task.id !== action.taskId);
    case 'ADD_TIME':
      return state.map(task => task.id === action.taskId ? { ...task, times: [...task.times, action.time] } : task);
    case 'CHANGE_STATUS':
      return state.map(task => task.id === action.taskId ? { ...task, status: action.status } : task);
    default:
      return state;
  }
};

export const TasksProvider = ({ children }: React.PropsWithChildren) => {
  const [tasks, dispatch] = useReducer(taskReducer, mockedTasks);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasksReducer = (): TasksContextType => {
  const context = useContext(TasksContext);
  if (context === undefined) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
};