# NRP Profile Cards - Mantine Implementation

A React.js-based profile card system inspired by trading cards for Non-Reductionist Psychology (NRP) personality and psychological profiling visualization.

## Features

- 🎨 **Dynamic Color Theming** - Card themes change based on developmental stages (Red, Orange, Blue, Green, Yellow, etc.)
- 📊 **Interactive Progress Bars** - Visual representation of personality traits with confidence ranges
- 🔄 **Profile Switching** - Clickable person selector for easy navigation between profiles
- 📱 **Responsive Design** - Mobile-friendly layout that works across devices
- 🎯 **Comprehensive Data** - Displays MBTI, Enneagram, Big Five traits, Multiple Intelligences, Dark/Light Triads, and Development Lines

## Included Profiles

The application includes 8 example profiles:
- Jeff Bezos (Orange stage)
- Hank Green (Green stage)
- Leonardo da Vinci (Yellow/Turquoise stage)
- David Long (Blue/Orange stage)
- Barack Obama (Green/Yellow stage)
- Donald Trump (Red stage)
- Elon Musk (Orange/Green stage)
- Peter Joseph (Green/Yellow stage)

## Technology Stack

- **React 18** with TypeScript
- **Mantine UI** components
- **Vite** for build tooling
- **Emotion** for CSS-in-JS styling

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation & Running

1. Navigate to the project directory:
   ```bash
   cd prototype-mantine
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/          # React components
│   ├── ProfileCard.tsx     # Main profile card component
│   ├── PersonSelector.tsx  # Clickable person list
│   └── ProgressBar.tsx     # Reusable progress bar with confidence
├── data/
│   └── profileData.ts   # Profile data and TypeScript interfaces
├── utils/
│   └── themeUtils.ts    # Color theming and formatting utilities
├── App.tsx              # Main application component
└── main.tsx             # Application entry point
```

## Key Components

### ProfileCard
The main component that displays a complete personality profile with:
- Personal information header
- Core psychological profile (Stage, MBTI, Enneagram)
- Big Five personality traits (OCEAN)
- Multiple Intelligences
- Dark and Light Triads
- Development Lines

### PersonSelector
A sidebar component showing all available profiles with:
- Avatar initials
- Name and basic info
- Stage and MBTI badges
- Hover effects and selection states

### ProgressBar
A reusable component for displaying personality traits:
- Value percentage
- Confidence range visualization
- Hover tooltips with detailed information
- Custom color and gradient support

## Color Theming

Each developmental stage has its own color theme:
- **Red**: Warning-toned theme
- **Orange**: Orange-dominant theme
- **Blue**: Blue-dominant theme
- **Green**: Green-dominant theme
- **Yellow**: Gold-dominant theme
- **Turquoise/Teal**: Teal-dominant theme
- **Beige**: Neutral theme

## Data Structure

Profiles follow a comprehensive JSON schema including:
- Personal information
- Developmental stage with confidence
- MBTI and Enneagram types
- OCEAN personality traits
- Multiple intelligences (9 types)
- Dark and Light triads
- Development lines (cognitive, moral, psychosocial, etc.)

## Future Enhancements

- Profile picture support
- Export to image functionality
- Print optimization
- Animation capabilities
- Database integration
- Profile editing interface

## License

This project is part of the NRP Profile Cards system and follows the project's licensing terms.