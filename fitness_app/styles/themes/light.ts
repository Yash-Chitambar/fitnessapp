import { Theme } from './index';

export const lightTheme: Theme = {
  colors: {
    primary: '#E53E3E',
    secondary: '#FFF5F5',
    background: '#FFFFFF',
    surface: '#F7FAFC',
    text: '#1A202C',
    textSecondary: '#718096',
    border: '#E2E8F0',
    success: '#38A169',
    warning: '#D69E2E',
    error: '#E53E3E',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  typography: {
    h1: {
      fontSize: 32,
      fontWeight: 'bold',
      lineHeight: 40,
    },
    h2: {
      fontSize: 24,
      fontWeight: '600',
      lineHeight: 32,
    },
    body: {
      fontSize: 16,
      fontWeight: 'normal',
      lineHeight: 24,
    },
    caption: {
      fontSize: 12,
      fontWeight: 'normal',
      lineHeight: 16,
    },
  },
}; 