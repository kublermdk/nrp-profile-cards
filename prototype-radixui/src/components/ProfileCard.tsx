import React from 'react';
import * as Avatar from '@radix-ui/react-avatar';
import * as Separator from '@radix-ui/react-separator';
import ReactMarkdown from 'react-markdown';
import { ProfileData } from '../utils/profileData';
import { getStageTheme, formatTraitName, getTriadGradient, calculateAge } from '../utils/themeUtils';
import { ProgressBar } from './ProgressBar';
import { JsonEditor } from './JsonEditor';

interface ProfileCardProps {
  profile: ProfileData;
  profileName: string;
  onProfileUpdate: (profileName: string, updatedProfile: ProfileData) => void;
}

// -- Helper component for website icons
const WebsiteIcon: React.FC<{ label?: string }> = ({ label }) => {
  const getIcon = () => {
    switch (label?.toLowerCase()) {
      case 'facebook':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        );
      case 'wikipedia':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.17 0C5.4 0 0 5.4 0 12.17c0 6.77 5.4 12.17 12.17 12.17s12.17-5.4 12.17-12.17C24.34 5.4 18.94 0 12.17 0zm5.94 18.94c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-5.94 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-5.94 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
          </svg>
        );
      case 'youtube':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        );
      case 'perplexity results':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        );
      default:
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10.59 13.41c.41.39.41 1.03 0 1.42-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0 5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.982 2.982 0 0 0 0-4.24 2.982 2.982 0 0 0-4.24 0l-3.53 3.53a2.982 2.982 0 0 0 0 4.24zm2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0 5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.42l-.47.48a2.982 2.982 0 0 0 0 4.24 2.982 2.982 0 0 0 4.24 0l3.53-3.53a2.982 2.982 0 0 0 0-4.24z"/>
          </svg>
        );
    }
  };

  return (
    <span className="inline-flex items-center justify-center w-4 h-4">
      {getIcon()}
    </span>
  );
};

