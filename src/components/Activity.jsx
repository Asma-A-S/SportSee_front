import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Rectangle,
    ResponsiveContainer,
} from 'recharts'
import { useParams } from 'react-router-dom'
import { getUserActivity } from '../services/api'
import useEffectGetData from '../services/useEffectGetData'
import { UserActivity } from '../services/UserDataModel'

/**
 * Customiser le tooltip.
 * @param {Object} props - Propriétés du composant.
 * @param {boolean} props.active - Indique si le tooltip est actif.
 * @param {Array} props.payload - Données associées au tooltip.
 * @returns {JSX.Element|null} Le tooltip affichant les valeurs en kg et kCal.
 */
const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div
                className="custom-tooltip"
                style={{
                    backgroundColor: '#E60000',
                    color: 'white',
                    height: '63px',
                    width: '39px',
                    padding: '5px',
                    border: '1px solid #ccc',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '7px',
                }}
            >
                <p>{`${payload[0].value} kg`}</p>
                <p>{`${payload[1].value} kCal`}</p>
            </div>
        )
    }

    return null
}

/**
 * Personnaliser le curseur affiché au survol des barres du graphique.
 * @param {Object} props - Propriétés du composant.
 * @param {number} props.x - Position x du curseur.
 * @param {number} props.y - Position y du curseur.
 * @param {number} props.width - Largeur du curseur.
 * @param {number} props.height - Hauteur du curseur.
 * @returns {JSX.Element} Un rectangle semi-transparent servant de curseur.
 */
const CustomCursor = ({ x, y, width, height }) => {
    const cursorWidth = 56
    return (
        <Rectangle
            fill="rgba(196, 196, 196, 0.5)"
            opacity={0.2}
            width={cursorWidth}
            height={height}
            x={x + width / 2 - cursorWidth / 2}
            y={y}
        />
    )
}

/**
 * Composant représentant le graphique d'activité quotidienne sous forme de barre.
 * Il récupère les données d'activité d'un utilisateur et les affiche sous forme de barres.
 * @returns {JSX.Element} Le graphique d'activité.
 */

function Activity() {
    const { userId } = useParams()

    const { data: userActivity, loading } = useEffectGetData(
        getUserActivity,
        userId,
        UserActivity
    )

    if (loading) return <p>Chargement des données...</p>

    return (
        <div className="graph">
            <h2
                style={{
                    position: 'absolute',
                    textAlign: 'left',
                    fontSize: '15px',
                    fontWeight: '500',
                    paddingLeft: '35px',
                    paddingTop: '10px',
                    color: '#20253A',
                    fontSize: '15px',
                    fontWeight: '500',
                }}
            >
                Activité quotidienne
            </h2>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={userActivity.sessions}
                    margin={{ top: 0, right: 40, left: 40, bottom: 20 }}
                    barGap={6}
                >
                    <CartesianGrid strokeDasharray="2" vertical={false} />
                    <XAxis
                        dataKey="day"
                        tickLine={false}
                        scale="point"
                        axisLine={{ fill: '#DEDEDE' }}
                        dy={10}
                        tick={{
                            fill: '#9B9EAC',
                            fontSize: '14px',
                            fontWeight: '500',
                        }}
                        padding={{ left: 10, right: 10 }}
                    />
                    <YAxis
                        yAxisId="kg"
                        orientation="right"
                        domain={['dataMin - 2', 'dataMax + 1']}
                        tick={{ fill: '#9B9EAC', fontSize: '14px' }}
                        axisLine={false}
                        tickLine={false}
                        allowDecimals={false}
                        tickCount={3}
                        dx={30}
                    />
                    <YAxis yAxisId="cal" hide={true} />
                    <Tooltip
                        cursor={<CustomCursor />}
                        content={<CustomTooltip />}
                    />
                    <Legend
                        verticalAlign="top"
                        align="right"
                        iconSize={7}
                        iconType="circle"
                        wrapperStyle={{ paddingBottom: 50 }}
                        formatter={(value) => (
                            <span
                                style={{
                                    color: '#74798C',
                                    marginLeft: '10px',
                                    marginRight: '20px',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                }}
                            >
                                {value}
                            </span>
                        )}
                    />
                    <Bar
                        name="Poids (kg)"
                        yAxisId="kg"
                        dataKey="kilogram"
                        fill="black"
                        barSize={8}
                        radius={[3, 3, 0, 0]}
                    />
                    <Bar
                        name="Calories Brûlées (kCal)"
                        yAxisId="cal"
                        dataKey="calories"
                        fill="red"
                        barSize={8}
                        radius={[3, 3, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Activity
