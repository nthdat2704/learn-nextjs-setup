import { TextField } from '@mui/material';
import React from 'react'
import { Control, useController, Controller } from 'react-hook-form';
import { TextFieldProps } from '@mui/material';
type InputFieldProps = TextFieldProps & {
    name: string;
    label?: string;
    control: Control<any>
}


export const InputField = ({ name,
    label,
    control,
    onChange: externalOnChange,
    onBlur: externalOnBlur,
    value: externalValue,
    ref: externalRef,
    ...rest }: InputFieldProps) => {
    const {
        field: { onChange, onBlur, value, ref },
        fieldState: { error },
    } = useController({
        name,
        control,
        rules: { required: true },
    })

    return (
        <>
            <TextField
                fullWidth
                size='small'
                margin='normal'
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                inputRef={ref}
                label={label}
                error={!!error}
                helperText={error?.message}
                {...rest}

            />
        </>
    )
}
