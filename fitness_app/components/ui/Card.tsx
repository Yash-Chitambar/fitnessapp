import React from 'react';
import { View, ViewStyle } from 'react-native';
import { useTheme } from '../../hooks/useTheme';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  padding?: 'none' | 'small' | 'medium' | 'large';
  elevation?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  style,
  padding = 'medium',
  elevation = true,
}) => {
  const { theme } = useTheme();

  const getCardStyle = (): ViewStyle => {
    const paddingStyles = {
      none: 0,
      small: theme.spacing.sm,
      medium: theme.spacing.md,
      large: theme.spacing.lg,
    };

    return {
      backgroundColor: theme.colors.surface,
      borderRadius: 12,
      padding: paddingStyles[padding],
      borderWidth: 1,
      borderColor: theme.colors.border,
      ...(elevation && {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
      }),
    };
  };

  return <View style={[getCardStyle(), style]}>{children}</View>;
}; 