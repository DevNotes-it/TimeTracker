import { TextField } from '@mui/material';
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

type TextInputProps = {
  name: string;
  label: string;
}

export const TextInput = ({ name, label }: TextInputProps) => {
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
        <TextField
          value={value}
          label={label}
          helperText={error ? error.message : null}
          error={!!error}
          onChange={onChange}
          margin='normal'
          variant="outlined"
          fullWidth
        />
      )}
    />
  )
}