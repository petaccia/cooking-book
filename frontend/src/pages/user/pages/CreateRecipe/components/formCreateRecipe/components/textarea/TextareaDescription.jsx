import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListUl } from '@fortawesome/free-solid-svg-icons'

const TextareaDescription = ({ register, errors }) => {
  return (
    <div>
      <label htmlFor="description" className="flex items-center text-sm font-medium text-orange-700">
        <FontAwesomeIcon icon={faListUl} className="mr-2" />
        Description
      </label>
      <textarea {...register('description')} id="description" rows="3" className="mt-1 block w-full rounded-md border-orange-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200 focus:ring-opacity-50"></textarea>
      {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>}
    </div>

  )
}

export default TextareaDescription