import { useState } from 'react';
import { MantineProvider, Container, Grid, Title, Box } from '@mantine/core';
import { ProfileCard } from './components/ProfileCard';
import { PersonSelector } from './components/PersonSelector';
import { profilesData } from './data/profileData';

function App() {
  const [selectedPerson, setSelectedPerson] = useState<string>(Object.keys(profilesData)[0]);
  const selectedProfile = profilesData[selectedPerson];

  return (
    <MantineProvider>
      <Box style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
        <Container size="xl" py="xl">
          <Title order={1} ta="center" mb="xl" c="dark">
            NRP Profile Cards
          </Title>
          
          <Grid gutter="xl">
            {/* Person Selector - Left Sidebar */}
            <Grid.Col 
              span={{ base: 12, sm: 12, md: 4, lg: 3 }}
              style={{ 
                '@media (max-width: 768px)': {
                  order: 2
                }
              }}
            >
              <PersonSelector
                profiles={profilesData}
                selectedPerson={selectedPerson}
                onPersonSelect={setSelectedPerson}
              />
            </Grid.Col>
            
            {/* Profile Card - Main Content */}
            <Grid.Col 
              span={{ base: 12, sm: 12, md: 8, lg: 9 }}
              style={{ 
                '@media (max-width: 768px)': {
                  order: 1
                }
              }}
            >
              {selectedProfile && (
                <ProfileCard profile={selectedProfile} />
              )}
            </Grid.Col>
          </Grid>
        </Container>
      </Box>
    </MantineProvider>
  );
}

export default App;