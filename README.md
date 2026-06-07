# Music App 🎵

A feature-rich mobile music application built with React Native. Stream, manage, and enjoy your favorite music on the go.

## Features

✨ **Music Playback**
- Play/Pause/Skip controls
- Progress slider with time display
- Previous/Next track navigation
- Shuffle and repeat modes

📻 **Music Discovery**
- Browse music library
- Search by song title or artist
- Genre-based browsing
- Recently played tracks

📝 **Playlist Management**
- Create custom playlists
- Add/Remove songs from playlists
- View playlist details
- Favorites playlist
- Recently played playlist

🎨 **User Interface**
- Clean, modern dark theme
- Responsive design
- Smooth animations
- Intuitive navigation

⚙️ **Settings**
- Audio quality preferences
- Playback options
- Dark mode toggle
- Notification settings

## Project Structure

```
music-app/
├── src/
│   ├── screens/
│   │   ├── HomeScreen.tsx
│   │   ├── PlayerScreen.tsx
│   │   ├── PlaylistsScreen.tsx
│   │   ├── SearchScreen.tsx
│   │   └── SettingsScreen.tsx
│   ├── components/
│   │   └── MusicPlayer.tsx
│   ├── store/
│   │   └── musicStore.ts
│   ├── utils/
│   │   └── audioService.ts
│   └── data/
│       └── mockData.ts
├── App.tsx
├── package.json
├── tsconfig.json
└── README.md
```

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sairo001/music-app.git
   cd music-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Install React Native CLI** (if not already installed)
   ```bash
   npm install -g react-native-cli
   ```

## Running the App

### For iOS
```bash
npm run ios
```

### For Android
```bash
npm run android
```

### Start Metro Server
```bash
npm start
```

## Technologies Used

- **React Native** - Cross-platform mobile framework
- **TypeScript** - Type-safe JavaScript
- **React Navigation** - Navigation library
- **Zustand** - State management
- **React Native Vector Icons** - Icon library
- **Axios** - HTTP client

## Key Dependencies

- `react-native-gesture-handler` - Gesture handling
- `react-native-reanimated` - Smooth animations
- `react-native-track-player` - Audio playback control
- `@react-navigation/*` - Navigation stack

## Future Enhancements

- [ ] Real audio streaming integration
- [ ] User authentication
- [ ] Cloud backup for playlists
- [ ] Offline downloads
- [ ] Social sharing
- [ ] Equalizer control
- [ ] Lyrics display
- [ ] Integration with Spotify/Apple Music APIs
- [ ] Podcast support
- [ ] Radio stations

## API Integration

The app currently uses mock data. To integrate with real music services:

1. Replace `mockData.ts` with actual API calls
2. Implement proper authentication
3. Update `audioService.ts` with real playback logic

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see LICENSE file for details

## Support

For support, email support@musicapp.com or open an issue on GitHub.

---

**Happy Listening! 🎧**
