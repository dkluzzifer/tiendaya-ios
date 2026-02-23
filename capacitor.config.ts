import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tiendaya.app',
  appName: 'Tiendaya',
  webDir: 'src',
  server: {
    androidScheme: 'https'
  },
  ios: {
    targets: ['iphone']
  }
};

export default config;
