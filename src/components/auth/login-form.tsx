import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, Button, CircularProgress, IconButton, InputAdornment } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { InputField } from '../form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

type LoginFormProps = {
    onSubmit?: (payload: any) => void
}

export const LoginForm = ({ onSubmit }: LoginFormProps) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const schema = yup.object().shape({
        username: yup.string().required("Username không được để trống").min(4, "User name phải ít nhất là 4 kí tự"),
        password: yup.string().required("Password không được để trống").min(6, "Password phải ít nhất là 4 kí tự")
    })

    const { control, handleSubmit, formState: { isSubmitting } } = useForm({
        defaultValues: {
            username: '',
            password: '',
        },
        resolver: yupResolver(schema)
    })

    const handleLoginSubmit = async (values: any) => {
        //nếu gọi api thì phải make func này thành async func thì isSubmitting 
        // mới hoạt động đúng, nếu không nó sẽ run 1 loạt và kết thúc 

        await onSubmit?.(values)
    }


    const handleClickShowPassword = () => setShowPassword((show) => !show);
    return (
        <Box component="form" onSubmit={handleSubmit(handleLoginSubmit)}>
            <InputField control={control} name="username" label="Username" />
            <InputField
                label="Password"
                control={control}
                name="password"
                type={showPassword ? 'text' : 'password'}
                InputProps={
                    {
                        endAdornment: (
                            < InputAdornment position="end" >
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        )
                    }

                }

            />
            < Button variant='contained' disabled={isSubmitting} fullWidth={true} sx={{
                mt: 2
            }} type='submit' startIcon={isSubmitting ? <CircularProgress color='inherit' size="1em" /> : null} >submit</Button>
        </Box >
    )
}
