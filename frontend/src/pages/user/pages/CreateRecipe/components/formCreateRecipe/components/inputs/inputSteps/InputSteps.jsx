import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faListOl, faPlus } from '@fortawesome/free-solid-svg-icons';

const InputSteps = ({ errors, register, setSteps, steps }) => {
  const [currentStep, setCurrentStep] = useState('');

  const handleAddStep = () => {
    if (currentStep.trim() !== '') {
      const newSteps = [...steps, currentStep.trim()];
      setSteps(newSteps);
      setCurrentStep('');
      
    }
  };

  const handleRemoveStep = (index) => {
    const newSteps = steps.filter((_, i) => i !== index);
    setSteps(newSteps);
  };

  const stepsList = steps.map((step, index) => (
    <li key={index} className="flex items-center justify-between bg-orange-50 p-2 rounded">
      <span>{step}</span>
      <button
        type="button"
        onClick={() => handleRemoveStep(index)}
        className="text-red-500 hover:text-red-700"
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </li>
  ));

  return (
    <div>
      <label htmlFor="steps" className="flex items-center text-sm font-medium text-orange-700">
        <FontAwesomeIcon icon={faListOl} className="mr-2" />
        Étapes de préparation
      </label>
      <div className="flex mt-1">
        <input
          type="text"
          value={currentStep}
          onChange={(e) => setCurrentStep(e.target.value)}
          className="flex-grow rounded-l-md border-orange-300 focus:border-orange-500 focus:ring focus:ring-orange-200 focus:ring-opacity-50 px-3"
          placeholder="Ajouter une étape"
        />
        <button
          type="button"
          onClick={handleAddStep}
          className="bg-orange-500 text-white px-4 py-2 rounded-r-md hover:bg-orange-600 transition duration-300"
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      {steps.length > 0 && (
        <ol className="list-decimal list-inside mt-2 space-y-2">
          {stepsList}
        </ol>
      )}
      {errors.steps && <p className="mt-1 text-sm text-red-600">{errors.steps.message}</p>}
      <input type="hidden" {...register('steps')} value={steps} />
    </div>
  );
};

export default InputSteps;
