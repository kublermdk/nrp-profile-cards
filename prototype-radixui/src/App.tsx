import { useState, useEffect } from 'react';
import { ProfileCard } from './components/ProfileCard';
import { PersonSelector } from './components/PersonSelector';
import { profilesData, ProfileData } from './utils/profileData';

function App() {
  const [profiles, setProfiles] = useState(profilesData);
  const [selectedPerson, setSelectedPerson] = useState<string>(Object.keys(profilesData)[0]);

  // -- Initialize selected person from URL hash
  useEffect(() => {
    const hash = decodeURIComponent(window.location.hash.slice(1)); // -- Remove the # symbol and decode URL encoding
    if (hash && profilesData[hash]) {
      setSelectedPerson(hash);
    }
  }, []);

  // -- Update URL hash when person is selected
  const handlePersonSelect = (person: string) => {
    setSelectedPerson(person);
    window.location.hash = person;
  };

  // -- Listen for hash changes (back/forward buttons)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = decodeURIComponent(window.location.hash.slice(1));
      if (hash && profilesData[hash]) {
        setSelectedPerson(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const selectedProfile = profiles[selectedPerson];

  // -- Handle profile updates from JSON editor
  const handleProfileUpdate = (profileName: string, updatedProfile: ProfileData) => {
    setProfiles(prev => ({
      ...prev,
      [profileName]: updatedProfile
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          NRP Profile Cards
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Person Selector - Left Sidebar */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <PersonSelector
              profiles={profiles}
              selectedPerson={selectedPerson}
              onPersonSelect={handlePersonSelect}
            />
          </div>
          
          {/* Profile Card - Main Content */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            {selectedProfile && (
              <ProfileCard 
                profile={selectedProfile} 
                profileName={selectedPerson}
                onProfileUpdate={handleProfileUpdate}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

