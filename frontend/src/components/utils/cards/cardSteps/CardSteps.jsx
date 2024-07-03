import React from 'react'

const CardSteps = ({step, index }) => {
  return (
    <div className="card-steps flex flex-col items-center bg-slate-100 rounded-lg shadow-lg p-4 mb-4 hover:shadow-xl transition-shadow duration-300">
      <div className="steps-number bg-orange-500 text-white rounded-full shadow-xl shadow-orange-800 px-4 py-2 mb-4 flex justify-center">
        <h3 className="font-bold text-lg">Étape {index + 1}</h3>
      </div>
      <div className="steps-description w-full text-center">
        <p className="text-gray-700">{step}</p>
      </div>
    </div>
  )
}

export default CardSteps