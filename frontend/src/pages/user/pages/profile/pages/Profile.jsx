import React from 'react';
import ProfileForm from '../components/profileForm/ProfileForm';

const Profile = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="md:max-w-2xl">
        <ProfileForm />
      </div>
    </div>
  );
};

export default Profile;
