# NRP Profile Cards - Project Proposal

## Project Overview

Develop a React.js-based profile card system inspired by trading cards (baseball/basketball cards) to provide quick, comprehensive personality and psychological profiling visualization. The system will generate dynamic, color-themed cards based on Non-Reductionist Psychology (NRP) mapping data and various psychometric assessments.

## Technical Specifications

### Tech Stack
- **Framework**: React.js
- **UI Library**: Radix or Mantine (to be evaluated)
- **Data Format**: JSON/JavaScript objects
- **Output Formats**: 
  - Interactive web view (primary)
  - Static snapshots (JPEG/PNG/WebP) for sharing
- **Orientation**: Portrait (mobile-friendly, printable)

### Architecture
- **Separation of Concerns**: Card viewer component separate from data layer
- **Dynamic Loading**: Quick switching between different people's profiles via JSON input
- **Modular Design**: Expandable sections based on available data
- **Future Database Integration**: Easy migration from JSON to database storage

## Core Features

### 1. Dynamic Color Theming
Cards will use color schemes based on developmental stages:
- **Red Stage**: Warning-toned theme
- **Orange Stage**: Orange-dominant theme  
- **Blue Stage**: Blue-dominant theme
- **Green Stage**: Green-dominant theme
- **Yellow/Gold Stage**: Gold-dominant theme
- **Turquoise/Teal Stage**: Teal-dominant theme
- **Beige Stage**: Neutral beige theme

### 2. Special Status Indicators
Enhanced visual elements for:
- **Stewards**: Special design elements
- **Scholars**: Enhanced visual features
- **Council Members**: Animated sections around card/profile picture

### 3. Profile Information Sections

#### Personal Information
- Profile picture (when available)
- Name, age
- Country of origin and current residence
- Job title(s) and work description
- Generation timestamp

#### Psychometric Data
- **MBTI Type**: Clear display (e.g., ENFP, ENFJ)
- **Enneagram**: Type and wing (e.g., 9w1)
- **Developmental Stage**: Primary stage indicator

#### OCEAN Traits (Big Five)
Visual progress bars with confidence ranges:
- Openness
- Conscientiousness  
- Extraversion
- Agreeableness
- Neuroticism

#### Multiple Intelligences
Progress bar visualization for:
- Linguistic
- Logical-Mathematical
- Spatial
- Musical
- Bodily-Kinesthetic
- Interpersonal
- Intrapersonal
- Naturalist
- Existential

#### Triad Traits
**Dark Triad** (Red gradient - higher = more red):
- Narcissism
- Machiavellianism
- Psychopathy

**Light Triad** (Green gradient - higher = more green):
- Humanism
- Kantianism
- Faith in Humanity

#### Development Lines
Display available lines from NRP mapping:
- Cognitive line
- Moral line
- Psychosocial line
- Leadership line
- Ego line
- Worldview line
- Faith line
- Maslow's needs
- Values line
- Complexity line
- Skill level lines

## Design Requirements

### Layout Structure
- **Portrait orientation** (mobile-optimized, printable)
- **Two-column layout** for visual sections
- **Multi-page capability** for extensive profiles
- **Sectioned areas** with clear borders between data types
- **Progress bars** as primary visual element

### Visual Elements
- **Confidence Ranges**: Primary color with lighter shade indicating uncertainty range
- **Hover Information**: Additional context and sources on mouse-over
- **Interactive Sections**: Show/hide capabilities for different data sections
- **Consistent Bar Lengths**: Standardized progress bar dimensions
- **Clear Separators**: Border lines between different data categories

### Data Accuracy Mapping
Convert qualitative assessments to quantitative scales:
- **Low**: ~5%
- **Low-Moderate**: ~25%
- **Moderate**: ~50%
- **Moderate-High**: ~65%
- **High**: ~75%
- **Very High**: ~95%

## Implementation Phases

