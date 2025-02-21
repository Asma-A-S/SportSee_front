import { createContext, useContext } from 'react'
import useEffectGetData from './useEffectGetData'
import { getUserMainData } from './api'

import { UserMainData } from './UserDataModel'
import { useParams } from 'react-router-dom'

/**
 *Fournit les informations de l'utilisateur
 * @param {Object} props - props du composant
 * @returns {JSX.Element} le provider du contexte utilisateur
 */
const UserContext = createContext()
export function UserProvider({ children }) {
    const { userId } = useParams()
    const { data: userMainData, loading } = useEffectGetData(
        getUserMainData,
        userId,
        UserMainData
    )

    return (
        <UserContext.Provider value={{ userMainData, loading }}>
            {loading ? <p>Chargement des données...</p> : children}
        </UserContext.Provider>
    )
}
/**
 * Hook personnalisé pour accéder au contexte utilisateur.
 * @returns {{ userMainData: Object, loading: boolean }} Les données de l'utilisateur et l'état de chargement.
 */
export function useUser() {
    return useContext(UserContext)
}
