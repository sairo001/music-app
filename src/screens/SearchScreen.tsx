import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useMusicStore } from '../store/musicStore';

const SearchScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const { songs, setCurrentSong } = useMusicStore();

  const filteredSongs = songs.filter(
    (song) =>
      song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePlaySong = (song) => {
    setCurrentSong(song);
    navigation.navigate('Home', { screen: 'Player' });
  };

  const renderSongItem = ({ item }) => (
    <TouchableOpacity
      style={styles.songItem}
      onPress={() => handlePlaySong(item)}
    >
      <Image
        source={{ uri: item.albumArt }}
        style={styles.albumArt}
      />
      <View style={styles.songInfo}>
        <Text style={styles.songTitle}>{item.title}</Text>
        <Text style={styles.songArtist}>{item.artist}</Text>
      </View>
      <Ionicons name="play-circle" size={24} color="#1DB954" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Ionicons name="search" size={20} color="#b3b3b3" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search songs, artists..."
          placeholderTextColor="#b3b3b3"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {searchQuery !== '' && (
          <TouchableOpacity onPress={() => setSearchQuery('')}>
            <Ionicons name="close-circle" size={20} color="#b3b3b3" />
          </TouchableOpacity>
        )}
      </View>

      {searchQuery === '' ? (
        <View style={styles.emptyContainer}>
          <Ionicons name="search" size={64} color="#404040" />
          <Text style={styles.emptyText}>Search for songs or artists</Text>
        </View>
      ) : (
        <FlatList
          data={filteredSongs}
          renderItem={renderSongItem}
          keyExtractor={(item) => item.id}
          scrollEnabled={true}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No results found</Text>
            </View>
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#282828',
    borderRadius: 25,
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 8,
    fontSize: 14,
    color: '#fff',
  },
  songItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomColor: '#282828',
    borderBottomWidth: 1,
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
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#b3b3b3',
    marginTop: 16,
  },
});

export default SearchScreen;
