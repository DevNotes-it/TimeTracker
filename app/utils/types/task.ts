import { z } from 'zod';
import { STATUS } from './status'
import { TimeSchema } from './time';

/**
 * Used to store task information
 */
export const TaskSchema = z.object({
  id: z.string(),
  code: z.string(),
  title: z.string(),
  description: z.string().optional(),
  status: z.nativeEnum(STATUS),
  times: z.array(TimeSchema),
});

export type Task = z.infer<typeof TaskSchema>;


