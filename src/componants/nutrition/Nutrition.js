import React, { useEffect, useState } from 'react';
import CaloriesSvg from '../../assets/calories.svg';
import ProteinesSvg from '../../assets/proteines.svg';
import GlucidesSvg from '../../assets/glucides.svg';
import LipidesSvg from '../../assets/lipides.svg';
import ApiService from '../../utils/ApiService'; // Assure-toi que le chemin est correct
import './nutrition.css';

function Nutrition() {
  const [nutritionData, setNutritionData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const url = process.env.REACT_APP_API_USER;
        const result = await ApiService.get(url);
        setNutritionData(result.data.keyData);
      } catch (error) {
        console.error('Error fetching nutrition data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="cadres-container">
      {nutritionData && (
        <>
          <div className="cadre">
            <div className='iconcalories-block'>
                <img className='icon-calories' src={CaloriesSvg} alt='Calories' />
            </div>
            <div className='text-content'>
                <p className='quantity'>{nutritionData.calorieCount}kcal</p>
                <p className='label'>Calories</p>
            </div>
          </div>
          <div className="cadre">
            <div className='iconproteines-block'>
                <img className='icon-proteines' src={ProteinesSvg} alt='Proteines' />
            </div>
            <div className='text-content'>
                <p className='quantity'>{nutritionData.proteinCount}g</p>
                <p className='label'>Proteines</p>
            </div>
          </div>
          <div className="cadre">
            <div className='iconglucides-block'>
                <img className='icon-glucides' src={GlucidesSvg} alt='Glucides' />
            </div>
            <div className='text-content'>
                <p className='quantity'>{nutritionData.carbohydrateCount}g</p>
                <p className='label'>Glucides</p>
            </div>
          </div>
          <div className="cadre">
            <div className='iconglipides-block'>
                <img className='icon-lipides' src={LipidesSvg} alt='Lipides' />
            </div>
            <div className='text-content'>
                <p className='quantity'>{nutritionData.lipidCount}g</p>
                <p className='label'>Lipides</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Nutrition;