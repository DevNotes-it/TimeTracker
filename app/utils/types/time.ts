import { z } from "zod";
import { DateTime } from 'luxon';



const NewTimeSchemaBase = z.object({
  start: z.date().optional(),
  end: z.date().optional(),
  duration: z.number().optional(),
})

export const NewTimeSchema = NewTimeSchemaBase.refine(value => {
  const { start, end, duration } = value;
  if ((start && end) || duration) {
    return true;
  }
  throw new Error("Either start and end time or duration must be provided");
});

export type NewTime = z.infer<typeof NewTimeSchema>;

/**
 * Used to store time information
 * User can provide start and end time, then duration will be calculated
 * or user can provide only duration then start and end time will be empty
 * @param start - start time
 * @param end - end time
 * @param duration - duration in minutes
 */
export const TimeSchema = NewTimeSchemaBase.merge(z.object({
  id: z.string().uuid(),
}))

export type Time = z.infer<typeof TimeSchema>;
