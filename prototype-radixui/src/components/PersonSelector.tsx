import React from 'react';
import * as Avatar from '@radix-ui/react-avatar';
import { ProfileData } from '../utils/profileData';
import { getStageTheme } from '../utils/themeUtils';
import { cn } from '../utils/cn';

interface PersonSelectorProps {
  profiles: Record<string, ProfileData>;
  selectedPerson: string;
  onPersonSelect: (person: string) => void;
}

export const PersonSelector: React.FC<PersonSelectorProps> = ({
  profiles,
  selectedPerson,
  onPersonSelect
}) => {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg border border-gray-200 sticky top-5">
      <h2 className="text-lg font-semibold text-center mb-4 text-gray-800">
        Select Profile
      </h2>
      
      <div className="space-y-2">
        {Object.entries(profiles).map(([name, profile]) => {
          const theme = getStageTheme(profile.stage.primary);
          const isSelected = selectedPerson === name;
          
          return (
            <button
              key={name}
              onClick={() => onPersonSelect(name)}
              className={cn(
                "w-full rounded-lg p-3 transition-all duration-200 cursor-pointer text-left",
                "hover:shadow-sm hover:-translate-y-0.5",
                isSelected 
                  ? `border-2 ${theme.primary ? `border-[${theme.primary}]` : 'border-blue-500'} ${theme.secondary ? `bg-[${theme.secondary}]` : 'bg-blue-50'}` 
                  : "border border-gray-200 bg-gray-50 hover:bg-gray-100"
              )}
              style={isSelected ? {
                borderColor: theme.primary,
                backgroundColor: theme.secondary
              } : {}}
            >
              <div className="flex items-center gap-3">
                <Avatar.Root className="inline-flex items-center justify-center align-middle overflow-hidden select-none w-8 h-8 rounded-md bg-gray-100">
                  <Avatar.Image
                    className="w-full h-full object-cover rounded-md"
                    src={profile.personalInfo.profilePicture && profile.personalInfo.profilePicture.includes('/') ? profile.personalInfo.profilePicture : undefined}
                    alt={name}
                  />
                  <Avatar.Fallback 
                    className="text-white text-xs font-semibold leading-none flex items-center justify-center w-full h-full"
                    style={{
                      backgroundColor: theme.primary,
                      color: 'white'
                    }}
                  >
                    {name.split(' ').map(n => n[0]).join('')}
                  </Avatar.Fallback>
                </Avatar.Root>
                
                <div className="flex-1 min-w-0">
                  <div className={cn(
                    "text-sm font-medium truncate",
                    isSelected ? (theme.text ? `text-[${theme.text}]` : 'text-gray-800') : 'text-gray-900'
                  )} style={isSelected ? { color: theme.text } : {}}>
                    {name}
                  </div>
                  <div className="flex gap-1 mt-1">
                    <span 
                      className="text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{
                        backgroundColor: theme.primary,
                        color: 'white'
                      }}
                    >
                      {profile.stage.primary}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full font-medium border border-gray-300 text-gray-600">
                      {profile.mbti.type}
                    </span>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

