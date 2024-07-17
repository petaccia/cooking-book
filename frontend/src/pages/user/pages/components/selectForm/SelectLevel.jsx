import React from 'react'
import { faChartBar } from '@fortawesome/free-solid-svg-icons';
import Select from '../../../../../components/form/Select';

const SelectLevel = ({ register, errors }) => {
  const levels = ["Facile", "Moyen", "Difficile"];
  const levelOptions = levels.map((level) => ({
    value: level,
    label: level
  }));

  const customClassNames = {
    button: "w-full text-left relative cursor-pointer bg-gradient-to-t from-orange-700 to-orange-300 text-white rounded-lg border-2 border-orange-300 p-3 shadow-md hover:shadow-lg transition-shadow duration-300",
    option: "block w-full px-4 py-2 text-left text-orange-700 hover:bg-orange-100 transition-colors duration-200",
    dropdownContainer: "absolute z-10 w-full bg-white rounded-md shadow-lg mt-1 overflow-auto",
  };

  const { onChange, onBlur, name, ref } = register("level", { required: "Le niveau est obligatoire" });

  const handleChange = (option) => {
    onChange({
      target: {
        name: "level",
        value: option.value
      }
    });
  };

  return (
    <Select
      label="Niveau de difficulté"
      placeholder="Sélectionnez un niveau"
      options={levelOptions}
      onChange={handleChange}
      onBlur={onBlur}
      name={name}
      inputRef={ref}
      error={errors.level?.message}
      customClassNames={customClassNames}
      icon={faChartBar}
    />
  )
}

export default SelectLevel