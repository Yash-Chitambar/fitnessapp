import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  runOnJS,
  interpolate,
  interpolateColor,
} from 'react-native-reanimated';
import { useTheme } from '../../hooks/useTheme';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const SWIPE_THRESHOLD = screenWidth * 0.25;
const CARD_HEIGHT = screenHeight * 0.7;

interface WorkoutRequest {
  id: number;
  type: 'friend_request' | 'workout_invite';
  friend: {
    name: string;
    initials: string;
    avatar?: string;
  };
  workout: {
    title: string;
    time: string;
    duration: string;
    location: string;
    description: string;
  };
  message: string;
  timestamp: string;
}

export default function DiscoverScreen() {
  const { theme } = useTheme();
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const rotate = useSharedValue(0);
  const scale = useSharedValue(1);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [requests, setRequests] = useState<WorkoutRequest[]>([
    {
      id: 1,
      type: 'friend_request',
      friend: {
        name: 'Sarah Johnson',
        initials: 'SJ',
      },
      workout: {
        title: 'Morning Run',
        time: 'Tomorrow, 7:00 AM',
        duration: '45 minutes',
        location: 'Central Park',
        description: 'Join me for an energizing morning run through Central Park! Perfect way to start the day.',
      },
      message: "Hey! Want to join me for a morning run? I know you're usually up early 🏃‍♀️",
      timestamp: '2 hours ago',
    },
    {
      id: 2,
      type: 'workout_invite',
      friend: {
        name: 'Mike Chen',
        initials: 'MC',
      },
      workout: {
        title: 'Gym Session - Upper Body',
        time: 'Today, 6:00 PM',
        duration: '1 hour',
        location: 'FitLife Gym',
        description: 'Upper body strength training session. Bring your A-game! 💪',
      },
      message: "Bro, let's crush some weights tonight! You in?",
      timestamp: '30 minutes ago',
    },
    {
      id: 3,
      type: 'friend_request',
      friend: {
        name: 'Emma Davis',
        initials: 'ED',
      },
      workout: {
        title: 'Yoga & Meditation',
        time: 'Saturday, 9:00 AM',
        duration: '90 minutes',
        location: 'Zen Studio',
        description: 'Peaceful yoga flow followed by guided meditation. Perfect for weekend relaxation.',
      },
      message: "Would love to have you join my weekend yoga session! It's so relaxing 🧘‍♀️",
      timestamp: '1 day ago',
    },
  ]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    header: {
      paddingHorizontal: theme.spacing.lg,
      paddingVertical: theme.spacing.md,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
      alignItems: 'center',
    },
    title: {
      ...theme.typography.h1,
      color: theme.colors.text,
      fontWeight: 'bold',
      fontSize: 28,
      letterSpacing: 1,
    },
    subtitle: {
      ...theme.typography.body,
      color: theme.colors.textSecondary,
      marginTop: theme.spacing.xs,
      fontSize: 14,
    },
    cardContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: theme.spacing.lg,
      paddingVertical: theme.spacing.md,
    },
    requestCard: {
      width: screenWidth - 32,
      height: CARD_HEIGHT,
      borderRadius: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.15,
      shadowRadius: 16,
      elevation: 12,
    },
    cardContent: {
      flex: 1,
      padding: theme.spacing.xl,
      justifyContent: 'space-between',
    },
    friendSection: {
      alignItems: 'center',
      marginBottom: theme.spacing.lg,
    },
    avatar: {
      width: 80,
      height: 80,
      borderRadius: 40,
      backgroundColor: theme.colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: theme.spacing.md,
      shadowColor: theme.colors.primary,
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 6,
    },
    avatarText: {
      color: '#FFFFFF',
      fontSize: 32,
      fontWeight: 'bold',
    },
    friendInfo: {
      alignItems: 'center',
    },
    friendName: {
      ...theme.typography.h2,
      color: theme.colors.text,
      fontSize: 24,
      fontWeight: '600',
      textAlign: 'center',
      marginBottom: theme.spacing.xs,
    },
    timestamp: {
      ...theme.typography.caption,
      color: theme.colors.textSecondary,
      fontSize: 12,
    },
    messageSection: {
      backgroundColor: theme.colors.secondary,
      padding: theme.spacing.lg,
      borderRadius: 16,
      marginVertical: theme.spacing.lg,
      alignItems: 'center',
    },
    message: {
      ...theme.typography.body,
      color: theme.colors.text,
      fontStyle: 'italic',
      textAlign: 'center',
      lineHeight: 22,
      fontSize: 16,
    },
    workoutSection: {
      flex: 1,
      justifyContent: 'center',
    },
    workoutTitle: {
      ...theme.typography.h2,
      color: theme.colors.text,
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: theme.spacing.sm,
    },
    workoutDescription: {
      ...theme.typography.body,
      color: theme.colors.textSecondary,
      textAlign: 'center',
      lineHeight: 20,
      marginBottom: theme.spacing.lg,
      fontSize: 14,
    },
    detailsContainer: {
      backgroundColor: theme.colors.background,
      borderRadius: 12,
      padding: theme.spacing.md,
      marginBottom: theme.spacing.lg,
    },
    detailRow: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: theme.spacing.sm,
      justifyContent: 'flex-start',
    },
    detailIcon: {
      fontSize: 18,
      marginRight: theme.spacing.md,
      width: 24,
      textAlign: 'center',
    },
    detailText: {
      ...theme.typography.body,
      color: theme.colors.text,
      flex: 1,
      fontSize: 15,
      fontWeight: '500',
    },
    actionsContainer: {
      flexDirection: 'row',
      gap: theme.spacing.md,
      paddingHorizontal: theme.spacing.sm,
    },
    actionButton: {
      flex: 1,
      paddingVertical: theme.spacing.md,
      borderRadius: 12,
    },
    swipeHint: {
      position: 'absolute',
      bottom: 40,
      left: 0,
      right: 0,
      alignItems: 'center',
      paddingHorizontal: theme.spacing.lg,
    },
    hintText: {
      ...theme.typography.caption,
      color: theme.colors.textSecondary,
      textAlign: 'center',
      fontSize: 13,
      fontWeight: '500',
    },
    swipeIndicators: {
      position: 'absolute',
      top: '45%',
      left: 0,
      right: 0,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: theme.spacing.xl * 2,
      pointerEvents: 'none',
    },
    declineIndicator: {
      backgroundColor: theme.colors.error,
      paddingHorizontal: theme.spacing.lg,
      paddingVertical: theme.spacing.md,
      borderRadius: 25,
      transform: [{ rotate: '-15deg' }],
      shadowColor: theme.colors.error,
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.4,
      shadowRadius: 8,
      elevation: 6,
    },
    acceptIndicator: {
      backgroundColor: theme.colors.success,
      paddingHorizontal: theme.spacing.lg,
      paddingVertical: theme.spacing.md,
      borderRadius: 25,
      transform: [{ rotate: '15deg' }],
      shadowColor: theme.colors.success,
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.4,
      shadowRadius: 8,
      elevation: 6,
    },
    indicatorText: {
      color: '#FFFFFF',
      fontWeight: 'bold',
      fontSize: 16,
      letterSpacing: 1,
    },
    emptyState: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: theme.spacing.xl,
    },
    emptyText: {
      ...theme.typography.h2,
      color: theme.colors.textSecondary,
      textAlign: 'center',
      marginBottom: theme.spacing.md,
      fontSize: 24,
    },
    emptySubtext: {
      ...theme.typography.body,
      color: theme.colors.textSecondary,
      textAlign: 'center',
      lineHeight: 22,
      marginBottom: theme.spacing.xl,
    },
    backgroundCard: {
      position: 'absolute',
      width: screenWidth - 32,
      height: CARD_HEIGHT,
      borderRadius: 20,
      backgroundColor: theme.colors.surface,
      opacity: 0.3,
      transform: [{ scale: 0.95 }],
    },
  });

  const handleAccept = (request: WorkoutRequest) => {
    Alert.alert(
      'Request Accepted! 🎉',
      `You've accepted ${request.friend.name}'s invitation to "${request.workout.title}". They'll be notified!`,
      [{ text: 'Great!', style: 'default' }]
    );
    nextCard();
  };

  const handleDecline = (request: WorkoutRequest) => {
    Alert.alert(
      'Request Declined',
      `You've declined ${request.friend.name}'s invitation. No worries, maybe next time!`,
      [{ text: 'OK', style: 'default' }]
    );
    nextCard();
  };

  const nextCard = () => {
    setCurrentIndex(prev => prev + 1);
    translateX.value = 0;
    translateY.value = 0;
    rotate.value = 0;
    scale.value = 1;
  };

  const gestureHandler = useAnimatedGestureHandler({
    onStart: () => {
      scale.value = withSpring(1.02);
    },
    onActive: (event) => {
      translateX.value = event.translationX;
      translateY.value = event.translationY * 0.3; // Minimal vertical movement
      rotate.value = interpolate(
        event.translationX,
        [-screenWidth, screenWidth],
        [-10, 10]
      );
    },
    onEnd: (event) => {
      scale.value = withSpring(1);
      
      if (Math.abs(event.translationX) > SWIPE_THRESHOLD) {
        // Swipe away
        const direction = event.translationX > 0 ? 1 : -1;
        translateX.value = withSpring(
          direction * screenWidth * 1.5,
          { velocity: event.velocityX },
          () => {
            if (direction > 0) {
              runOnJS(handleAccept)(requests[currentIndex]);
            } else {
              runOnJS(handleDecline)(requests[currentIndex]);
            }
          }
        );
        translateY.value = withSpring(event.translationY * 0.3, { velocity: event.velocityY });
      } else {
        // Snap back
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
        rotate.value = withSpring(0);
      }
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      translateX.value,
      [-SWIPE_THRESHOLD, 0, SWIPE_THRESHOLD],
      [theme.colors.error + '15', theme.colors.surface, theme.colors.success + '15']
    );

    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { rotate: `${rotate.value}deg` },
        { scale: scale.value },
      ],
      backgroundColor,
    };
  });

  const declineOpacity = useAnimatedStyle(() => ({
    opacity: interpolate(translateX.value, [0, -SWIPE_THRESHOLD], [0, 1]),
    transform: [
      {
        scale: interpolate(translateX.value, [0, -SWIPE_THRESHOLD], [0.8, 1]),
      },
    ],
  }));

  const acceptOpacity = useAnimatedStyle(() => ({
    opacity: interpolate(translateX.value, [0, SWIPE_THRESHOLD], [0, 1]),
    transform: [
      {
        scale: interpolate(translateX.value, [0, SWIPE_THRESHOLD], [0.8, 1]),
      },
    ],
  }));

  const handleAcceptButton = () => {
    translateX.value = withSpring(screenWidth * 1.5, {}, () => {
      runOnJS(handleAccept)(requests[currentIndex]);
    });
  };

  const handleDeclineButton = () => {
    translateX.value = withSpring(-screenWidth * 1.5, {}, () => {
      runOnJS(handleDecline)(requests[currentIndex]);
    });
  };

  const currentRequest = requests[currentIndex];

  if (currentIndex >= requests.length) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>FLEX</Text>
          <Text style={styles.subtitle}>Friend workout requests</Text>
        </View>
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>🎉 All caught up!</Text>
          <Text style={styles.emptySubtext}>
            No new workout requests. Check back later for invitations from your friends!
          </Text>
          <Button
            title="Refresh"
            onPress={() => setCurrentIndex(0)}
            style={{ marginTop: theme.spacing.lg, paddingHorizontal: theme.spacing.xl }}
          />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>FLEX</Text>
        <Text style={styles.subtitle}>Friend workout requests</Text>
      </View>

      <View style={styles.cardContainer}>
        {/* Background card for depth */}
        <View style={styles.backgroundCard} />
        
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View style={[animatedStyle]}>
            <Card style={styles.requestCard}>
              <View style={styles.cardContent}>
                <View style={styles.friendSection}>
                  <View style={styles.avatar}>
                    <Text style={styles.avatarText}>{currentRequest.friend.initials}</Text>
                  </View>
                  <View style={styles.friendInfo}>
                    <Text style={styles.friendName}>{currentRequest.friend.name}</Text>
                    <Text style={styles.timestamp}>{currentRequest.timestamp}</Text>
                  </View>
                </View>

                <View style={styles.messageSection}>
                  <Text style={styles.message}>"{currentRequest.message}"</Text>
                </View>

                <View style={styles.workoutSection}>
                  <Text style={styles.workoutTitle}>{currentRequest.workout.title}</Text>
                  <Text style={styles.workoutDescription}>{currentRequest.workout.description}</Text>

                  <View style={styles.detailsContainer}>
                    <View style={styles.detailRow}>
                      <Text style={styles.detailIcon}>🕐</Text>
                      <Text style={styles.detailText}>{currentRequest.workout.time}</Text>
                    </View>
                    <View style={styles.detailRow}>
                      <Text style={styles.detailIcon}>⏱️</Text>
                      <Text style={styles.detailText}>{currentRequest.workout.duration}</Text>
                    </View>
                    <View style={styles.detailRow}>
                      <Text style={styles.detailIcon}>📍</Text>
                      <Text style={styles.detailText}>{currentRequest.workout.location}</Text>
                    </View>
                  </View>

                  <View style={styles.actionsContainer}>
                    <Button
                      title="Decline"
                      onPress={handleDeclineButton}
                      variant="outline"
                      style={styles.actionButton}
                    />
                    <Button
                      title="Accept!"
                      onPress={handleAcceptButton}
                      style={styles.actionButton}
                    />
                  </View>
                </View>
              </View>
            </Card>
          </Animated.View>
        </PanGestureHandler>

        {/* Swipe Indicators */}
        <View style={styles.swipeIndicators}>
          <Animated.View style={[styles.declineIndicator, declineOpacity]}>
            <Text style={styles.indicatorText}>DECLINE</Text>
          </Animated.View>
          <Animated.View style={[styles.acceptIndicator, acceptOpacity]}>
            <Text style={styles.indicatorText}>ACCEPT</Text>
          </Animated.View>
        </View>

        <View style={styles.swipeHint}>
          <Text style={styles.hintText}>
            Swipe right to accept • Swipe left to decline
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
} 