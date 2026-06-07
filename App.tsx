import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './src/screens/HomeScreen';
import PlayerScreen from './src/screens/PlayerScreen';
import PlaylistsScreen from './src/screens/PlaylistsScreen';
import SearchScreen from './src/screens/SearchScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#1a1a1a',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{ title: 'Music Library' }}
      />
      <Stack.Screen
        name="Player"
        component={PlayerScreen}
        options={{ title: 'Now Playing' }}
      />
    </Stack.Navigator>
  );
}

function PlaylistStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#1a1a1a',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="PlaylistsTab"
        component={PlaylistsScreen}
        options={{ title: 'Playlists' }}
      />
    </Stack.Navigator>
  );
}

function SearchStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#1a1a1a',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="SearchTab"
        component={SearchScreen}
        options={{ title: 'Search' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Playlists') {
                iconName = focused ? 'list' : 'list-outline';
              } else if (route.name === 'Search') {
                iconName = focused ? 'search' : 'search-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'settings' : 'settings-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#1DB954',
            tabBarInactiveTintColor: '#888',
            tabBarStyle: {
              backgroundColor: '#121212',
              borderTopColor: '#282828',
              borderTopWidth: 1,
            },
          })}
        >
          <Tab.Screen
            name="Home"
            component={HomeStack}
            options={{
              title: 'Home',
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Playlists"
            component={PlaylistStack}
            options={{
              title: 'Playlists',
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Search"
            component={SearchStack}
            options={{
              title: 'Search',
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              title: 'Settings',
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
