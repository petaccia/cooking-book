import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

const SelectCookingTime = ({ register, errors }) => {

  // Définir les temps de cuisson
const COOKING_TIMES = Array.from({ length: 20 }, (_, i) => (i + 1) * 5);

  // Créer les options pour le sélecteur de temps de cuisson
  const cookingTimeOptions = COOKING_TIMES.map(time => (
    <option key={time} value={time}>{time}</option>
  ));


  return (
    <div>
            <label htmlFor="tcookingTime" className="flex items-center text-sm font-medium text-orange-700">
              <FontAwesomeIcon icon={faClock} className="mr-2" />
              Temps de cuisson (minutes)
            </label>
            <select {...register('tcookingTime')} id="tcookingTime" className="mt-1 block w-full rounded-md border-orange-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200 focus:ring-opacity-50">
              <option value="">Sélectionnez un temps</option>
              {cookingTimeOptions}
            </select>
            {errors.tcookingTime && <p className="mt-1 text-sm text-red-600">{errors.tcookingTime.message}</p>}
          </div>
  )
}

export default SelectCookingTime