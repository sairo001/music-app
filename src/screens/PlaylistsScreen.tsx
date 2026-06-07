import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useMusicStore } from '../store/musicStore';

const PlaylistsScreen = ({ navigation }) => {
  const { playlists } = useMusicStore();

  const renderPlaylistItem = ({ item }) => (
    <TouchableOpacity style={styles.playlistItem}>
      <View style={styles.playlistThumbnail}>
        <Ionicons name="list" size={40} color="#1DB954" />
      </View>
      <View style={styles.playlistInfo}>
        <Text style={styles.playlistName}>{item.name}</Text>
        <Text style={styles.songCount}>{item.songs.length} songs</Text>
      </View>
      <Ionicons name="chevron-forward" size={24} color="#b3b3b3" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.createButton}>
        <Ionicons name="add-circle" size={28} color="#1DB954" />
        <Text style={styles.createButtonText}>Create Playlist</Text>
      </TouchableOpacity>

      <FlatList
        data={playlists}
        renderItem={renderPlaylistItem}
        keyExtractor={(item) => item.id}
        scrollEnabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  createButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomColor: '#282828',
    borderBottomWidth: 1,
  },
  createButtonText: {
    marginLeft: 12,
    fontSize: 16,
    fontWeight: '600',
    color: '#1DB954',
  },
  playlistItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomColor: '#282828',
    borderBottomWidth: 1,
  },
  playlistThumbnail: {
    width: 50,
    height: 50,
    borderRadius: 4,
    backgroundColor: '#282828',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  playlistInfo: {
    flex: 1,
  },
  playlistName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  songCount: {
    fontSize: 13,
    color: '#b3b3b3',
    marginTop: 4,
  },
});

export default PlaylistsScreen;
