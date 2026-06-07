import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useMusicStore } from '../store/musicStore';

const MusicPlayer = () => {
  const { currentSong, isPlaying, setIsPlaying } = useMusicStore();
  const [rotation] = useState(new Animated.Value(0));

  useEffect(() => {
    if (isPlaying) {
      Animated.loop(
        Animated.timing(rotation, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: true,
        })
      ).start();
    }
  }, [isPlaying]);

  if (!currentSong) return null;

  const spin = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Animated.View
          style={[
            styles.albumArtContainer,
            { transform: [{ rotate: spin }] },
          ]}
        >
          <Ionicons name="musical-notes" size={30} color="#1DB954" />
        </Animated.View>
        <View style={styles.info}>
          <Text style={styles.title} numberOfLines={1}>
            {currentSong.title}
          </Text>
          <Text style={styles.artist} numberOfLines={1}>
            {currentSong.artist}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => setIsPlaying(!isPlaying)}
        style={styles.playButton}
      >
        <Ionicons
          name={isPlaying ? 'pause' : 'play'}
          size={24}
          color="#1DB954"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#282828',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderTopColor: '#404040',
    borderTopWidth: 1,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  albumArtContainer: {
    width: 45,
    height: 45,
    borderRadius: 4,
    backgroundColor: '#404040',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
  },
  artist: {
    fontSize: 12,
    color: '#b3b3b3',
    marginTop: 2,
  },
  playButton: {
    padding: 8,
  },
});

export default MusicPlayer;
