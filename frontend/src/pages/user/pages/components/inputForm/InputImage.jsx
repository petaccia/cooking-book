import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'

const InputImage = ({register, errors}) => {
  return (
    <div>
            <label htmlFor="image" className="flex items-center text-sm font-medium text-orange-700">
              <FontAwesomeIcon icon={faImage} className="mr-2" />
              Image (URL)
            </label>
            <input {...register('image')} type="text" id="image" className="mt-1 block w-full rounded-md border-orange-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200 focus:ring-opacity-50" />
            {errors.image && <p className="mt-1 text-sm text-red-600">{errors.image.message}</p>}
          </div>
  )
}

export default InputImage