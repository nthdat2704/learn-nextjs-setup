import { TextField, TextFieldProps } from '@mui/material';
import { Control, useController } from 'react-hook-form';
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
    })

    return (
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
    )
}
