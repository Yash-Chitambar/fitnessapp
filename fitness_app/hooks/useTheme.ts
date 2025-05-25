import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Theme, ThemeMode, themes } from '../styles/themes';

interface ThemeStore {
  mode: ThemeMode;
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (mode: ThemeMode) => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      mode: 'light',
      theme: themes.light,
      toggleTheme: () => {
        const currentMode = get().mode;
        const newMode = currentMode === 'light' ? 'dark' : 'light';
        set({
          mode: newMode,
          theme: themes[newMode],
        });
      },
      setTheme: (mode: ThemeMode) => {
        set({
          mode,
          theme: themes[mode],
        });
      },
    }),
    {
      name: 'theme-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export const useTheme = () => {
  const { mode, theme, toggleTheme, setTheme } = useThemeStore();
  
  return {
    mode,
    theme,
    toggleTheme,
    setTheme,
    isDark: mode === 'dark',
  };
}; 