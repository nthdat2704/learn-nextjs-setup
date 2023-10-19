import { TextField, TextFieldProps } from '@mui/material';
import { ChangeEvent } from 'react';
import { Control, FieldValues, Path, useController } from 'react-hook-form';
type InputFieldProps<T extends FieldValues> = TextFieldProps & {
    name: Path<T>;
    label?: string;
    control: Control<T>
}


export const InputField = <T extends FieldValues>({ name,
    label,
    control,
    onChange: externalOnChange,
    onBlur: externalOnBlur,
    value: externalValue,
    ref: externalRef,
    ...rest }: InputFieldProps<T>) => {
    const {
        field: { onChange, onBlur, value, ref },
        fieldState: { error },
    } = useController({
        name,
        control,
    })

    return (
        <TextField
            fullWidth
            size='small'
            margin='normal'
            name={name}
            value={value}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
                onChange(event)
                externalOnChange?.(event)
            }}
            onBlur={onBlur}
            inputRef={ref}
            label={label}
            error={!!error}
            helperText={error?.message}
            {...rest}

        />
    )
}
