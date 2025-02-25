import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

/**
 * Récupérer des données d'une fonction d'API, les formater avec une classe modèle,
 * et gérer l'état de chargement ainsi que la navigation en cas d'erreur ou d'absence d'identifiant utilisateur.
 *
 * @param {Function} getDataFunction Fonction utilisée pour récupérer les données de l'API/données mockées.
 * @param {number} userId Identifiant de l'utilisateur pour récupérer les données associées.
 * @param {Class} ModelClass Classe utilisée pour formater les données reçues, ou null si aucun formatage n'est nécessaire.
 *
 * @returns {Object} Un objet contenant :
 * - `data` : Les données récupérées et formatées, ou null si la récupération échoue.
 * - `loading` : Un booléen indiquant si les données sont en cours de chargement.
 */
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
            } finally {
                setLoading(false)
            }
        }
        getData()
    }, [getDataFunction, userId, navigate, ModelClass])
    return { data, loading }
}
export default useEffectGetData
