// Color themes based on developmental stages
export const stageThemes = {
  'Red': {
    primary: '#DC2626',
    secondary: '#FEE2E2',
    accent: '#B91C1C',
    background: '#FEF2F2',
    text: '#7F1D1D'
  },
  'Orange': {
    primary: '#EA580C',
    secondary: '#FED7AA',
    accent: '#C2410C',
    background: '#FFF7ED',
    text: '#9A3412'
  },
  'Blue': {
    primary: '#2563EB',
    secondary: '#DBEAFE',
    accent: '#1D4ED8',
    background: '#EFF6FF',
    text: '#1E3A8A'
  },
  'Green': {
    primary: '#16A34A',
    secondary: '#DCFCE7',
    accent: '#15803D',
    background: '#F0FDF4',
    text: '#14532D'
  },
  'Yellow': {
    primary: '#CA8A04',
    secondary: '#FEF3C7',
    accent: '#A16207',
    background: '#FFFBEB',
    text: '#92400E'
  },
  'Yellow/Gold': {
    primary: '#CA8A04',
    secondary: '#FEF3C7',
    accent: '#A16207',
    background: '#FFFBEB',
    text: '#92400E'
  },
  'Turquoise': {
    primary: '#0891B2',
    secondary: '#CFFAFE',
    accent: '#0E7490',
    background: '#ECFEFF',
    text: '#164E63'
  },
  'Teal': {
    primary: '#0D9488',
    secondary: '#CCFBF1',
    accent: '#0F766E',
    background: '#F0FDFA',
    text: '#134E4A'
  },
  'Beige': {
    primary: '#A3A3A3',
    secondary: '#F5F5F5',
    accent: '#737373',
    background: '#FAFAFA',
    text: '#404040'
  },
  // Combination stages
  'Orange/Green': {
    primary: '#059669',
    secondary: '#D1FAE5',
    accent: '#047857',
    background: '#ECFDF5',
    text: '#065F46'
  },
  'Green/Yellow': {
    primary: '#65A30D',
    secondary: '#ECFCCB',
    accent: '#4D7C0F',
    background: '#F7FEE7',
    text: '#365314'
  },
  'Blue/Orange': {
    primary: '#7C3AED',
    secondary: '#E9D5FF',
    accent: '#6D28D9',
    background: '#FAF5FF',
    text: '#581C87'
  },
  'Yellow/Turquoise': {
    primary: '#0891B2',
    secondary: '#CFFAFE',
    accent: '#0E7490',
    background: '#ECFEFF',
    text: '#164E63'
  }
};

// Function to get theme colors for a stage
export const getStageTheme = (stage: string) => {
  const normalizedStage = stage.replace(/\s+/g, '');
  return stageThemes[normalizedStage as keyof typeof stageThemes] || stageThemes.Beige;
};

// Function to format trait names for display
export const formatTraitName = (key: string): string => {
  const nameMap: Record<string, string> = {
    'logicalMathematical': 'Logical-Mathematical',
    'bodilyKinesthetic': 'Bodily-Kinesthetic',
    'faithInHumanity': 'Faith in Humanity'
  };
  
  if (nameMap[key]) {
    return nameMap[key];
  }
  
  // Convert camelCase to Title Case
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, str => str.toUpperCase())
    .trim();
};

// Function to get gradient colors for triad traits
export const getTriadGradient = (type: 'dark' | 'light', value: number): string => {
  if (type === 'dark') {
    // Red gradient for dark triad (higher = more red)
    const intensity = Math.min(value / 100, 1);
    const red = Math.round(220 * intensity + 50 * (1 - intensity));
    const green = Math.round(50 * (1 - intensity));
    const blue = Math.round(50 * (1 - intensity));
    return `rgb(${red}, ${green}, ${blue})`;
  } else {
    // Green gradient for light triad (higher = more green)
    const intensity = Math.min(value / 100, 1);
    const red = Math.round(50 * (1 - intensity));
    const green = Math.round(180 * intensity + 50 * (1 - intensity));
    const blue = Math.round(50 * (1 - intensity));
    return `rgb(${red}, ${green}, ${blue})`;
  }
};