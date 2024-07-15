// Importation des dépendances nécessaires
import React, { useEffect, useRef, useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown} from "@fortawesome/free-solid-svg-icons";

// Composant Select
const Select = ({ options, onChange, label, icon, value, placeholder, customClassNames = {}, error }) => {
  const [isOpen, setIsOpen] = useState(false); // État pour gérer l'ouverture/fermeture du menu déroulant
  const [selectedOption, setSelectedOption] = useState(null); // État pour gérer l'option sélectionnée
  const dropdownRef = useRef(null); // Référence pour le menu déroulant

  // Gestion des clics en dehors du menu déroulant
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Gestion de la sélection d'une option
  const handleOptionClick = useCallback((option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onChange) onChange(option);
  }, [onChange]);

  const toggleDropdown = useCallback((e) => {
    e.preventDefault();
    const scrollPosition = window.scrollY;
    setIsOpen(!isOpen);
    setTimeout(() => {
      window.scrollTo(0, scrollPosition);
    }, 0);
  }, [isOpen]);
  // Styles de base pour les classNames
  const defaultClassNames = {
    container: "relative",
    label: "flex items-center text-sm font-medium text-orange-700 mb-2",
    iconLabel: "ml-2 text-orange-500",
    button: "w-full text-left relative cursor-pointer bg-gradient-to-r from-orange-100 to-orange-200 rounded-lg border-2 border-orange-300 p-3 shadow-md hover:shadow-lg transition-shadow duration-300",
    icon: "absolute right-3 top-1/2 transform -translate-y-1/2 transition-transform duration-300",
    dropdownContainer: "absolute z-10 w-full bg-white rounded-md shadow-lg mt-1",
    option: "block w-full px-4 py-2 text-left hover:bg-orange-50 transition-colors duration-200",
    error: "mt-2 text-sm text-red-600"
  };

  // Fusion des styles par défaut et personnalisés
  const mergedClassNames = Object.keys(defaultClassNames).reduce((acc, key) => {
    acc[key] = `${defaultClassNames[key]} ${customClassNames[key] || ''}`;
    return acc;
  }, {});

  return (
    <div className={mergedClassNames.container}>
      <label id={`${label}-label`} className={mergedClassNames.label}>
        {label}
        <FontAwesomeIcon icon={icon} className={mergedClassNames.iconLabel} />
      </label>
      <button
        className={mergedClassNames.button}
        onClick={toggleDropdown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-labelledby={`${label}-label`}
      >
        {selectedOption ? selectedOption.label : placeholder}
        <FontAwesomeIcon
          className={`${mergedClassNames.icon} ${isOpen ? 'rotate-180' : ''}`}
          icon={faAngleDown}
          size="sm"
        />
      </button>
      {isOpen && (
        <div
          className={mergedClassNames.dropdownContainer}
          ref={dropdownRef}
          style={{ maxHeight: '200px', overflowY: 'auto' }}
          role="listbox"
          aria-labelledby={`${label}-label`}
        >
          {options.map((option) => (
            <div
              key={option.value}
              className={mergedClassNames.option}
              onClick={() => handleOptionClick(option)}
              role="option"
              aria-selected={selectedOption && selectedOption.value === option.value}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
      {error && <p className={mergedClassNames.error}>{error}</p>}
    </div>
  );
};

export default Select;
