import React from 'react'

  const ErrorMessage = ({ message }) => {
  
  return (
    message && <p className="text-red-600 mb-4">{message}</p>
  )
}

export default ErrorMessage