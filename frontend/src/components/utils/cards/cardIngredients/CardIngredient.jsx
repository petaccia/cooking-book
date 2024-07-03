import React from 'react';

const CardIngredient = ({ ingredient }) => {
  return (
    <div className="flex flex-col items-center mb-6">
      <div className='card-ingredient bg-white rounded-lg shadow-lg p-4 flex flex-col items-center transition-transform hover:scale-105 w-full'>
        <img 
          src={ingredient.ingredientId.image} 
          alt={ingredient.ingredientId.name}
          className='w-16 h-16 object-cover rounded-full border-2 border-orange-300 mb-3' 
        />
        <h3 className='text-center font-semibold text-orange-800 truncate w-full'>
          {ingredient.ingredientId.name}
        </h3>
      </div>
      <div className='card-quantity bg-orange-100 rounded-full shadow-xl shadow-orange-800 px-4 py-2 mt-4 flex justify-center'>
        <p className='font-medium text-orange-800'>{ingredient.quantity}</p>
      </div>
    </div>
  );
};

export default CardIngredient;