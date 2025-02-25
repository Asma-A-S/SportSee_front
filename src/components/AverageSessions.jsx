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

/**
 * Composant personnalisé pour afficher un tooltip personnalisé dans le graphique.
 *
 * @param {Object} props - Les propriétés du tooltip.
 * @param {boolean} props.active - Indique si le tooltip est actif.
 * @param {Array<Object>} props.payload - Les données associées au tooltip.
 * @returns {JSX.Element|null} Le contenu du tooltip ou null si inactif.
 */
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
/**
 * Composant personnalisé pour le curseur du graphique.
 *
 * @param {Object} props - Les propriétés du curseur.
 * @param {Array<Object>} props.points - Les points du curseur.
 * @returns {JSX.Element} Le composant Rectangle représentant le curseur.
 */
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

/**
 *
 * Utiliser les données des sessions de l'utilisateur pour afficher la durée moyenne de ces sessions dans un graphique en ligne.
 *
 * @returns {JSX.Element} Le composant affichant le graphique des sessions moyennes.
 */
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
