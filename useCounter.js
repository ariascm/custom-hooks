import { useState } from "react"


export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue)


    const increment = (value = 1) => {
        setCounter((current) => current + value)    //esta es la "manera segura" ya que siempre toma el valor de counter actualizado
    }
    const reset = () => {
        setCounter(initialValue)
    }
    const decrement = (value = 1) => {
        // if (counter === 0) return;
        // setCounter(counter - value)
        setCounter((current) => current - value)

    }

    return {
        counter,
        increment,
        reset,
        decrement
    }

}