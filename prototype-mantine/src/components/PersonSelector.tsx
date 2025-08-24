import React from 'react';
import {
  Paper,
  Text,
  Stack,
  Group,
  Badge,
  UnstyledButton,
  Avatar,
  Box
} from '@mantine/core';
import { ProfileData } from '../data/profileData';
import { getStageTheme } from '../utils/themeUtils';

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
    <Paper
      shadow="md"
      p="md"
      radius="lg"
      style={{
        position: 'sticky',
        top: '20px',
        backgroundColor: 'white',
        border: '1px solid #e9ecef'
      }}
    >
      <Text size="lg" fw={600} mb="md" ta="center">
        Select Profile
      </Text>
      
      <Stack gap="xs">
        {Object.entries(profiles).map(([name, profile]) => {
          const theme = getStageTheme(profile.stage.primary);
          const isSelected = selectedPerson === name;
          
          return (
            <UnstyledButton
              key={name}
              onClick={() => onPersonSelect(name)}
              style={{
                width: '100%',
                borderRadius: '8px',
                padding: '12px',
                backgroundColor: isSelected ? theme.secondary : '#f8f9fa',
                border: isSelected ? `2px solid ${theme.primary}` : '1px solid #e9ecef',
                transition: 'all 0.2s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.backgroundColor = '#f1f3f4';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.backgroundColor = '#f8f9fa';
                  e.currentTarget.style.transform = 'translateY(0px)';
                }
              }}
            >
              <Group gap="sm" align="center">
                <Avatar
                  size="sm"
                  radius="md"
                  src={null}
                  style={{
                    backgroundColor: theme.primary,
                    color: 'white',
                    fontSize: '0.8rem',
                    fontWeight: 600
                  }}
                >
                  {name.split(' ').map(n => n[0]).join('')}
                </Avatar>
                
                <Box style={{ flex: 1 }}>
                  <Text
                    size="sm"
                    fw={isSelected ? 600 : 500}
                    c={isSelected ? theme.text : 'black'}
                  >
                    {name}
                  </Text>
                  <Group gap={4} mt={2}>
                    <Badge
                      size="xs"
                      variant="light"
                      color={theme.primary}
                    >
                      {profile.stage.primary}
                    </Badge>
                    <Badge
                      size="xs"
                      variant="outline"
                      color="gray"
                    >
                      {profile.mbti.type}
                    </Badge>
                  </Group>
                </Box>
              </Group>
            </UnstyledButton>
          );
        })}
      </Stack>
    </Paper>
  );
};