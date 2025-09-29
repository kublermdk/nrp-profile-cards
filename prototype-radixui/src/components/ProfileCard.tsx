import React from 'react';
import * as Avatar from '@radix-ui/react-avatar';
import * as Separator from '@radix-ui/react-separator';
import { ProfileData } from '../utils/profileData';
import { getStageTheme, formatTraitName, getTriadGradient } from '../utils/themeUtils';
import { ProgressBar } from './ProgressBar';
import { JsonEditor } from './JsonEditor';

interface ProfileCardProps {
  profile: ProfileData;
  profileName: string;
  onProfileUpdate: (profileName: string, updatedProfile: ProfileData) => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ profile, profileName, onProfileUpdate }) => {
  const theme = getStageTheme(profile.stage.primary);

  return (
    <div 
      className="bg-white shadow-xl rounded-lg border-2 min-h-screen relative max-w-4xl mx-auto"
      style={{
        backgroundColor: theme.background,
        borderColor: theme.primary
      }}
    >
      {/* GitHub Badge and JSON Editor */}
      <div className="absolute top-4 right-4 z-10 flex gap-2">
        <JsonEditor
          profile={profile}
          profileName={profileName}
          onProfileUpdate={onProfileUpdate}
        />
        <a
          href="https://github.com/kublermdk/nrp-profile-cards"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-white px-3 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 border border-gray-600 transition-all duration-200 hover:bg-blue-600 hover:scale-105"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
          </svg>
          GitHub
        </a>
      </div>

      {/* Header Section */}
      <div 
        className="p-8 rounded-t-lg"
        style={{
          backgroundColor: theme.primary,
          color: 'white'
        }}
      >
        <div className="flex items-center gap-6">
          <Avatar.Root className="inline-flex items-center justify-center align-middle overflow-hidden select-none w-16 h-16 rounded-md">
            <Avatar.Image
              className="w-full h-full object-cover rounded-md"
              src={profile.personalInfo.profilePicture && profile.personalInfo.profilePicture.includes('/') ? profile.personalInfo.profilePicture : undefined}
              alt={profile.personalInfo.name}
            />
            <Avatar.Fallback 
              className="text-white text-2xl font-semibold leading-none flex items-center justify-center w-full h-full"
              style={{
                backgroundColor: theme.secondary,
                color: theme.text
              }}
            >
              {profile.personalInfo.name.split(' ').map(n => n[0]).join('')}
            </Avatar.Fallback>
          </Avatar.Root>

          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white mb-2">
              {profile.personalInfo.name}
            </h2>
            <p className="text-lg text-white/90 mb-2">
              Age {profile.personalInfo.age} • {profile.personalInfo.currentResidence}
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="text-sm text-white/80">
                Job{profile.personalInfo.jobTitles && profile.personalInfo.jobTitles.length > 1 ? 's': ''}:
              </span>
              {profile.personalInfo.jobTitles.slice(0, 2).map((title, index) => (
                <span
                  key={index}
                  className="px-2 py-1 rounded-full text-xs font-medium text-white"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    color: 'white',
                    border: '1px solid rgba(255, 255, 255, 0.4)'
                  }}
                >
                  {title}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8 space-y-8">
        {/* Core Psychological Profile */}
        <div 
          className="p-6 rounded-lg"
          style={{ backgroundColor: theme.secondary }}
        >
          <h3 
            className="text-xl font-semibold mb-4"
            style={{ color: theme.text }}
          >
            Core Profile
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-sm font-semibold mb-1" style={{ color: theme.text }}>
                Developmental Stage
              </div>
              <div 
                className="text-lg font-bold"
                style={{ color: theme.primary }}
              >
                {profile.stage.primary}
              </div>
              <div className="text-xs text-gray-500">
                {profile.stage.confidence}% confidence
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold mb-1" style={{ color: theme.text }}>
                MBTI Type
              </div>
              <div 
                className="text-lg font-bold"
                style={{ color: theme.primary }}
              >
                {profile.mbti.type}
              </div>
              <div className="text-xs text-gray-500">
                {profile.mbti.confidence}% confidence
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold mb-1" style={{ color: theme.text }}>
                Enneagram
              </div>
              <div 
                className="text-lg font-bold"
                style={{ color: theme.primary }}
              >
                {profile.enneagram.type}{profile.enneagram.wing}
              </div>
              <div className="text-xs text-gray-500">
                {profile.enneagram.confidence}% confidence
              </div>
            </div>
          </div>
        </div>

        <Separator.Root className="h-px bg-gray-200" />

        {/* OCEAN Traits */}
        <div>
          <h3 
            className="text-xl font-semibold mb-4"
            style={{ color: theme.text }}
          >
            Big Five Personality Traits (OCEAN)
          </h3>
          <div className="space-y-3">
            {Object.entries(profile.oceanTraits).map(([key, trait]) => (
              <ProgressBar
                key={key}
                label={formatTraitName(key)}
                value={trait.value}
                confidence={trait.confidence}
                color={theme.primary}
              />
            ))}
          </div>
        </div>

        <Separator.Root className="h-px bg-gray-200" />

        {/* Multiple Intelligences */}
        <div>
          <h3 
            className="text-xl font-semibold mb-4"
            style={{ color: theme.text }}
          >
            Multiple Intelligences
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {Object.entries(profile.multipleIntelligences).map(([key, intelligence]) => (
              <ProgressBar
                key={key}
                label={formatTraitName(key)}
                value={intelligence.value}
                confidence={intelligence.confidence}
                color={theme.accent}
              />
            ))}
          </div>
        </div>

        <Separator.Root className="h-px bg-gray-200" />

        {/* Dark Triad and Light Triad - 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Dark Triad */}
          <div>
            <h3 
              className="text-xl font-semibold mb-4"
              style={{ color: theme.text }}
            >
              Dark Triad
            </h3>
            <div className="space-y-3">
              {Object.entries(profile.darkTriad).map(([key, trait]) => (
                <ProgressBar
                  key={key}
                  label={formatTraitName(key)}
                  value={trait.value}
                  confidence={trait.confidence}
                  gradientColor={getTriadGradient('dark', trait.value)}
                  showTooltip={true}
                />
              ))}
            </div>
          </div>

          {/* Light Triad */}
          <div>
            <h3 
              className="text-xl font-semibold mb-4"
              style={{ color: theme.text }}
            >
              Light Triad
            </h3>
            <div className="space-y-3">
              {Object.entries(profile.lightTriad).map(([key, trait]) => (
                <ProgressBar
                  key={key}
                  label={formatTraitName(key)}
                  value={trait.value}
                  confidence={trait.confidence}
                  gradientColor={getTriadGradient('light', trait.value)}
                  showTooltip={true}
                />
              ))}
            </div>
          </div>
        </div>

        <Separator.Root className="h-px bg-gray-200" />

        {/* Development Lines */}
        <div>
          <h3 
            className="text-xl font-semibold mb-4"
            style={{ color: theme.text }}
          >
            Development Lines
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {Object.entries(profile.developmentLines).map(([key, line]) => (
              <ProgressBar
                key={key}
                label={formatTraitName(key)}
                value={line.value}
                confidence={line.confidence}
                color={theme.primary}
              />
            ))}
          </div>
        </div>

        <Separator.Root className="h-px bg-gray-200" />

        {/* Footer */}
        <div className="text-center">
          <p className="text-xs text-gray-500">
            Generated: {new Date(profile.personalInfo.generatedAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

