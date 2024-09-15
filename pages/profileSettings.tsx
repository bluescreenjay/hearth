import React, { ChangeEvent, useState } from 'react';
import Link from 'next/link';
import Navbar from './navbar';

interface Services {
  childcare: boolean;
  elderlyCare: boolean;
  companionship: boolean;
  housekeeping: boolean;
}

const ProfileSettings: React.FC = () => {
  const [profilePhoto, setProfilePhoto] = useState<string | ArrayBuffer | null>(null);
  const [services, setServices] = useState<Services>({
    childcare: false,
    elderlyCare: false,
    companionship: false,
    housekeeping: false,
  });
  const [description, setDescription] = useState<string>('');

  const handlePhotoChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleServiceChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setServices((prevServices) => ({
      ...prevServices,
      [name as keyof Services]: checked,
    }));
  };

  const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    const data = {
      profilePhoto,
      services,
      description,
    };

    const response = await fetch('/api/saveProfile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert('Profile saved successfully!');
    } else {
      alert('Failed to save profile.');
    }
  };

  return (
    <>
    <Navbar />
    <form onSubmit={handleSubmit} className="profile-settings-container">
     

     <h1 className="rubik-title">Submit A Profile</h1>


      <div className="section">
        <h2 className="section-title">Profile Photo</h2>
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
          className="file-input"
        />
        {profilePhoto && (
          <img
            src={profilePhoto as string}
            alt="Profile"
            className="profile-photo"
          />
        )}
      </div>

      <div className="section">
        <h2 className="section-title">Services</h2>
        <div className="checkbox-group">
          {['childcare', 'elderlyCare', 'companionship', 'housekeeping'].map((service) => (
            <label key={service} className="checkbox-label">
              <input
                type="checkbox"
                name={service}
                checked={services[service as keyof Services]}
                onChange={handleServiceChange}
                className="checkbox-input"
              />
              {service.charAt(0).toUpperCase() + service.slice(1).replace(/([A-Z])/g, ' $1')}
            </label>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Description</h2>
        <textarea
          value={description}
          onChange={handleDescriptionChange}
          rows={6}
          className="description-input"
          placeholder="Write a brief description..."
        />
      </div>

      <button type="submit" className="submit-button">Submit</button>
    </form>
    </>
  );
};

export default ProfileSettings;
