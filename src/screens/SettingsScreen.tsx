import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Switch,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SettingsScreen = () => {
  const [darkMode, setDarkMode] = React.useState(true);
  const [notifications, setNotifications] = React.useState(true);
  const [qualityHigh, setQualityHigh] = React.useState(true);

  const renderSettingRow = (icon, title, value, onToggle) => (
    <View style={styles.settingRow}>
      <View style={styles.settingContent}>
        <Ionicons name={icon} size={24} color="#1DB954" />
        <Text style={styles.settingTitle}>{title}</Text>
      </View>
      <Switch
        value={value}
        onValueChange={onToggle}
        trackColor={{ false: '#404040', true: '#1DB954' }}
        thumbColor="#fff"
      />
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Audio Settings */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Audio</Text>
        {renderSettingRow(
          'volume-high',
          'High Quality Audio',
          qualityHigh,
          setQualityHigh
        )}
      </View>

      {/* Playback Settings */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Playback</Text>
        <TouchableOpacity style={styles.settingRow}>
          <View style={styles.settingContent}>
            <Ionicons name="shuffle" size={24} color="#1DB954" />
            <Text style={styles.settingTitle}>Shuffle by Default</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#b3b3b3" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingRow}>
          <View style={styles.settingContent}>
            <Ionicons name="repeat" size={24} color="#1DB954" />
            <Text style={styles.settingTitle}>Repeat Mode</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#b3b3b3" />
        </TouchableOpacity>
      </View>

      {/* General Settings */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>General</Text>
        {renderSettingRow(
          'moon',
          'Dark Mode',
          darkMode,
          setDarkMode
        )}
        {renderSettingRow(
          'notifications',
          'Notifications',
          notifications,
          setNotifications
        )}
      </View>

      {/* About */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <TouchableOpacity style={styles.settingRow}>
          <View style={styles.settingContent}>
            <Ionicons name="information-circle" size={24} color="#1DB954" />
            <Text style={styles.settingTitle}>Version</Text>
          </View>
          <Text style={styles.versionText}>1.0.0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingRow}>
          <View style={styles.settingContent}>
            <Ionicons name="help-circle" size={24} color="#1DB954" />
            <Text style={styles.settingTitle}>Help & Support</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#b3b3b3" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  section: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1DB954',
    marginLeft: 16,
    marginBottom: 12,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomColor: '#282828',
    borderBottomWidth: 1,
  },
  settingContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 12,
  },
  versionText: {
    fontSize: 14,
    color: '#b3b3b3',
  },
});

export default SettingsScreen;
