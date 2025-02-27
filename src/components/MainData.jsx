//import { useUser } from '../services/UserProvider'
/**
 * Afficher le nom de l'utilisateur ainsin qu'un message de félicitations si l'utilisateur a atteint ses objectifs.
 *
 * Utilise le hook `useUser` pour récupérer les données de l'utilisateur et gérer l'état de chargement.
 *
 * @returns {JSX.Element} Le composant affichant un message personnalisé avec le prénom de l'utilisateur.
 */
function MainData({ data }) {
    console.log('prenom', data)

    return (
        <>
            <div className="main-profil">
                <h1 className="profil">
                    Bonjour <span className="profil_name">{data}</span>
                </h1>
                <p className="profil_texte">
                    Félicitation ! Vous avez explosé vos objectifs hier 👏
                </p>
            </div>
        </>
    )
}
export default MainData
