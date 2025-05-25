import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../hooks/useTheme';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

export default function HomeScreen() {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    header: {
      padding: theme.spacing.md,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },
    headerTop: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing.sm,
    },
    appTitle: {
      ...theme.typography.h1,
      color: theme.colors.text,
      fontWeight: 'bold',
    },
    friendsButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.surface,
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: theme.colors.border,
    },
    friendsButtonText: {
      ...theme.typography.body,
      color: theme.colors.text,
      marginLeft: theme.spacing.xs,
    },
    greeting: {
      ...theme.typography.body,
      color: theme.colors.textSecondary,
    },
    content: {
      flex: 1,
    },
    sectionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
    },
    sectionTitle: {
      ...theme.typography.h2,
      color: theme.colors.text,
    },
    seeAllButton: {
      ...theme.typography.body,
      color: theme.colors.primary,
      fontWeight: '600',
    },
    groupsScroll: {
      paddingLeft: theme.spacing.md,
    },
    groupCard: {
      width: 280,
      marginRight: theme.spacing.md,
      height: 160,
    },
    groupCardContent: {
      flex: 1,
      justifyContent: 'space-between',
    },
    groupHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
    groupName: {
      ...theme.typography.h2,
      color: theme.colors.text,
      flex: 1,
    },
    memberCount: {
      ...theme.typography.caption,
      color: theme.colors.textSecondary,
      backgroundColor: theme.colors.secondary,
      paddingHorizontal: theme.spacing.sm,
      paddingVertical: theme.spacing.xs,
      borderRadius: 12,
    },
    groupDescription: {
      ...theme.typography.body,
      color: theme.colors.textSecondary,
      marginVertical: theme.spacing.sm,
    },
    groupFooter: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    memberAvatars: {
      flexDirection: 'row',
    },
    avatar: {
      width: 24,
      height: 24,
      borderRadius: 12,
      backgroundColor: theme.colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: -6,
      borderWidth: 1,
      borderColor: theme.colors.surface,
    },
    avatarText: {
      color: '#FFFFFF',
      fontSize: 10,
      fontWeight: 'bold',
    },
    nextWorkout: {
      ...theme.typography.caption,
      color: theme.colors.success,
      fontWeight: '600',
    },
    upcomingSection: {
      padding: theme.spacing.md,
    },
    upcomingCard: {
      marginBottom: theme.spacing.md,
    },
    workoutHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: theme.spacing.sm,
    },
    workoutTitle: {
      ...theme.typography.body,
      color: theme.colors.text,
      fontWeight: '600',
      flex: 1,
    },
    workoutTime: {
      ...theme.typography.caption,
      color: theme.colors.primary,
      fontWeight: '600',
    },
    workoutDetails: {
      marginBottom: theme.spacing.sm,
    },
    workoutDetail: {
      ...theme.typography.caption,
      color: theme.colors.textSecondary,
      marginBottom: 2,
    },
    workoutActions: {
      flexDirection: 'row',
      gap: theme.spacing.sm,
    },
    quickActions: {
      flexDirection: 'row',
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
      gap: theme.spacing.sm,
    },
    quickActionCard: {
      flex: 1,
      alignItems: 'center',
      padding: theme.spacing.md,
    },
    quickActionIcon: {
      width: 48,
      height: 48,
      borderRadius: 24,
      backgroundColor: theme.colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: theme.spacing.sm,
    },
    quickActionText: {
      ...theme.typography.caption,
      color: theme.colors.text,
      textAlign: 'center',
      fontWeight: '600',
    },
    emptyState: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: theme.spacing.xl,
    },
    emptyText: {
      ...theme.typography.body,
      color: theme.colors.textSecondary,
      textAlign: 'center',
    },
  });

  const myGroups = [
    {
      id: 1,
      name: 'Morning Warriors',
      description: 'Early morning HIIT and cardio sessions',
      memberCount: 8,
      members: [
        { initials: 'SJ' },
        { initials: 'MC' },
        { initials: 'ED' },
      ],
      nextWorkout: 'Tomorrow 7AM',
    },
    {
      id: 2,
      name: 'Mindful Movers',
      description: 'Yoga and meditation for inner peace',
      memberCount: 12,
      members: [
        { initials: 'LM' },
        { initials: 'DT' },
        { initials: 'KL' },
      ],
      nextWorkout: 'Today 6:30PM',
    },
    {
      id: 3,
      name: 'Rock Climbers',
      description: 'Indoor and outdoor climbing adventures',
      memberCount: 6,
      members: [
        { initials: 'AR' },
        { initials: 'JW' },
      ],
      nextWorkout: 'Saturday 10AM',
    },
  ];

  const upcomingWorkouts = [
    {
      id: 1,
      title: 'Evening Yoga Flow',
      time: 'Today, 6:30 PM',
      location: 'Zen Studio',
      group: 'Mindful Movers',
    },
  ];

  const renderGroup = (group: any) => (
    <TouchableOpacity key={group.id}>
      <Card style={styles.groupCard}>
        <View style={styles.groupCardContent}>
          <View style={styles.groupHeader}>
            <Text style={styles.groupName}>{group.name}</Text>
            <Text style={styles.memberCount}>{group.memberCount}</Text>
          </View>
          
          <Text style={styles.groupDescription}>{group.description}</Text>
          
          <View style={styles.groupFooter}>
            <View style={styles.memberAvatars}>
              {group.members.map((member: any, index: number) => (
                <View key={index} style={[styles.avatar, index === 0 && { marginLeft: 0 }]}>
                  <Text style={styles.avatarText}>{member.initials}</Text>
                </View>
              ))}
            </View>
            <Text style={styles.nextWorkout}>{group.nextWorkout}</Text>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );

  const renderQuickAction = (icon: string, title: string, onPress: () => void) => (
    <TouchableOpacity onPress={onPress}>
      <Card style={styles.quickActionCard}>
        <View style={styles.quickActionIcon}>
          <Text style={{ color: '#FFFFFF', fontSize: 20 }}>{icon}</Text>
        </View>
        <Text style={styles.quickActionText}>{title}</Text>
      </Card>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.appTitle}>FLEX</Text>
          <TouchableOpacity style={styles.friendsButton}>
            <Text style={{ fontSize: 16 }}>👥</Text>
            <Text style={styles.friendsButtonText}>Friends</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.greeting}>Ready to flex with your crew? 💪</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.quickActions}>
          {renderQuickAction('🔍', 'Discover', () => {})}
          {renderQuickAction('➕', 'Create Group', () => {})}
          {renderQuickAction('📊', 'My Stats', () => {})}
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>My Groups</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllButton}>See all</Text>
          </TouchableOpacity>
        </View>

        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.groupsScroll}
        >
          {myGroups.map(group => renderGroup(group))}
        </ScrollView>

        <View style={styles.upcomingSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Coming Up</Text>
          </View>

          {upcomingWorkouts.length > 0 ? (
            upcomingWorkouts.map(workout => (
              <Card key={workout.id} style={styles.upcomingCard}>
                <View style={styles.workoutHeader}>
                  <Text style={styles.workoutTitle}>{workout.title}</Text>
                  <Text style={styles.workoutTime}>{workout.time}</Text>
                </View>
                
                <View style={styles.workoutDetails}>
                  <Text style={styles.workoutDetail}>📍 {workout.location}</Text>
                  <Text style={styles.workoutDetail}>👥 {workout.group}</Text>
                </View>
                
                <View style={styles.workoutActions}>
                  <Button
                    title="View Details"
                    onPress={() => {}}
                    variant="outline"
                    size="small"
                    style={{ flex: 1 }}
                  />
                  <Button
                    title="Check In"
                    onPress={() => {}}
                    size="small"
                    style={{ flex: 1 }}
                  />
                </View>
              </Card>
            ))
          ) : (
            <View style={styles.emptyState}>
              <Text style={styles.emptyText}>
                No upcoming workouts. Check out the Discover tab to find new opportunities! 🚀
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
