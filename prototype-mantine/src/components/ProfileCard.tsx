import React from 'react';
import {
  Card,
  Text,
  Group,
  Stack,
  Avatar,
  Badge,
  Divider,
  SimpleGrid,
  Box,
  Title,
  Paper,
  Anchor
} from '@mantine/core';
import { ProfileData } from '../data/profileData';
import { getStageTheme, formatTraitName, getTriadGradient } from '../utils/themeUtils';
import { ProgressBar } from './ProgressBar';

interface ProfileCardProps {
  profile: ProfileData;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  const theme = getStageTheme(profile.stage.primary);

  return (
    <Card
      shadow="xl"
      padding="xl"
      radius="lg"
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: theme.background,
        border: `2px solid ${theme.primary}`,
        minHeight: '100vh',
        position: 'relative'
      }}
    >
      {/* GitHub Badge */}
      <Anchor
        href="https://github.com/kublermdk/nrp-profile-cards"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          zIndex: 10,
          backgroundColor: '#24292e',
          color: 'white',
          padding: '6px 12px',
          borderRadius: '6px',
          fontSize: '12px',
          fontWeight: 600,
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          border: '1px solid #444',
          transition: 'all 0.2s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#0366d6';
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#24292e';
          e.currentTarget.style.transform = 'scale(1)';
        }}
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
      </Anchor>
      {/* Header Section */}
      <Card.Section
        p="xl"
        style={{
          backgroundColor: theme.primary,
          color: 'white'
        }}
      >
        <Group align="center" gap="lg">
          <Avatar
            size="xl"
            radius="md"
            src={profile.personalInfo.profilePicture && profile.personalInfo.profilePicture.includes('/') ? profile.personalInfo.profilePicture : null} // Profile pictures would go here
            style={{
              backgroundColor: theme.secondary,
              color: theme.text,
              fontSize: '2rem',
              fontWeight: 600
            }}
          >
            {profile.personalInfo.name.split(' ').map(n => n[0]).join('')}
          </Avatar>

          <Stack gap="xs" style={{ flex: 1 }}>
            <Title order={2} c="white">
              {profile.personalInfo.name}
            </Title>
            <Text size="lg" c="white" opacity={0.9}>
              Age {profile.personalInfo.age} • {profile.personalInfo.currentResidence}
            </Text>
            <Group gap="xs">
              Job{profile.personalInfo.jobTitles && profile.personalInfo.jobTitles.length > 1 ? 's': ''}:
              {profile.personalInfo.jobTitles.slice(0, 2).map((title, index) => (
                <Badge
                  key={index}
                  variant="filled"
                  color="white"
                  style={{ color: theme.primary }}
                >
                  {title}
                </Badge>
              ))}
            </Group>
          </Stack>
        </Group>
      </Card.Section>

      {/* Core Psychological Profile */}
      <Stack gap="lg" mt="xl">
        <Paper p="md" radius="md" style={{ backgroundColor: theme.secondary }}>
          <Title order={4} mb="md" c={theme.text}>
            Core Profile
          </Title>
          <SimpleGrid cols={3} spacing="md">
            <Box>
              <Text size="sm" fw={600} c={theme.text}>Developmental Stage</Text>
              <Text size="lg" fw={700} c={theme.primary}>
                {profile.stage.primary}
              </Text>
              <Text size="xs" c="gray">
                {profile.stage.confidence}% confidence
              </Text>
            </Box>
            <Box>
              <Text size="sm" fw={600} c={theme.text}>MBTI Type</Text>
              <Text size="lg" fw={700} c={theme.primary}>
                {profile.mbti.type}
              </Text>
              <Text size="xs" c="gray">
                {profile.mbti.confidence}% confidence
              </Text>
            </Box>
            <Box>
              <Text size="sm" fw={600} c={theme.text}>Enneagram</Text>
              <Text size="lg" fw={700} c={theme.primary}>
                {profile.enneagram.type}{profile.enneagram.wing}
              </Text>
              <Text size="xs" c="gray">
                {profile.enneagram.confidence}% confidence
              </Text>
            </Box>
          </SimpleGrid>
        </Paper>

        <Divider color={theme.primary} />

        {/* OCEAN Traits */}
        <Box>
          <Title order={4} mb="md" c={theme.text}>
            Big Five Personality Traits (OCEAN)
          </Title>
          <Stack gap="sm">
            {Object.entries(profile.oceanTraits).map(([key, trait]) => (
              <ProgressBar
                key={key}
                label={formatTraitName(key)}
                value={trait.value}
                confidence={trait.confidence}
                color={theme.primary}
              />
            ))}
          </Stack>
        </Box>

        <Divider color={theme.primary} />

        {/* Multiple Intelligences */}
        <Box>
          <Title order={4} mb="md" c={theme.text}>
            Multiple Intelligences
          </Title>
          <SimpleGrid cols={2} spacing="sm">
            {Object.entries(profile.multipleIntelligences).map(([key, intelligence]) => (
              <ProgressBar
                key={key}
                label={formatTraitName(key)}
                value={intelligence.value}
                confidence={intelligence.confidence}
                color={theme.accent}
              />
            ))}
          </SimpleGrid>
        </Box>

        <Divider color={theme.primary} />

        {/* Dark Triad and Light Triad - 2 Column Layout */}
        <SimpleGrid cols={2} spacing="xl">
          {/* Dark Triad */}
          <Box>
            <Title order={4} mb="md" c={theme.text}>
              Dark Triad
            </Title>
            <Stack gap="sm">
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
            </Stack>
          </Box>

          {/* Light Triad */}
          <Box>
            <Title order={4} mb="md" c={theme.text}>
              Light Triad
            </Title>
            <Stack gap="sm">
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
            </Stack>
          </Box>
        </SimpleGrid>

        <Divider color={theme.primary} />

        {/* Development Lines */}
        <Box>
          <Title order={4} mb="md" c={theme.text}>
            Development Lines
          </Title>
          <SimpleGrid cols={2} spacing="sm">
            {Object.entries(profile.developmentLines).map(([key, line]) => (
              <ProgressBar
                key={key}
                label={formatTraitName(key)}
                value={line.value}
                confidence={line.confidence}
                color={theme.primary}
              />
            ))}
          </SimpleGrid>
        </Box>

        {/* Footer */}
        <Divider color={theme.primary} />
        <Text size="xs" c="gray" ta="center">
          Generated: {new Date(profile.personalInfo.generatedAt).toLocaleDateString()}
        </Text>
      </Stack>
    </Card>
  );
};