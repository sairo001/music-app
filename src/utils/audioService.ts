/**
 * Audio Service
 * Handles all audio playback operations
 */

interface AudioState {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
}

class AudioService {
  private audioState: AudioState = {
    isPlaying: false,
    currentTime: 0,
    duration: 0,
  };

  private listeners: Array<(state: AudioState) => void> = [];

  /**
   * Play audio file
   * @param url - Audio file URL
   */
  async play(url: string): Promise<void> {
    try {
      this.audioState.isPlaying = true;
      this.notifyListeners();
      // Implementation for actual audio playback
    } catch (error) {
      console.error('Error playing audio:', error);
    }
  }

  /**
   * Pause current playback
   */
  pause(): void {
    this.audioState.isPlaying = false;
    this.notifyListeners();
  }

  /**
   * Resume playback
   */
  resume(): void {
    this.audioState.isPlaying = true;
    this.notifyListeners();
  }

  /**
   * Stop playback and reset
   */
  stop(): void {
    this.audioState = {
      isPlaying: false,
      currentTime: 0,
      duration: 0,
    };
    this.notifyListeners();
  }

  /**
   * Seek to specific time
   * @param time - Time in seconds
   */
  seek(time: number): void {
    this.audioState.currentTime = time;
    this.notifyListeners();
  }

  /**
   * Subscribe to audio state changes
   */
  subscribe(listener: (state: AudioState) => void): () => void {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  /**
   * Notify all listeners of state change
   */
  private notifyListeners(): void {
    this.listeners.forEach((listener) => listener(this.audioState));
  }

  /**
   * Get current audio state
   */
  getState(): AudioState {
    return this.audioState;
  }
}

export default new AudioService();
