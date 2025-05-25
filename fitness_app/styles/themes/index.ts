import { TextStyle } from 'react-native';
import { lightTheme } from './light';
import { darkTheme } from './dark';

export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
    success: string;
    warning: string;
    error: string;
  };
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  typography: {
    h1: TextStyle;
    h2: TextStyle;
    body: TextStyle;
    caption: TextStyle;
  };
}

export { lightTheme, darkTheme };

export type ThemeMode = 'light' | 'dark';

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}; 