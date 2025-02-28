/**
 * formater et modélier les données avant de les utiliser dans les graphiques
 */
export class UserMainData {
    constructor(data) {
        this.userId = data.id
        this.firstName = data.userInfos.firstName
        this.score = data.todayScore * 100 || data.score * 100
        this.calories = data.keyData.calorieCount
        this.proteines = data.keyData.proteinCount
        this.glucides = data.keyData.carbohydrateCount
        this.lipides = data.keyData.lipidCount
    }
}

export class UserActivity {
    constructor(data) {
        this.userId = data.userId
        this.sessions = data.sessions.map((session) => ({
            day: new Date(session.day).getDate(),
            kilogram: session.kilogram,
            calories: session.calories,
        }))
    }
}

export class UserAverageSessions {
    constructor(data) {
        this.userId = data.userId
        this.sessions = data.sessions.map((session) => ({
            day: this.getDayLetter(session.day),
            sessionLength: session.sessionLength,
        }))
    }
    getDayLetter(day) {
        const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
        return days[day - 1] || ''
    }
}

export class UserPerformance {
    constructor(data) {
        this.userId = data.userId
        this.frenchKinds = {
            1: 'Cardio',
            2: 'Énergie',
            3: 'Endurance',
            4: 'Force',
            5: 'Vitesse',
            6: 'Intensité',
        }
        this.data = data.data
            .map((item) => ({
                kind: this.getKind(item.kind),
                value: item.value,
            }))
            .reverse()
    }

    getKind(frenchKind) {
        return this.frenchKinds[frenchKind] || ''
    }
}
