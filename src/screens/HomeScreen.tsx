import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useMusicStore } from '../store/musicStore';
import { mockSongs } from '../data/mockData';

const HomeScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const { songs, setSongs, setCurrentSong, addToPlaylist } = useMusicStore();

  useEffect(() => {
    // Simulate loading songs
    setTimeout(() => {
      setSongs(mockSongs);
      setLoading(false);
    }, 500);
  }, []);

  const handlePlaySong = (song) => {
    setCurrentSong(song);
    navigation.navigate('Player');
  };

  const renderSongItem = ({ item }) => (
    <TouchableOpacity
      style={styles.songItem}
      onPress={() => handlePlaySong(item)}
    >
      <View style={styles.songContent}>
        <Image
          source={{ uri: item.albumArt }}
          style={styles.albumArt}
        />
        <View style={styles.songInfo}>
          <Text style={styles.songTitle}>{item.title}</Text>
          <Text style={styles.songArtist}>{item.artist}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => addToPlaylist('Favorites', item)}
        style={styles.favoriteBtn}
      >
        <Ionicons name="heart-outline" size={20} color="#1DB954" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#1DB954" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={songs}
        renderItem={renderSongItem}
        keyExtractor={(item) => item.id}
        scrollEnabled={true}
        showsVerticalScrollIndicator={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  songItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomColor: '#282828',
    borderBottomWidth: 1,
  },
  songContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  albumArt: {
    width: 50,
    height: 50,
    borderRadius: 4,
    marginRight: 12,
  },
  songInfo: {
    flex: 1,
  },
  songTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  songArtist: {
    fontSize: 13,
    color: '#b3b3b3',
    marginTop: 4,
  },
  favoriteBtn: {
    padding: 8,
  },
});

export default HomeScreen;
