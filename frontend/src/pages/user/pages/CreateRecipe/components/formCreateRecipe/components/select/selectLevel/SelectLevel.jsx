import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';

const SelectLevel = ({register, errors}) => {

const levels = ["Facile", "Moyen", "Difficile"];
const level = levels.map((level) => <option key={level}>{level}</option>);

  return (
    <div>
            <label htmlFor="level" className="flex items-center text-sm font-medium text-orange-700">
              <FontAwesomeIcon icon={faChartBar} className="mr-2" />
              Niveau de difficulté
            </label>
            <select {...register('level')} id="level" className="mt-1 block w-full rounded-md border-orange-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200 focus:ring-opacity-50">
              <option value="">Sélectionnez un niveau</option>
              {level}
            </select>
            {errors.level && <p className="mt-1 text-sm text-red-600">{errors.level.message}</p>}
          </div>
  )
}

export default SelectLevel