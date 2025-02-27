import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
} from 'recharts'

/**
 * Afficher la performance de l'utilisateur dans plusieurs domaines sous forme d'un graphique radar.
 *
 * @returns {JSX.Element} Un graphique radar représentant la performance de l'utilisateur dans différentes catégories.
 */
function Performance({ data }) {
    return (
        <div className="chart performance">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                    cx="50%"
                    cy="50%"
                    outerRadius={'60%'}
                    innerRadius={'5%'}
                    data={data}
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
