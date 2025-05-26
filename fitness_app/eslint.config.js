// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
  {
    ignores: [
      // Dependencies
      'node_modules/**',
      
      // Build outputs
      'dist/**',
      '.expo/**',
      'web-build/**',
      
      // Generated files
      'expo-env.d.ts',
      'nativewind-env.d.ts',
      
      // Config files that don't need linting
      '*.config.js',
      '*.config.ts',
      'tailwind.config.js',
      'metro.config.js',
      'babel.config.js',
      
      // Scripts (these are Node.js scripts, not React Native)
      'scripts/**',
      
      // Logs
      '*.log',
      
      // OS generated files
      '.DS_Store',
      '.DS_Store?',
      '._*',
      '.Spotlight-V100',
      '.Trashes',
      'ehthumbs.db',
      'Thumbs.db',
      
      // IDE files
      '.vscode/**',
      '.idea/**',
      
      // Temporary files
      '*.tmp',
      '*.temp',
      
      // Additional Expo/React Native specific ignores
      'android/**',
      'ios/**',
      '.expo-shared/**',
    ],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      // TypeScript rules
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-function-return-type': 'off',
      // React rules
      'react/react-in-jsx-scope': 'off', // Not needed in React 17+
      'react/prop-types': 'off', // Using TypeScript for prop validation
      'react/no-unescaped-entities': 'error',
      // General rules
      'no-console': 'warn',
      'no-debugger': 'error',
    },
  },
]);