'use client'

import {useForm} from "react-hook-form";
import {useRouter} from "next/navigation";
import {joiResolver} from "@hookform/resolvers/joi";
import {titleValidator} from "@/validators/titleValidator";

type Props={
    title: string
}

const FormComponent =()=>{

 const router = useRouter()

       const {register, handleSubmit, reset, formState: {errors, isValid}}  = useForm<Props>({mode: 'all', resolver: joiResolver(titleValidator)})

    const customHandler = ({title}: Props)=>{
        const updated = new URLSearchParams()
        updated.set('query', title)
        updated.set('page', '1')
        router.push(`/?${updated.toString()}`)
        reset()
    }
    return(
        <div >
            <form onSubmit={handleSubmit(customHandler)}>
                <label>
                <input className='w-72 mt-2 ml-44 mb-4 pl-10 pr-4 py-0 border border-violet-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition' type='text' {...register('title')} placeholder={'introduce title of movie'}/>
                    {errors.title && <div>{errors.title.message}</div>}
                </label>
                <button className='w-14 ml-3  bg-fuchsia-900 mt-7' disabled={!isValid}>click</button>
            </form>
        </div>
    )
}
export default FormComponent