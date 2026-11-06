/**
 * Synthesizes realistic, soothing ambient ocean waves sound using Web Audio API.
 * Uses pink-noise buffers filtered through resonant biquad filters and modulated
 * by multi-phase LFOs to create rhythmic swells, foaming crests, and gentle undertows.
 * Fully self-contained, offline-compatible, and requires no external audio assets.
 */

class OceanAudioSynthesizer {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private isRunning: boolean = false;
  private volume: number = 0.5;
  private swellTimer: number | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      this.ctx = new AudioContextClass();
    }
  }

  // Generates 5 seconds of warm pink noise buffer (1/f drop-off)
  private createPinkNoiseBuffer(ctx: AudioContext): AudioBuffer {
    const bufferSize = ctx.sampleRate * 5;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.08;
      b6 = white * 0.115926;
    }
    return buffer;
  }

  public async start(): Promise<boolean> {
    try {
      this.initContext();
      if (!this.ctx) return false;

      if (this.ctx.state === 'suspended') {
        await this.ctx.resume();
      }

      if (this.isRunning) return true;

      // Master gain node
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0, this.ctx.currentTime);
      this.masterGain.gain.linearRampToValueAtTime(this.volume, this.ctx.currentTime + 1.8);
      this.masterGain.connect(this.ctx.destination);

      const pinkBuffer = this.createPinkNoiseBuffer(this.ctx);

      // Layer 1: Deep ocean body swell (lowpass filter oscillating ~180Hz - 420Hz)
      const swellSource = this.ctx.createBufferSource();
      swellSource.buffer = pinkBuffer;
      swellSource.loop = true;

      const swellFilter = this.ctx.createBiquadFilter();
      swellFilter.type = 'lowpass';
      swellFilter.frequency.setValueAtTime(240, this.ctx.currentTime);
      swellFilter.Q.setValueAtTime(1.8, this.ctx.currentTime);

      const swellGain = this.ctx.createGain();
      swellGain.gain.setValueAtTime(0.5, this.ctx.currentTime);

      swellSource.connect(swellFilter);
      swellFilter.connect(swellGain);
      swellGain.connect(this.masterGain);
      swellSource.start();

      // Layer 2: Foam breaking and sea spray (bandpass filter ~800Hz - 1600Hz)
      const foamSource = this.ctx.createBufferSource();
      foamSource.buffer = pinkBuffer;
      foamSource.loop = true;

      const foamFilter = this.ctx.createBiquadFilter();
      foamFilter.type = 'bandpass';
      foamFilter.frequency.setValueAtTime(950, this.ctx.currentTime);
      foamFilter.Q.setValueAtTime(1.2, this.ctx.currentTime);

      const foamGain = this.ctx.createGain();
      foamGain.gain.setValueAtTime(0.18, this.ctx.currentTime);

      foamSource.connect(foamFilter);
      foamFilter.connect(foamGain);
      foamGain.connect(this.masterGain);
      foamSource.start();

      // Layer 3: Sub-bass ocean power rumble
      const subSource = this.ctx.createBufferSource();
      subSource.buffer = pinkBuffer;
      subSource.loop = true;

      const subFilter = this.ctx.createBiquadFilter();
      subFilter.type = 'lowpass';
      subFilter.frequency.setValueAtTime(90, this.ctx.currentTime);

      const subGain = this.ctx.createGain();
      subGain.gain.setValueAtTime(0.35, this.ctx.currentTime);

      subSource.connect(subFilter);
      subFilter.connect(subGain);
      subGain.connect(this.masterGain);
      subSource.start();

      // Procedural swell modulation cycle (~7.5s wave cycle)
      const scheduleWaveCycles = () => {
        if (!this.ctx || !this.isRunning) return;
        const now = this.ctx.currentTime;
        const cycle = 7.5; // seconds per wave

        // Wave rise (3.2s)
        swellFilter.frequency.exponentialRampToValueAtTime(580, now + 3.2);
        swellGain.gain.linearRampToValueAtTime(0.85, now + 3.2);

        foamFilter.frequency.exponentialRampToValueAtTime(1800, now + 3.4);
        foamGain.gain.linearRampToValueAtTime(0.38, now + 3.4);

        // Wave break & recede (4.3s)
        swellFilter.frequency.exponentialRampToValueAtTime(190, now + cycle);
        swellGain.gain.linearRampToValueAtTime(0.3, now + cycle);

        foamFilter.frequency.exponentialRampToValueAtTime(700, now + cycle);
        foamGain.gain.linearRampToValueAtTime(0.08, now + cycle);
      };

      this.isRunning = true;
      scheduleWaveCycles();
      this.swellTimer = window.setInterval(() => {
        if (this.isRunning) {
          scheduleWaveCycles();
        }
      }, 7500);

      return true;
    } catch (e) {
      console.warn('AudioContext initialization failed or autoplay prevented:', e);
      this.isRunning = false;
      return false;
    }
  }

  public stop() {
    if (!this.isRunning || !this.ctx || !this.masterGain) return;
    try {
      if (this.swellTimer) {
        clearInterval(this.swellTimer);
        this.swellTimer = null;
      }
      const now = this.ctx.currentTime;
      this.masterGain.gain.linearRampToValueAtTime(0.001, now + 1.2);
      setTimeout(() => {
        if (this.ctx && !this.isRunning) {
          this.ctx.close();
          this.ctx = null;
        }
      }, 1300);
      this.isRunning = false;
    } catch (e) {
      console.warn('Error stopping ocean audio:', e);
      this.isRunning = false;
    }
  }

  public toggle(): boolean {
    if (this.isRunning) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public setMasterVolume(val: number) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.masterGain && this.ctx && this.isRunning) {
      this.masterGain.gain.linearRampToValueAtTime(this.volume, this.ctx.currentTime + 0.1);
    }
  }

  public getVolume(): number {
    return this.volume;
  }

  public getIsPlaying(): boolean {
    return this.isRunning;
  }
}

export const oceanAudio = new OceanAudioSynthesizer();
