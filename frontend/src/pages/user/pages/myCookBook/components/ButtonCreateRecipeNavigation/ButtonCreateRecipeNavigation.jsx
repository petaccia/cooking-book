import React from 'react'
import { Link } from 'react-router-dom'

const ButtonCreateRecipeNavigation = () => {
  return (
    <>
      <Link to="/user/create-recipe"
        className="bg-orange-100 hover:bg-orange-800 hover:text-orange-100 text-sepia-800 font-bold py-2 px-4 rounded-md">
        Créer une recette
      </Link>
    </>
  )
}

export default ButtonCreateRecipeNavigation