/**
 * Composant affichant les valeurs nutritionnelles de l'utilisateur (calories, protéines, glucides, lipides)
 * sous forme de cartes avec une icône et un nom de nutriment.
 *
 * @param {Object} props - Les propriétés passées au composant.
 * @param {string} props.icone - L'URL de l'icône à afficher pour le nutriment.
 * @param {string} props.name - Le nom du nutriment à afficher (par exemple, "Calories", "Proteines", "Glucides", "Lipides").
 *
 * @returns {JSX.Element} Un élément JSX représentant une carte avec l'icône et la valeur du nutriment.
 */
function NutrientCards({ icone, name, data }) {
    console.log('cards', data)
    const nutrientValues = {
        Calories: `${data} kCal`,
        Proteines: `${data} g`,
        Glucides: `${data} g`,
        Lipides: `${data} g`,
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
