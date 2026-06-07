import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Slider,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useMusicStore } from '../store/musicStore';

const PlayerScreen = () => {
  const { currentSong, isPlaying, setIsPlaying, songs } = useMusicStore();
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(180); // Mock duration in seconds

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    const currentIndex = songs.findIndex((s) => s.id === currentSong?.id);
    if (currentIndex < songs.length - 1) {
      // Play next song
    }
  };

  const handlePrevious = () => {
    const currentIndex = songs.findIndex((s) => s.id === currentSong?.id);
    if (currentIndex > 0) {
      // Play previous song
    }
  };

  if (!currentSong) {
    return (
      <View style={styles.container}>
        <Text style={styles.emptyText}>No song selected</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Album Art */}
      <View style={styles.albumContainer}>
        <Image
          source={{ uri: currentSong.albumArt }}
          style={styles.albumArt}
        />
      </View>

      {/* Song Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.songTitle}>{currentSong.title}</Text>
        <Text style={styles.songArtist}>{currentSong.artist}</Text>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={duration}
          value={progress}
          onValueChange={setProgress}
          minimumTrackTintColor="#1DB954"
          maximumTrackTintColor="#404040"
          thumbTintColor="#1DB954"
        />
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>{formatTime(progress)}</Text>
          <Text style={styles.timeText}>{formatTime(duration)}</Text>
        </View>
      </View>

      {/* Controls */}
      <View style={styles.controlsContainer}>
        <TouchableOpacity onPress={handlePrevious}>
          <Ionicons name="play-skip-back" size={32} color="#1DB954" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.playButton}
          onPress={handlePlayPause}
        >
          <Ionicons
            name={isPlaying ? 'pause' : 'play'}
            size={40}
            color="#fff"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleNext}>
          <Ionicons name="play-skip-forward" size={32} color="#1DB954" />
        </TouchableOpacity>
      </View>

      {/* Additional Controls */}
      <View style={styles.additionalControls}>
        <TouchableOpacity>
          <Ionicons name="repeat" size={24} color="#b3b3b3" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="shuffle" size={24} color="#b3b3b3" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="heart-outline" size={24} color="#b3b3b3" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="share-social" size={24} color="#b3b3b3" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
    justifyContent: 'space-between',
  },
  albumContainer: {
    alignItems: 'center',
    marginVertical: 40,
  },
  albumArt: {
    width: 280,
    height: 280,
    borderRadius: 8,
  },
  infoContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  songTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
  },
  songArtist: {
    fontSize: 16,
    color: '#b3b3b3',
    marginTop: 8,
  },
  progressContainer: {
    marginVertical: 20,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  timeText: {
    fontSize: 12,
    color: '#b3b3b3',
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 30,
  },
  playButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#1DB954',
    justifyContent: 'center',
    alignItems: 'center',
  },
  additionalControls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
  },
  emptyText: {
    color: '#b3b3b3',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default PlayerScreen;
