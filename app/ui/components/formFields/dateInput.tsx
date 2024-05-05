import { Stack, Typography } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers';
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

type DateTimeInputProps = {
  name: string;
  label: string;
  useFullWidth: boolean;
  size: 'small' | 'normal';
}

export const DateTimeInput = ({ name, label, size = 'normal', useFullWidth = true }: DateTimePickerProps) => {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={(
        {
          field: { onChange, value },
          fieldState: { error },
          formState,
        }
      ) => (
        <Stack>
          <DateTimePicker
            value={value}
            label={label}
            helperText={error ? error.message : null}
            error={!!error}
            onChange={(e) => { console.log(e); onChange(e); }}
            margin='normal'
            variant="outlined"
            size={size}
            fullWidth={useFullWidth}
          />
          {error && <Typography color='error'>{error.message}</Typography>}
        </Stack>
      )
      }
    />
  )
}