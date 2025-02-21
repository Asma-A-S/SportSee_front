import { getUserMainData } from '../services/api'
import useEffectGetData from '../services/useEffectGetData'
import { UserMainData } from '../services/UserDataModel'
import { useParams } from 'react-router-dom'
import {
    RadialBarChart,
    RadialBar,
    Legend,
    ResponsiveContainer,
} from 'recharts'
function Score() {
    const { userId } = useParams()
    const { data: userMainData, loading } = useEffectGetData(
        getUserMainData,
        userId,
        UserMainData
    )
    if (loading) return <p>Chargement des données...</p>

    const score = userMainData.score * 100
    const scoreData = [{ name: 'Score', value: score, fill: 'red' }]

    return (
        <div className="chart score">
            <p className="score-title">Score</p>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                    cx="50%"
                    cy="50%"
                    innerRadius="70%"
                    outerRadius="90%"
                    data={scoreData}
                    startAngle={90}
                    endAngle={90 + (360 * score) / 100}
                >
                    <circle
                        cx="50%"
                        cy="50%"
                        r="31.3%"
                        fill="white"
                        stroke="white"
                    />
                    <RadialBar
                        dataKey="value"
                        barSize={10}
                        fill="red"
                        stroke="red"
                        isAnimationActive={false}
                        cornerRadius={10}
                    />

                    <Legend
                        iconSize={10}
                        width={120}
                        height={140}
                        layout="vertical"
                        verticalAlign="middle"
                        align="center"
                        content={() => (
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    paddingTop: '20px',
                                }}
                            >
                                <p
                                    style={{
                                        fontSize: '26px',
                                        fontWeight: '700',
                                        marginBottom: '0',
                                    }}
                                >
                                    {userMainData.score * 100}%
                                </p>
                                <p
                                    style={{
                                        fontSize: '16px',
                                        color: '#74798C',
                                        marginTop: '0',
                                        width: '60px',
                                    }}
                                >
                                    de votre objectif
                                </p>
                            </div>
                        )}
                    />
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    )
}
export default Score
