import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useFetch() {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        setLoading(true)
        axios.get('https://mocki.io/v1/2407d9ca-fc96-4310-8f8e-e519fe5ff909').then(response => {
            setData(response.data.products)
        }).catch((error) => {
            setError(error)
        }).finally(() => {
            setLoading(false)
        })
    }, []);
    
    return { data, loading, error }


}
