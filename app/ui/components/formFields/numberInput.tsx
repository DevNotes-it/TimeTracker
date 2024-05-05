import { Input, TextField } from '@mui/material';
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

type TextInputProps = {
  name: string;
  label: string;
  useFullWidth: boolean;
  size: 'small' | 'normal';
}

export const NumberInput = ({ name, label, size = 'normal', useFullWidth = true }: TextInputProps) => {
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
          size={size}
          fullWidth={useFullWidth}
          type="number"
        />
      )}
    />
  )
}