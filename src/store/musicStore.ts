import { create } from 'zustand';

interface Song {
  id: string;
  title: string;
  artist: string;
  duration: number;
  albumArt: string;
  genre: string;
}

interface Playlist {
  id: string;
  name: string;
  songs: Song[];
  createdAt: Date;
}

interface MusicStore {
  songs: Song[];
  currentSong: Song | null;
  isPlaying: boolean;
  playlists: Playlist[];
  setSongs: (songs: Song[]) => void;
  setCurrentSong: (song: Song) => void;
  setIsPlaying: (isPlaying: boolean) => void;
  addToPlaylist: (playlistId: string, song: Song) => void;
  createPlaylist: (name: string) => void;
  removeFromPlaylist: (playlistId: string, songId: string) => void;
}

export const useMusicStore = create<MusicStore>((set) => ({
  songs: [],
  currentSong: null,
  isPlaying: false,
  playlists: [
    {
      id: '1',
      name: 'Favorites',
      songs: [],
      createdAt: new Date(),
    },
    {
      id: '2',
      name: 'Recently Played',
      songs: [],
      createdAt: new Date(),
    },
  ],

  setSongs: (songs) => set({ songs }),

  setCurrentSong: (song) => set({ currentSong: song }),

  setIsPlaying: (isPlaying) => set({ isPlaying }),

  addToPlaylist: (playlistId, song) =>
    set((state) => ({
      playlists: state.playlists.map((playlist) =>
        playlist.id === playlistId
          ? {
              ...playlist,
              songs: [...playlist.songs, song],
            }
          : playlist
      ),
    })),

  createPlaylist: (name) =>
    set((state) => ({
      playlists: [
        ...state.playlists,
        {
          id: Math.random().toString(),
          name,
          songs: [],
          createdAt: new Date(),
        },
      ],
    })),

  removeFromPlaylist: (playlistId, songId) =>
    set((state) => ({
      playlists: state.playlists.map((playlist) =>
        playlist.id === playlistId
          ? {
              ...playlist,
              songs: playlist.songs.filter((s) => s.id !== songId),
            }
          : playlist
      ),
    })),
}));