### Phase 1: Core Development
1. Set up React.js project with chosen UI library
2. Create base card component structure
3. Implement JSON data ingestion
4. Build basic progress bar components
5. Implement color theming system

### Phase 2: Visual Enhancement
1. Add confidence range visualization
2. Implement hover interactions
3. Create special status indicators
4. Add profile picture support
5. Implement responsive design

### Phase 3: Advanced Features
1. Add screenshot/export functionality
2. Implement multi-page layouts
3. Create animation capabilities
4. Add show/hide sections
5. Optimize for printing

### Phase 4: Future Enhancements
1. Database integration
2. Profile editor interface
3. Historical tracking
4. Comparison tools
5. Sharing capabilities

## Data Structure Requirements

### JSON Schema
```json
{
  "personalInfo": {
    "name": "string",
    "age": "number",
    "profilePicture": "string|null",
    "countryOfOrigin": "string",
    "currentResidence": "string",
    "jobTitles": ["string"],
    "generatedAt": "timestamp"
  },
  "stage": {
    "primary": "string",
    "confidence": "number"
  },
  "mbti": {
    "type": "string",
    "confidence": "number"
  },
  "enneagram": {
    "type": "string",
    "wing": "string",
    "confidence": "number"
  },
  "oceanTraits": {
    "openness": {"value": "number", "confidence": "number"},
    "conscientiousness": {"value": "number", "confidence": "number"},
    "extraversion": {"value": "number", "confidence": "number"},
    "agreeableness": {"value": "number", "confidence": "number"},
    "neuroticism": {"value": "number", "confidence": "number"}
  },
  "multipleIntelligences": {
    "linguistic": {"value": "number", "confidence": "number"},
    "logicalMathematical": {"value": "number", "confidence": "number"},
    "spatial": {"value": "number", "confidence": "number"},
    "musical": {"value": "number", "confidence": "number"},
    "bodilyKinesthetic": {"value": "number", "confidence": "number"},
    "interpersonal": {"value": "number", "confidence": "number"},
    "intrapersonal": {"value": "number", "confidence": "number"},
    "naturalist": {"value": "number", "confidence": "number"},
    "existential": {"value": "number", "confidence": "number"}
  },
  "darkTriad": {
    "narcissism": {"value": "number", "confidence": "number"},
    "machiavellianism": {"value": "number", "confidence": "number"},
    "psychopathy": {"value": "number", "confidence": "number"}
  },
  "lightTriad": {
    "humanism": {"value": "number", "confidence": "number"},
    "kantianism": {"value": "number", "confidence": "number"},
    "faithInHumanity": {"value": "number", "confidence": "number"}
  },
  "developmentLines": {
    "cognitive": {"value": "number", "confidence": "number"},
    "moral": {"value": "number", "confidence": "number"},
    "psychosocial": {"value": "number", "confidence": "number"}
  },
  "specialStatus": {
    "type": "steward|scholar|council|null",
    "level": "number|null"
  }
}
```

## Success Criteria

### Primary Goals
- Generate visually appealing, informative profile cards
- Provide quick personality/psychological assessment overview
- Enable easy comparison between individuals
- Support both digital viewing and printing

### Technical Goals
- Fast loading and rendering
- Responsive design across devices
- Clean, maintainable code architecture
- Easy data integration and updates

### User Experience Goals
- Intuitive information hierarchy
- Clear visual indicators for confidence levels
- Professional appearance suitable for various contexts
- Accessibility compliance

## Future Considerations

### Scalability
- Support for large user databases
- Batch processing capabilities
- Export/import functionality
- Version control for profile changes

### Integration
- API connectivity for real-time data updates
- Social sharing capabilities
- Print optimization
- Mobile app adaptation

### Analytics
- Usage tracking
- Profile comparison metrics
- Accuracy improvement feedback loops
- Data quality monitoring

This proposal provides a comprehensive foundation for developing the NRP Profile Cards system, with clear technical specifications, design requirements, and implementation phases that can guide development using Cursor CLI or similar tools.