import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="w-12 h-12 border-4 border-orange-600 border-t-4 border-t-orange-300 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;