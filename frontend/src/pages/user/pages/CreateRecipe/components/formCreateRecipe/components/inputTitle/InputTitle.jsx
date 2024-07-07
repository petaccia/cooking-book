import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'

const InputTitle = ({register, errors}) => {
  return (
    <div>
            <label htmlFor="title" className="flex items-center text-sm font-medium text-orange-700">
              <FontAwesomeIcon icon={faUtensils} className="mr-2" />
              Nom de la recette
            </label>
            <input {...register('title')} type="text" id="title" className="mt-1 block w-full rounded-md border-orange-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200 focus:ring-opacity-50" />
            {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>}
          </div>
  )
}

export default InputTitle