export const ProfileCard: React.FC<ProfileCardProps> = ({ profile, profileName, onProfileUpdate }) => {
  const theme = getStageTheme(profile.stage.primary);
  const ageInfo = calculateAge(profile.personalInfo.dateOfBirth, profile.personalInfo.deceased, profile.personalInfo.age);

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
              {ageInfo.displayText} • {profile.personalInfo.currentResidence}
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

        {/* Websites Section */}
        {profile.personalInfo.websites && profile.personalInfo.websites.length > 0 && (
          <>
            <Separator.Root className="h-px bg-gray-200" />
            <div>
              <h3 
                className="text-xl font-semibold mb-4"
                style={{ color: theme.text }}
              >
                Links
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {profile.personalInfo.websites.map((website, index) => (
                  <a
                    key={index}
                    href={website.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors duration-200 hover:shadow-sm"
                    style={{
                      backgroundColor: theme.secondary,
                      borderColor: theme.primary + '20'
                    }}
                  >
                    <WebsiteIcon label={website.label} />
                    <span className="text-sm font-medium truncate" style={{ color: theme.text }}>
                      {website.label || 'Link'}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Biography Section */}
        {profile.personalInfo.biography && (
          <>
            <Separator.Root className="h-px bg-gray-200" />
            <div>
              <h3 
                className="text-xl font-semibold mb-4"
                style={{ color: theme.text }}
              >
                Biography
              </h3>
              <div 
                className="prose prose-sm max-w-none"
                style={{ 
                  color: theme.text,
                  '--tw-prose-body': theme.text,
                  '--tw-prose-headings': theme.primary,
                  '--tw-prose-links': theme.primary,
                  '--tw-prose-bold': theme.text,
                  '--tw-prose-code': theme.accent,
                  '--tw-prose-pre-bg': theme.secondary,
                  '--tw-prose-pre-code': theme.text,
                  '--tw-prose-quotes': theme.text,
                  '--tw-prose-quote-borders': theme.primary,
                  '--tw-prose-hr': theme.primary + '40',
                  '--tw-prose-th-borders': theme.primary + '40',
                  '--tw-prose-td-borders': theme.primary + '20'
                } as React.CSSProperties}
              >
                <ReactMarkdown
                  components={{
                    // -- Custom styling for links
                    a: ({ href, children, ...props }) => (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium underline decoration-2 underline-offset-2 hover:decoration-4 transition-all duration-200"
                        style={{ 
                          color: theme.primary,
                          textDecorationColor: theme.primary + '60'
                        }}
                        {...props}
                      >
                        {children}
                      </a>
                    ),
                    // -- Custom styling for headings
                    h1: ({ children, ...props }) => (
                      <h1 
                        className="text-2xl font-bold mt-6 mb-4 first:mt-0"
                        style={{ color: theme.primary }}
                        {...props}
                      >
                        {children}
                      </h1>
                    ),
                    h2: ({ children, ...props }) => (
                      <h2 
                        className="text-xl font-semibold mt-5 mb-3 first:mt-0"
                        style={{ color: theme.primary }}
                        {...props}
                      >
                        {children}
                      </h2>
                    ),
                    h3: ({ children, ...props }) => (
                      <h3 
                        className="text-lg font-semibold mt-4 mb-2 first:mt-0"
                        style={{ color: theme.primary }}
                        {...props}
                      >
                        {children}
                      </h3>
                    ),
                    // -- Custom styling for bold and italic
                    strong: ({ children, ...props }) => (
                      <strong 
                        className="font-bold"
                        style={{ color: theme.text }}
                        {...props}
                      >
                        {children}
                      </strong>
                    ),
                    em: ({ children, ...props }) => (
                      <em 
                        className="italic"
                        style={{ color: theme.text }}
                        {...props}
                      >
                        {children}
                      </em>
                    ),
                    // -- Custom styling for code
                    code: ({ children, ...props }) => (
                      <code 
                        className="px-1.5 py-0.5 rounded text-sm font-mono"
                        style={{ 
                          backgroundColor: theme.secondary,
                          color: theme.accent,
                          border: `1px solid ${theme.primary}20`
                        }}
                        {...props}
                      >
                        {children}
                      </code>
                    ),
                    pre: ({ children, ...props }) => (
                      <pre 
                        className="p-4 rounded-lg overflow-x-auto"
                        style={{ 
                          backgroundColor: theme.secondary,
                          border: `1px solid ${theme.primary}20`
                        }}
                        {...props}
                      >
                        {children}
                      </pre>
                    ),
                    // -- Custom styling for blockquotes
                    blockquote: ({ children, ...props }) => (
                      <blockquote 
                        className="border-l-4 pl-4 my-4 italic"
                        style={{ 
                          borderLeftColor: theme.primary,
                          color: theme.text + 'CC'
                        }}
                        {...props}
                      >
                        {children}
                      </blockquote>
                    ),
                    // -- Custom styling for lists
                    ul: ({ children, ...props }) => (
                      <ul 
                        className="list-disc list-inside space-y-1 my-4"
                        style={{ color: theme.text }}
                        {...props}
                      >
                        {children}
                      </ul>
                    ),
                    ol: ({ children, ...props }) => (
                      <ol 
                        className="list-decimal list-inside space-y-1 my-4"
                        style={{ color: theme.text }}
                        {...props}
                      >
                        {children}
                      </ol>
                    ),
                    li: ({ children, ...props }) => (
                      <li 
                        className="ml-2"
                        style={{ color: theme.text }}
                        {...props}
                      >
                        {children}
                      </li>
                    ),
                    // -- Custom styling for paragraphs
                    p: ({ children, ...props }) => (
                      <p 
                        className="mb-3 last:mb-0 leading-relaxed"
                        style={{ color: theme.text }}
                        {...props}
                      >
                        {children}
                      </p>
                    ),
                    // -- Custom styling for horizontal rules
                    hr: ({ ...props }) => (
                      <hr 
                        className="my-6"
                        style={{ 
                          borderColor: theme.primary + '40',
                          borderTopWidth: '1px'
                        }}
                        {...props}
                      />
                    ),
                    // -- Custom styling for images
                    img: ({ src, alt, ...props }) => (
                      <img 
                        src={src}
                        alt={alt}
                        className="rounded-lg shadow-sm max-w-full h-auto my-4"
                        style={{ 
                          border: `1px solid ${theme.primary}20`
                        }}
                        {...props}
                      />
                    ),
                    // -- Custom styling for tables
                    table: ({ children, ...props }) => (
                      <div className="overflow-x-auto my-4">
                        <table 
                          className="min-w-full border-collapse"
                          style={{ 
                            border: `1px solid ${theme.primary}20`
                          }}
                          {...props}
                        >
                          {children}
                        </table>
                      </div>
                    ),
                    th: ({ children, ...props }) => (
                      <th 
                        className="px-4 py-2 text-left font-semibold border-b"
                        style={{ 
                          backgroundColor: theme.secondary,
                          color: theme.primary,
                          borderBottomColor: theme.primary + '40'
                        }}
                        {...props}
                      >
                        {children}
                      </th>
                    ),
                    td: ({ children, ...props }) => (
                      <td 
                        className="px-4 py-2 border-b"
                        style={{ 
                          color: theme.text,
                          borderBottomColor: theme.primary + '20'
                        }}
                        {...props}
                      >
                        {children}
                      </td>
                    )
                  }}
                >
                  {profile.personalInfo.biography}
                </ReactMarkdown>
              </div>
            </div>
          </>
        )}

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

