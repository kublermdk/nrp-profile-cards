import React from 'react';
import * as Progress from '@radix-ui/react-progress';
import * as Tooltip from '@radix-ui/react-tooltip';

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
  // -- Calculate confidence range for visual representation
  const confidenceRange = (100 - confidence) / 2;
  const lowerBound = Math.max(0, value - confidenceRange);
  const upperBound = Math.min(100, value + confidenceRange);

  const progressBar = (
    <div className="relative w-full">
      {/* Background confidence range */}
      <Progress.Root
        className="relative overflow-hidden bg-gray-200 rounded-full w-full h-6"
        style={{
          position: 'absolute',
          opacity: 0.3,
          marginLeft: `${lowerBound}%`,
          width: `${upperBound - lowerBound}%`,
          zIndex: 1
        }}
      >
        <Progress.Indicator
          className="w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
          style={{
            transform: `translateX(-${100 - (upperBound - lowerBound)}%)`,
            backgroundColor: color
          }}
        />
      </Progress.Root>
      
      {/* Main value bar */}
      <Progress.Root
        className="relative overflow-hidden bg-gray-200 rounded-full w-full h-6"
        style={{
          position: 'relative',
          zIndex: 2
        }}
      >
        <Progress.Indicator
          className="w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
          style={{
            transform: `translateX(-${100 - value}%)`,
            backgroundColor: gradientColor || color
          }}
        />
      </Progress.Root>
      
      {/* Value text overlay */}
      <span
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs font-bold z-10"
        style={{
          color: '#000000',
          textShadow: '2px 2px 4px rgba(255, 255, 255, 0.9), -2px -2px 4px rgba(255, 255, 255, 0.9), 2px -2px 4px rgba(255, 255, 255, 0.9), -2px 2px 4px rgba(255, 255, 255, 0.9), 0 0 6px rgba(255, 255, 255, 0.8)'
        }}
      >
        {value}%
      </span>
    </div>
  );

  if (!showTooltip) {
    return (
      <div className="mb-3">
        <label className="text-sm font-medium text-gray-700 mb-1 block">
          {label}
        </label>
        {progressBar}
      </div>
    );
  }

  return (
    <Tooltip.Provider delayDuration={0}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <div className="mb-3 cursor-help">
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              {label}
            </label>
            {progressBar}
          </div>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm max-w-xs z-50"
            sideOffset={5}
          >
            <div>
              <div className="font-semibold">{label}</div>
              <div className="text-xs">Value: {value}%</div>
              <div className="text-xs">Confidence: {confidence}%</div>
              <div className="text-xs">Range: {lowerBound.toFixed(1)}% - {upperBound.toFixed(1)}%</div>
            </div>
            <Tooltip.Arrow className="fill-gray-900" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

