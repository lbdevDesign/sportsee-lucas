import ApiService from './ApiService.jsx';
import mockupData from './mockupData.json'

export const fetchActivity = async () => {
    try {
        let result;
        if (process.env.REACT_APP_API_APIUSE) {
            const url = process.env.REACT_APP_API_ACTIVITY;
            result = await ApiService.get(url);
            const mapData = result.data.sessions.map(data => ({
                day: data.day.toString().slice(-1),
                kilogram: data.kilogram,
                calories: data.calories,
            }));
            return(mapData);
        } else {
            return(mockupData.activity);
        }
    } catch (error) {
    // Gère l'erreur si nécessaire
    }
}

export const fetchRadar = async () => {
    try {
        let result;
        const kind = { 1: 'Cardio', 2: 'Energie', 3: 'Endurance', 4: 'Force', 5: 'Vitesse', 6: 'Intensité' }
        if (process.env.REACT_APP_API_APIUSE) {
            const url = process.env.REACT_APP_API_PERFORMANCE;
            result = await ApiService.get(url);
            const mapData = result.data.data.map(data => ({
              value: data.value,
              kind: kind[data.kind],
            }));
            return(mapData);
        } else {
            return(mockupData.radar);
        }
    } catch (error) {
        console.error('Error fetching pie data:', error);
    }
  }

  export const fetchSession = async () => {
    try {
      let result;
      const day = { 1: 'L', 2: 'M', 3: 'M', 4: 'J', 5: 'V', 6: 'S', 7: 'D' };
      if (process.env.REACT_APP_API_APIUSE) {
        const url = process.env.REACT_APP_API_SESSION;
        result = await ApiService.get(url);
        const mapData = result.data.sessions.map(data => ({
            sessionLength: data.sessionLength,
            day: day[data.day],
          }));
          return mapData;
      } else {
        return mockupData.session;
      }
    } catch (error) {
      console.error('Error fetching session data:', error);
    }
  };

export const fetchScore = async () => {
    try {
        let result;
        if (process.env.REACT_APP_API_APIUSE) {
            const url = process.env.REACT_APP_API_USER;
            result = await ApiService.get(url);
            console.log(result);
            const mapData = result
                ? [
                    { name: 'Group A', value: result.data.todayScore },
                    { name: 'Group B', value: 1 - result.data.todayScore },
                ]
                : [];
                console.log(mapData);
            return mapData;
        } else {
            return(mockupData.score);
        }
    } catch (error) {
        console.error('Error fetching pie data:', error);
    }
}

export const fetchNutrition = async () => {
    try {
        let result;
        if (process.env.REACT_APP_API_APIUSE) {
            const url = process.env.REACT_APP_API_USER;
            result = await ApiService.get(url);
            return(result.data.keyData);
        } else {
            return(mockupData.nutrition);
        }
    } catch (error) {
        console.error('Error fetching nutrition data:', error);
    }
}

export const fetchUser = async () => {
    try {
        let result;
        if (process.env.REACT_APP_API_APIUSE) {
            const url = process.env.REACT_APP_API_USER;
            result = await ApiService.get(url);
            return(result.data.userInfos);
        } else {
            return(mockupData.user);
        }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
}