import { useEffect, useState } from "react"


const localCache = {}

export const useFetch = (url) => {

    const [state, setState] = useState({

        data: null,
        isLoading: true,
        hasError: false,
        error: null
    })

    useEffect(() => {
        getFetch()

    }, [url])

    const setLoadingState = () => {

        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: null
        })
    }

    const getFetch = async () => {

        if (localCache[url]) {  //si existe un cache almacenado, usamos esa data y no volvemos a llamar a la peticion HTTP (fetch)
            setState({
                data: localCache[url],
                isLoading: false,
                hasError: false,
                error: null
            })
            return;
        }

        setLoadingState()   // cuando cambiamos de pokemon ejecutamos el loading, ya que el useEffect volvera a renderizar el componente al cambiar la URL
        const resp = await fetch(url)
        if (!resp.ok) {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: resp.status,
                    errorText: resp.statusText
                }
            })
            return;
        }

        // SLEEP -> creamos una promesa solo para que se detenga la ejecucion asincrona y espere un segundo
        await new Promise(resolve => setTimeout(resolve, 1000));

        const data = await resp.json()

        setState({
            data,
            isLoading: false,
            hasError: false,
            error: null
        })

        // creamos un cache donde se guarda la URL como clave del objeto, y luego la data como properties
        localCache[url] = data  // {https://pokemon1: {name: 'Pidgeon', sprites: [], etc}}
    }


    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    }
}
