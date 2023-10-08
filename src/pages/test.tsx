import { MainLayout } from "@/components/layout"
import React from "react"
import { Path, useForm, UseFormRegister, SubmitHandler } from "react-hook-form"


interface IFormValues {
    "First Name": string
    Age: number
}


type InputProps = {
    label: Path<IFormValues>
    register: UseFormRegister<IFormValues>
    required: boolean
}


// The following component is an example of your existing Input Component
const Input = ({ label, register, required }: InputProps) => (
    <>
        <label>{label}</label>
        <input {...register(label, { required })} />
    </>
)


// you can use React.forwardRef to pass the ref too
const Select = React.forwardRef<
    HTMLSelectElement,
    { label: string } & ReturnType<UseFormRegister<IFormValues>>
>((props, ref) => {
    console.log(ref);
    console.log(props, props);


    return (
        <div>dsa</div>
        // <>
        //     <label>{label}</label>
        //     <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
        //         <option value="20">20</option>
        //         <option value="30">30</option>
        //     </select>
        // </>
    )
})


const App = () => {
    const { register, handleSubmit } = useForm<IFormValues>()


    const onSubmit: SubmitHandler<IFormValues> = (data) => {
        console.log('ddata', data);

    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input label="First Name" register={register} required />
            <Select label="zz"  {...register("cc")} />
            <input type="submit" />
        </form>
    )
}
App.Layout = MainLayout
export default App
