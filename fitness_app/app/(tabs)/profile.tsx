import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../hooks/useTheme';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

export default function ProfileScreen() {
  const { theme, isDark, toggleTheme } = useTheme();

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
    title: {
      ...theme.typography.h1,
      color: theme.colors.text,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    content: {
      flex: 1,
      padding: theme.spacing.md,
    },
    profileSection: {
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
    },
    avatarText: {
      color: '#FFFFFF',
      fontSize: 32,
      fontWeight: 'bold',
    },
    userName: {
      ...theme.typography.h2,
      color: theme.colors.text,
      marginBottom: theme.spacing.xs,
    },
    userEmail: {
      ...theme.typography.body,
      color: theme.colors.textSecondary,
    },
    sectionTitle: {
      ...theme.typography.h2,
      color: theme.colors.text,
      marginBottom: theme.spacing.md,
      marginTop: theme.spacing.lg,
    },
    settingCard: {
      marginBottom: theme.spacing.sm,
    },
    settingRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    settingInfo: {
      flex: 1,
    },
    settingTitle: {
      ...theme.typography.body,
      color: theme.colors.text,
      fontWeight: '600',
    },
    settingDescription: {
      ...theme.typography.caption,
      color: theme.colors.textSecondary,
      marginTop: 2,
    },
    calendarCard: {
      marginBottom: theme.spacing.sm,
    },
    calendarRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: theme.spacing.sm,
    },
    calendarInfo: {
      flex: 1,
    },
    calendarName: {
      ...theme.typography.body,
      color: theme.colors.text,
      fontWeight: '600',
    },
    calendarStatus: {
      ...theme.typography.caption,
      color: theme.colors.success,
      marginTop: 2,
    },
    statusDot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: theme.colors.success,
      marginRight: theme.spacing.sm,
    },
    disconnectedDot: {
      backgroundColor: theme.colors.error,
    },
    actionButton: {
      marginTop: theme.spacing.md,
    },
  });

  const mockCalendars = [
    { id: 1, name: 'Google Calendar', connected: true },
    { id: 2, name: 'Apple Calendar', connected: false },
    { id: 3, name: 'Outlook Calendar', connected: false },
  ];

  const renderCalendar = (calendar: any) => (
    <Card key={calendar.id} style={styles.calendarCard}>
      <View style={styles.calendarRow}>
        <View style={styles.calendarInfo}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={[styles.statusDot, !calendar.connected && styles.disconnectedDot]} />
            <Text style={styles.calendarName}>{calendar.name}</Text>
          </View>
          <Text style={[styles.calendarStatus, { color: calendar.connected ? theme.colors.success : theme.colors.error }]}>
            {calendar.connected ? 'Connected' : 'Not connected'}
          </Text>
        </View>
        <Button
          title={calendar.connected ? 'Disconnect' : 'Connect'}
          onPress={() => {}}
          variant={calendar.connected ? 'outline' : 'primary'}
          size="small"
        />
      </View>
    </Card>
  );

  const renderSetting = (title: string, description: string, value: boolean, onToggle: () => void) => (
    <Card style={styles.settingCard}>
      <View style={styles.settingRow}>
        <View style={styles.settingInfo}>
          <Text style={styles.settingTitle}>{title}</Text>
          <Text style={styles.settingDescription}>{description}</Text>
        </View>
        <Switch
          value={value}
          onValueChange={onToggle}
          trackColor={{ false: theme.colors.border, true: theme.colors.primary + '40' }}
          thumbColor={value ? theme.colors.primary : theme.colors.textSecondary}
        />
      </View>
    </Card>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>FLEX</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.profileSection}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>JD</Text>
          </View>
          <Text style={styles.userName}>John Doe</Text>
          <Text style={styles.userEmail}>john.doe@example.com</Text>
          <Button
            title="Edit Profile"
            onPress={() => {}}
            variant="outline"
            style={styles.actionButton}
          />
        </View>

        <Text style={styles.sectionTitle}>Connected Calendars</Text>
        {mockCalendars.map(calendar => renderCalendar(calendar))}
        
        <Text style={styles.sectionTitle}>Preferences</Text>
        {renderSetting(
          'Dark Mode',
          'Switch between light and dark theme',
          isDark,
          toggleTheme
        )}
        
        {renderSetting(
          'Push Notifications',
          'Receive notifications for workout invites',
          true,
          () => {}
        )}
        
        {renderSetting(
          'Email Notifications',
          'Get email updates about your workouts',
          false,
          () => {}
        )}

        <Text style={styles.sectionTitle}>Privacy</Text>
        {renderSetting(
          'Show Availability',
          'Let friends see when you\'re free to workout',
          true,
          () => {}
        )}
        
        {renderSetting(
          'Public Profile',
          'Allow others to find you by email or username',
          false,
          () => {}
        )}

        <View style={{ marginTop: theme.spacing.xl, marginBottom: theme.spacing.xl }}>
          <Button
            title="Sign Out"
            onPress={() => {}}
            variant="outline"
            style={{ marginBottom: theme.spacing.md }}
          />
          <TouchableOpacity style={{ alignItems: 'center', padding: theme.spacing.md }}>
            <Text style={[styles.settingDescription, { color: theme.colors.error }]}>
              Delete Account
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
} 