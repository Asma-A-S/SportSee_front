import axios from 'axios'
import mockData from '../__mocks__/mockData.js'
const base_URL = 'http://localhost:3000'
const api = axios.create({
    baseURL: base_URL,
})

const axiosData = async (url, mockKey) => {
    if (process.env.NODE_ENV === 'development') {
        console.log(mockData[mockKey])
        return mockData[mockKey]
    }
    const response = await api.get(url)
    return response.data.data
}
export const getUserMainData = async (userId) => {
    console.log('info')
    return axiosData(`/user/${userId}`, 'USER_MAIN_DATA')
}

export const getUserActivity = async (userId) => {
    console.log('activité')
    return axiosData(`/user/${userId}/Activity`, 'USER_ACTIVITY')
}

export const getUserAverageSessions = async (userId) => {
    console.log('SESSIONS')
    return axiosData(
        `/user/${userId}/Average-sessions`,
        'USER_AVERAGE_SESSIONS'
    )
}

export const getUserPerformance = async (userId) => {
    console.log('performance')
    return axiosData(`/user/${userId}/performance`, 'USER_PERFORMANCE')
}
