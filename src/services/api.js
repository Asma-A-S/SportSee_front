import axios from 'axios'
import mockData from '../__mocks__/mockData.js'
const base_URL = 'http://localhost:3000'
const api = axios.create({
    baseURL: base_URL,
})

/**
 * Récupérer les données de l'utilisateur depuis l'API ou le mock, selon l'environnement
 * @param {string} url - l'url de l'api
 * @param {string} mockKey - la clé des données mockées
 * @param {number} userId - l'ID de l'utilisateur
 * @returns {Promise<Object>} les données de l'utilisateur
 */
const axiosData = async (url, mockKey, userId) => {
    try {
        const useMock = import.meta.env.VITE_USE_MOCK === 'true'
        if (useMock) {
            const data = mockData[mockKey]
            const userIdNumber = parseInt(userId, 10)
            const result = data.find(
                (user) =>
                    user.id === userIdNumber || user.userId === userIdNumber
            )
            console.log('données utilisées: données mockées')
            return result
        }
        const response = await api.get(url)
        console.log('données utilisées: données api')
        return response.data.data
    } catch (err) {
        console.error('Erreur lors de la récupération des données: ', err)
    }
}
/**
 *
 * @param {number} userId
 * @returns {Promise<Object>} les informations de l'utilisateur
 */
export const getUserMainData = async (userId) => {
    return axiosData(`/user/${userId}`, 'USER_MAIN_DATA', userId)
}
/**
 *
 * @param {number} userId
 * @returns {Promise<Object>} les données de l'activité de l'utilisateur
 */
export const getUserActivity = async (userId) => {
    return axiosData(`/user/${userId}/activity`, 'USER_ACTIVITY', userId)
}
/**
 *
 * @param {number} userId
 * @returns {Promise<Object>} les données des sessions de l'utilisateur
 */
export const getUserAverageSessions = async (userId) => {
    return axiosData(
        `/user/${userId}/average-sessions`,
        'USER_AVERAGE_SESSIONS',
        userId
    )
}
/**
 *
 * @param {number} userId
 * @returns {Promise<Object>} les données de la performance de l'utilisateur
 */
export const getUserPerformance = async (userId) => {
    return axiosData(`/user/${userId}/performance`, 'USER_PERFORMANCE', userId)
}
