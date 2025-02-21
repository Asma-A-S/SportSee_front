import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const useEffectGetData = (getDataFunction, userId, ModelClass) => {
    const navigate = useNavigate()
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!userId) {
            navigate('*')
            return
        }
        const getData = async () => {
            try {
                setLoading(true)
                const result = await getDataFunction(userId)
                if (!result) {
                    navigate('*')
                    return
                }
                const formattedData = ModelClass
                    ? new ModelClass(result)
                    : result
                setData(formattedData)
            } catch (err) {
                console.error(err)
                // setError(true)
            } finally {
                setLoading(false)
            }
        }
        getData()
    }, [getDataFunction, userId, navigate, ModelClass])
    return { data, loading }
}
export default useEffectGetData
