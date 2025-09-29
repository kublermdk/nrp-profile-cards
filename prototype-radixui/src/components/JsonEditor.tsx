import React, { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Copy, X, Check, AlertCircle } from 'lucide-react';
import { ProfileData } from '../utils/profileData';
import { cn } from '../utils/cn';

interface JsonEditorProps {
  profile: ProfileData;
  profileName: string;
  onProfileUpdate: (profileName: string, updatedProfile: ProfileData) => void;
}

export const JsonEditor: React.FC<JsonEditorProps> = ({
  profile,
  profileName,
  onProfileUpdate
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [jsonText, setJsonText] = useState('');
  const [isValidJson, setIsValidJson] = useState(true);
  const [jsonError, setJsonError] = useState('');
  const [copied, setCopied] = useState(false);

  // -- Initialize JSON text when dialog opens
  useEffect(() => {
    if (isOpen) {
      setJsonText(JSON.stringify(profile, null, 2));
      setIsValidJson(true);
      setJsonError('');
    }
  }, [isOpen, profile]);

  // -- Validate JSON as user types
  const handleJsonChange = (value: string) => {
    setJsonText(value);
    setCopied(false);
    
    try {
      const parsed = JSON.parse(value);
      // -- Basic validation to ensure it has the expected structure
      if (parsed.personalInfo && parsed.stage && parsed.mbti && parsed.enneagram) {
        setIsValidJson(true);
        setJsonError('');
      } else {
        setIsValidJson(false);
        setJsonError('JSON is valid but missing required profile fields');
      }
    } catch (error) {
      setIsValidJson(false);
      setJsonError(error instanceof Error ? error.message : 'Invalid JSON format');
    }
  };

  // -- Apply changes to profile
  const handleApply = () => {
    if (isValidJson) {
      try {
        const updatedProfile = JSON.parse(jsonText) as ProfileData;
        onProfileUpdate(profileName, updatedProfile);
        setIsOpen(false);
      } catch (error) {
        setJsonError('Failed to apply changes');
      }
    }
  };

  // -- Copy JSON to clipboard
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(jsonText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
    }
  };

  // -- Reset to original profile
  const handleReset = () => {
    setJsonText(JSON.stringify(profile, null, 2));
    setIsValidJson(true);
    setJsonError('');
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-white bg-gray-700 rounded-md hover:bg-gray-600 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          Edit JSON
        </button>
      </Dialog.Trigger>
      
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-4xl h-[80vh] bg-white rounded-lg shadow-xl z-50 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <Dialog.Title className="text-xl font-semibold text-gray-900">
              Edit JSON - {profileName}
            </Dialog.Title>
            <Dialog.Close asChild>
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </Dialog.Close>
          </div>

          {/* Error/Success Message */}
          {jsonError && (
            <div className="mx-6 mt-4 p-3 bg-red-50 border border-red-200 rounded-md flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-500" />
              <span className="text-sm text-red-700">{jsonError}</span>
            </div>
          )}

          {isValidJson && !jsonError && (
            <div className="mx-6 mt-4 p-3 bg-green-50 border border-green-200 rounded-md flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span className="text-sm text-green-700">Valid JSON</span>
            </div>
          )}

          {/* JSON Editor */}
          <div className="flex-1 p-6">
            <div className="h-full flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-medium text-gray-700">
                  Profile JSON Data
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={handleCopy}
                    className={cn(
                      "inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md transition-colors",
                      copied
                        ? "bg-green-100 text-green-700 border border-green-200"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
                    )}
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>
              
              <textarea
                value={jsonText}
                onChange={(e) => handleJsonChange(e.target.value)}
                className={cn(
                  "flex-1 w-full p-4 border rounded-md font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500",
                  isValidJson
                    ? "border-gray-300 focus:border-blue-500"
                    : "border-red-300 focus:border-red-500"
                )}
                placeholder="Enter valid JSON data..."
                spellCheck={false}
              />
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between p-6 border-t border-gray-200 bg-gray-50">
            <button
              onClick={handleReset}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              Reset to Original
            </button>
            
            <div className="flex gap-3">
              <Dialog.Close asChild>
                <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                  Cancel
                </button>
              </Dialog.Close>
              
              <button
                onClick={handleApply}
                disabled={!isValidJson}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                  isValidJson
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                )}
              >
                Apply Changes
              </button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
