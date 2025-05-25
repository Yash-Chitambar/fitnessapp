import { Theme } from './index';

export const darkTheme: Theme = {
  colors: {
    primary: '#FC8181',
    secondary: '#2D1B1B',
    background: '#1A202C',
    surface: '#2D3748',
    text: '#F7FAFC',
    textSecondary: '#A0AEC0',
    border: '#4A5568',
    success: '#68D391',
    warning: '#F6E05E',
    error: '#FC8181',
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