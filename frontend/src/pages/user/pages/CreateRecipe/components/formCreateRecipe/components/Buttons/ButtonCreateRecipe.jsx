import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'

const ButtonCreateRecipe = () => {
  return (
    <div>
    <button type="submit" className="w-full bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition duration-300 flex items-center justify-center">
      <FontAwesomeIcon icon={faUtensils} className="mr-2" />
      Créer la recette
    </button>
  </div>

  )
}

export default ButtonCreateRecipe