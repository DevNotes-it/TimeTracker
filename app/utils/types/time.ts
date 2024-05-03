import { z } from "zod";
import { DateTime } from 'luxon';


/**
 * Used to store time information
 * User can provide start and end time, then duration will be calculated
 * or user can provide only duration then start and end time will be empty
 * @param start - start time
 * @param end - end time
 * @param duration - duration in minutes
 */
export const TimeSchema = z.object({
  start: z.optional(z.date()),
  end: z.optional(z.date()),
  duration: z.optional(z.number()),
}).refine(value => {
  const { start, end, duration } = value;
  if ((start && end) || duration) {
    return true;
  }
  throw new Error("Either start and end time or duration must be provided");
});

export type Time = z.infer<typeof TimeSchema>;
