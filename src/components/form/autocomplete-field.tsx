import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { Autocomplete, AutocompleteProps, Checkbox, TextField, TextFieldProps } from '@mui/material';
import { Control, FieldValues, Path, useController } from 'react-hook-form';
type AutocompleteFieldProps<T, K extends FieldValues> = Partial<AutocompleteProps<T, boolean, boolean, boolean>> & {
    name: Path<K>;
    control: Control<K>
    label?: string;
    placeholder?: string
    options: T[]
    getOptionLabel: (option: T) => string
    onChange: (selectedOption: T[]) => void
}

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export const AutocompleteField = <T, K extends FieldValues>({
    name,
    placeholder,
    control,
    label,
    options,
    getOptionLabel,
    isOptionEqualToValue,
    onChange: externalOnChange,
    // onBlur: externalOnBlur,
    // value: externalValue,
    // ref: externalRef,
    ...rest
}: AutocompleteFieldProps<T, K>) => {
    const {
        field: { onChange, onBlur, value, ref },
        fieldState: { error },
    } = useController({
        name,
        control,
    })

    return (
        <Autocomplete
            fullWidth
            size='small'
            multiple
            options={options}
            disableCloseOnSelect
            placeholder={placeholder}
            getOptionLabel={getOptionLabel}
            isOptionEqualToValue={isOptionEqualToValue}
            renderOption={(props, option, { selected }) => (
                <li {...props}>
                    <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                    />
                    {getOptionLabel(option) || "-"}
                </li>
            )}
            renderInput={(params) => (
                <TextField
                    name={name}
                    {...params}
                    label="Filter by category"
                    margin='normal'
                    placeholder={placeholder}
                    error={!!error}
                    helperText={error?.message}
                />

            )}
            onChange={(event, value) => {
                console.log('change', value)
                onChange(value)
                externalOnChange?.(value)
            }}
            onBlur={onBlur}
            value={value}
            ref={ref}
        />
    )
}