import React, { ChangeEvent, useState } from 'react';
import Link from 'next/link'; // Import Link from next/link


// Define types for state
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

  // Handle file input change
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

  // Handle checkbox changes
  const handleServiceChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setServices((prevServices) => ({
      ...prevServices,
      [name as keyof Services]: checked,
    }));
  };

  // Handle textarea changes
  const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>Profile Settings</h1>

      {/* Link to go back to the home page */}
      <Link href="/">
        <a style={{ display: 'block', marginBottom: '20px' }}>Back to Home</a>
      </Link>

      {/* Profile Photo Section */}
      <div>
        <h2>Profile Photo</h2>
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
          style={{ display: 'block', margin: '10px 0' }}
        />
        {profilePhoto && (
          <img
            src={profilePhoto as string}
            alt="Profile"
            style={{ width: '150px', height: '150px', borderRadius: '50%' }}
          />
        )}
      </div>

      {/* Services Section */}
      <div>
        <h2>Services</h2>
        <div>
          <label>
            <input
              type="checkbox"
              name="childcare"
              checked={services.childcare}
              onChange={handleServiceChange}
            />
            Childcare
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="elderlyCare"
              checked={services.elderlyCare}
              onChange={handleServiceChange}
            />
            Elderly Care
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="companionship"
              checked={services.companionship}
              onChange={handleServiceChange}
            />
            Companionship
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="housekeeping"
              checked={services.housekeeping}
              onChange={handleServiceChange}
            />
            Housekeeping
          </label>
        </div>
      </div>

      {/* Description Section */}
      <div>
        <h2>Description</h2>
        <textarea
          value={description}
          onChange={handleDescriptionChange}
          rows={10}
          style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
        />
      </div>
    </div>
  );
};

export default ProfileSettings;
