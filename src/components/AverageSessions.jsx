import { useParams } from 'react-router-dom'
import { getUserAverageSessions } from '../services/api'
import useEffectGetData from '../services/useEffectGetData'
import { UserAverageSessions } from '../services/UserDataModel'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Rectangle,
    ResponsiveContainer,
} from 'recharts'
const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div
                className="custom-tooltip"
                style={{
                    backgroundColor: '#fff',
                    width: '39px',
                    height: '25px',
                    border: '1px solid #ccc',
                    textAlign: 'center',
                }}
            >
                <p
                    style={{ fontSize: '8px', fontWeight: '500' }}
                >{`${payload[0].value} min`}</p>
            </div>
        )
    }

    return null
}
const CustomCursor = ({ points }) => {
    return (
        <Rectangle
            fill="#000000"
            opacity={0.2}
            x={points[0].x + 5}
            width={400}
            height={300}
        />
    )
}
function extendData(data) {
    const first = { day: 'fi', sessionLength: data[0].sessionLength }
    const last = {
        day: 'la',
        sessionStorage: data[data.length - 1].sessionLength,
    }
    return [first, ...data, last]
}
function AverageSessions() {
    const { userId } = useParams()
    const { data: userAverageSessions, loading } = useEffectGetData(
        getUserAverageSessions,
        userId,
        UserAverageSessions
    )

    if (loading) return <p>Chargement des données...</p>
    return (
        <div className="chart session">
            <p className="session-title">
                Durée moyenne <br />
                des sessions
            </p>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={[
                        {
                            day: '',
                            sessionLength:
                                userAverageSessions.sessions[0].sessionLength,
                        },
                        ...userAverageSessions.sessions,
                        {
                            day: '',
                            sessionLength:
                                userAverageSessions.sessions[
                                    userAverageSessions.sessions.length - 1
                                ].sessionLength,
                        },
                    ]}
                    margin={{ top: 20, right: 0, left: 0, bottom: 20 }}
                >
                    <defs>
                        <linearGradient
                            id="lineGradient"
                            x1="0"
                            y1="0"
                            x2="1"
                            y2="0"
                        >
                            <stop
                                offset="0%"
                                stopColor="#FFFFFF"
                                stopOpacity={0.4}
                            />{' '}
                            <stop
                                offset="100%"
                                stopColor="#FFFFFF"
                                stopOpacity={1}
                            />{' '}
                        </linearGradient>
                    </defs>
                    <XAxis
                        dataKey="day"
                        tickLine={false}
                        axisLine={false}
                        tick={{ fill: '#FFFFFF', opacity: '0.5' }}
                    />
                    <YAxis hide="true" domain={['dataMin-10', 'dataMax+10']} />
                    <Tooltip
                        cursor={<CustomCursor />}
                        content={<CustomTooltip />}
                    />

                    <Line
                        type="natural"
                        dataKey="sessionLength"
                        stroke="url(#lineGradient)"
                        strokeWidth={1.5}
                        dot={false}
                        activeDot={{ r: 4, fill: '#fff' }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
export default AverageSessions
