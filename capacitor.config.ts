import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'drag-and-drop',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
