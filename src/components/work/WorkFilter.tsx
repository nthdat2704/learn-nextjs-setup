import { WorkFilterPayload } from '@/models'
import { Search } from '@mui/icons-material'
import { Box, InputAdornment, debounce } from '@mui/material'
import { useForm } from 'react-hook-form'
import { InputField } from '../form'
import { ChangeEvent } from 'react'

type WorkFilterProps = {
    initialValue?: WorkFilterPayload;
    onSubmit?: (payload: any) => void
}

const WorkFilter = ({ onSubmit, initialValue }: WorkFilterProps) => {

    const { control, handleSubmit, formState: { isSubmitting } } = useForm<WorkFilterPayload>({
        defaultValues: {
            search: '',
            ...initialValue
        },
    })

    const handleLoginSubmit = async (values: WorkFilterPayload) => {
        //nếu gọi api thì phải make func này thành async func thì isSubmitting 
        // mới hoạt động đúng, nếu không nó sẽ run 1 loạt và kết thúc 
        await onSubmit?.(values)
    }
    const debounceSearchChange = debounce(handleSubmit(handleLoginSubmit), 350)


    return (
        <Box component="form" onSubmit={handleSubmit(handleLoginSubmit)}>
            <InputField control={control} name="search" placeholder='search work by title'
                InputProps={
                    {
                        endAdornment: (
                            < InputAdornment position="end" >
                                <Search />
                            </InputAdornment>
                        )
                    }

                }
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    debounceSearchChange()
                }}
            />
        </Box >
    )
}
export default WorkFilter
