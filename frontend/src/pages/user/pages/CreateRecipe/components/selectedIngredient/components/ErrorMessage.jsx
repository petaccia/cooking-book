import React from 'react'

const ErrorMessage = ({ name, errors }) => {
  return errors[name] ? (
    <p className="text-red-600 text-sm mt-1">{errors[name].message}</p>
  ) : null;
};
export default ErrorMessage;