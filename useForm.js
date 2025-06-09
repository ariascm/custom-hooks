import { useState } from "react"


export const useForm = (initialObject) => {

    const [formState, setFormState] = useState(initialObject)

    const onInputChange = ({ target }) => {
        const { name, value } = target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const onResetForm = () => {
        setFormState(initialObject)
    }


    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}