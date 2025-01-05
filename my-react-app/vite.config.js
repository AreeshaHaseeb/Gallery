import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Alias '@' for absolute imports
    },
    extensions: ['.js', '.jsx'], // Ensure .jsx files are resolved
  },
  logLevel: 'debug', // Enable debug logs for more details
});
