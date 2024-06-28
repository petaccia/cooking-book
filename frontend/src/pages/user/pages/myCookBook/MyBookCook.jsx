import React, { useContext } from 'react';
import { UserContext } from '../../../../contexts/UserContext';
import BookCover from './components/BookCover/BookCover';

const MyBookCook = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="flex flex-col h-screen md:max-w-screen-sm mx-auto bg-white">
      <div className="container md:max-w-screen-md mx-auto p-4  rounded-lg ">
        <h1 className="text-3xl font-serif text-orange-800 text-center mb-8">Mon Livre de Cuisine</h1>
        <BookCover user={user} />
      </div>
    </div>
  );
};

export default MyBookCook;
