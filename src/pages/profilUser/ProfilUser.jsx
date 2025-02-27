import React from 'react'
import { useParams } from 'react-router-dom'
import NutrientCards from '../../components/NutrientCards'
import Activity from '../../components/Activity'
import AverageSessions from '../../components/AverageSessions'
import Performance from '../../components/Performance'
import Score from '../../components/Score'
import MainData from '../../components/MainData'
import {
    getUserMainData,
    getUserActivity,
    getUserAverageSessions,
    getUserPerformance,
} from '../../services/api'

import useEffectGetData from '../../services/useEffectGetData'
import {
    UserMainData,
    UserActivity,
    UserAverageSessions,
    UserPerformance,
} from '../../services/UserDataModel'

//importer icones
import caloriesIcone from '../../assets/calories-icon.png'
import proteines from '../../assets/protein-icon.png'
import glucides from '../../assets/carbs-icon.png'
import lipids from '../../assets/fat-icon.png'

/**
 * Composant affichant le profil de l'utilisateur avec différentes sections :
 * - Données principales de l'utilisateur
 * - Cartes des nutriments (Calories, Protéines, Glucides, Lipides)
 * - Graphiques d'activité, de sessions moyennes, de performance et de score.
 *
 * @returns {JSX.Element} Le profil complet de l'utilisateur avec des informations et des graphiques associés.
 */
function Profil() {
    const { userId } = useParams()
    const mainData = useEffectGetData(getUserMainData, userId, UserMainData)
    const activityData = useEffectGetData(getUserActivity, userId, UserActivity)
    const averageSessionsData = useEffectGetData(
        getUserAverageSessions,
        userId,
        UserAverageSessions
    )
    const performanceData = useEffectGetData(
        getUserPerformance,
        userId,
        UserPerformance
    )
    if (
        mainData.loading ||
        activityData.loading ||
        averageSessionsData.loading ||
        performanceData.loading
    ) {
        return <p>Chargement des données...</p>
    }
    return (
        <>
            <MainData data={mainData.data.firstName} />
            <section className="main-graphiques">
                <div className="nutrients">
                    <NutrientCards
                        icone={caloriesIcone}
                        name="Calories"
                        data={mainData.data.calories}
                    />
                    <NutrientCards
                        icone={proteines}
                        name="Proteines"
                        data={mainData.data.proteines}
                    />
                    <NutrientCards
                        icone={glucides}
                        name="Glucides"
                        data={mainData.data.glucides}
                    />
                    <NutrientCards
                        icone={lipids}
                        name="Lipides"
                        data={mainData.data.lipides}
                    />
                </div>
                <div className="graphiques">
                    <Activity data={activityData.data.sessions} />
                    <div className="graphiques_perf">
                        <AverageSessions
                            data={averageSessionsData.data.sessions}
                        />
                        <Performance data={performanceData.data.data} />
                        <Score data={mainData.data.score} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profil
