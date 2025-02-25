import React from 'react'
import { UserProvider } from '../../services/UserProvider'
import NutrientCards from '../../components/NutrientCards'
import Activity from '../../components/Activity'
import AverageSessions from '../../components/AverageSessions'
import Performance from '../../components/Performance'
import Score from '../../components/Score'
import MainData from '../../components/MainData'

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
    return (
        <UserProvider>
            <MainData />
            <section className="main-graphiques">
                <div className="nutrients">
                    <NutrientCards icone={caloriesIcone} name="Calories" />
                    <NutrientCards icone={proteines} name="Proteines" />
                    <NutrientCards icone={glucides} name="Glucides" />
                    <NutrientCards icone={lipids} name="Lipides" />
                </div>
                <div className="graphiques">
                    <Activity />
                    <div className="graphiques_perf">
                        <AverageSessions />
                        <Performance />
                        <Score />
                    </div>
                </div>
            </section>
        </UserProvider>
    )
}

export default Profil
