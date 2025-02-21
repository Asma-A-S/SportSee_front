import { useUser } from '../services/UserProvider'
function NutrientCards({ icone, name }) {
    const { userMainData, loading } = useUser()

    if (loading) return <p>Chargement des données...</p>
    const nutrientValues = {
        Calories: `${userMainData.calories} kCal`,
        Proteines: `${userMainData.proteines} g`,
        Glucides: `${userMainData.glucides} g`,
        Lipides: `${userMainData.lipides} g`,
    }
    return (
        <div className="calories">
            <img
                src={icone}
                alt="icone indicateur"
                className="calories_icone"
            />
            <div className="calories_infos">
                <p className="calories_value">{nutrientValues[name]}</p>
                <p className="calories_name">{name}</p>
            </div>
        </div>
    )
}
export default NutrientCards
