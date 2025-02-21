import { useParams } from 'react-router-dom'
import { getUserPerformance } from '../services/api'
import useEffectGetData from '../services/useEffectGetData'
import { UserPerformance } from '../services/UserDataModel'
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
} from 'recharts'
function Performance() {
    const { userId } = useParams()
    const { data: userPerformance, loading } = useEffectGetData(
        getUserPerformance,
        userId,
        UserPerformance
    )
    if (loading) return <p>Chargement des données...</p>
    return (
        <div className="chart performance">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                    cx="50%"
                    cy="50%"
                    outerRadius={'60%'}
                    innerRadius={'5%'}
                    data={userPerformance?.data}
                >
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis
                        dataKey="kind"
                        stroke="white"
                        tick={{
                            className: 'polar-tick',
                            fontWeight: 500,
                        }}
                        tickSize={12}
                        axisLine={false}
                        tickLine={false}
                        dy={4}
                    />
                    <PolarRadiusAxis
                        bandSize={80}
                        axisLine={false}
                        tick={false}
                    />
                    <Radar
                        name="Performance"
                        dataKey="value"
                        stroke="none"
                        fill="#FF0101"
                        fillOpacity={0.7}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}
export default Performance
