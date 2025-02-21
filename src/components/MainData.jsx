import { useUser } from '../services/UserProvider'
function MainData() {
    const { userMainData, loading } = useUser()

    if (loading) return <p>Chargement des données...</p>
    return (
        <>
            <div className="main-profil">
                <h1 className="profil">
                    Bonjour{' '}
                    <span className="profil_name">
                        {userMainData?.firstName}
                    </span>
                </h1>
                <p className="profil_texte">
                    Félicitation ! Vous avez explosé vos objectifs hier 👏
                </p>
            </div>
        </>
    )
}
export default MainData
