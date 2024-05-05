import { z } from "zod";
import { DateTime } from 'luxon';

type Minutes = number

/**
 * Used to store new time information
 * @param start - start time
 * @param duration - duration in minutes
 * @returns NewTime
 */
export const NewTimeSchema = z.object({
  start: z.unknown().refine(val => val instanceof DateTime, {
    message: 'start must be a DateTime',
  }),
  duration: z.unknown().refine(val => typeof +val === 'number', {
    message: 'Duration must be a number of minutes',
  })
})

export type NewTime = z.infer<typeof NewTimeSchema>;

/**
 * Used to store time information
 * @param id - time id
 * @param start - start time
 * @param duration - duration in minutes
 */
export const TimeSchema = NewTimeSchema.merge(z.object({
  id: z.string().uuid(),
}))

export type Time = z.infer<typeof TimeSchema>;
