import React from 'react';
import { Box, Progress, Text, Tooltip } from '@mantine/core';

interface ProgressBarProps {
  label: string;
  value: number;
  confidence: number;
  color?: string;
  gradientColor?: string;
  showTooltip?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  label,
  value,
  confidence,
  color = 'blue',
  gradientColor,
  showTooltip = true
}) => {
  // Calculate confidence range for visual representation
  const confidenceRange = (100 - confidence) / 2;
  const lowerBound = Math.max(0, value - confidenceRange);
  const upperBound = Math.min(100, value + confidenceRange);

  const progressBar = (
    <Box style={{ position: 'relative', width: '100%' }}>
      {/* Background confidence range */}
      <Progress
        value={upperBound - lowerBound}
        color={color}
        size="lg"
        radius="md"
        style={{
          position: 'absolute',
          opacity: 0.3,
          marginLeft: `${lowerBound}%`,
          width: `${upperBound - lowerBound}%`,
          zIndex: 1
        }}
      />
      
      {/* Main value bar */}
      <Progress
        value={value}
        color={gradientColor ? gradientColor : color}
        size="lg"
        radius="md"
        style={{
          position: 'relative',
          zIndex: 2
        }}
      />
      
      {/* Value text overlay */}
      <Text
        size="xs"
        style={{
          position: 'absolute',
          right: '8px',
          top: '50%',
          transform: 'translateY(-50%)',
          color: value > 50 ? 'white' : 'black',
          fontWeight: 600,
          zIndex: 3
        }}
      >
        {value}%
      </Text>
    </Box>
  );

  if (!showTooltip) {
    return (
      <Box mb="xs">
        <Text size="sm" fw={500} mb={4}>
          {label}
        </Text>
        {progressBar}
      </Box>
    );
  }

  return (
    <Tooltip
      label={
        <Box>
          <Text size="sm" fw={600}>{label}</Text>
          <Text size="xs">Value: {value}%</Text>
          <Text size="xs">Confidence: {confidence}%</Text>
          <Text size="xs">Range: {lowerBound.toFixed(1)}% - {upperBound.toFixed(1)}%</Text>
        </Box>
      }
      position="top"
      withArrow
    >
      <Box mb="xs" style={{ cursor: 'help' }}>
        <Text size="sm" fw={500} mb={4}>
          {label}
        </Text>
        {progressBar}
      </Box>
    </Tooltip>
  );
};