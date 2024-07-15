import React from 'react';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import Select from '../../../../../../components/form/Select';

const SelectCookingTime = ({ register, errors }) => {
  // Définir les temps de cuisson
  const COOKING_TIMES = Array.from({ length: 20 }, (_, i) => (i + 1) * 5);

  // Créer les options pour le sélecteur de temps de cuisson
  const cookingTimeOptions = COOKING_TIMES.map(time => ({
    value: time,
    label: `${time} minutes`
  }));

  const { onChange, onBlur, name, ref } = register("cookingTime", { required: "Le temps de cuisson est obligatoire" });

  // Gestion du changement de sélection
  const handleChange = (option) => {
    onChange({
      target: {
        name: "cookingTime",
        value: option.value
      }
    });
  };

  const customClassNames = {
    button: "w-full text-left relative cursor-pointer bg-gradient-to-t from-orange-700 to-orange-300 text-white rounded-lg border-2 border-orange-300 p-3 shadow-md hover:shadow-lg transition-shadow duration-300",
    option: "block w-full px-4 py-2 text-left text-orange-700 hover:bg-orange-100 transition-colors duration-200",
    dropdownContainer: "absolute z-10 w-full bg-white rounded-md shadow-lg mt-1 overflow-auto",
  };

  return (
    <Select
      label="Temps de cuisson (minutes)"
      placeholder="Sélectionnez un temps"
      options={cookingTimeOptions}
      onChange={handleChange}
      onBlur={onBlur}
      name={name}
      inputRef={ref}
      error={errors?.cookingTime?.message}
      customClassNames={customClassNames}
      icon={faClock}
    />
  );
};

export default SelectCookingTime;