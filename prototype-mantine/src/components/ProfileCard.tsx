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
  Paper
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
        minHeight: '100vh'
      }}
    >
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