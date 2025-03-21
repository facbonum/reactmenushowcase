import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { Link } from 'react-router-dom';


export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')   // ✅ Use `./src` instead of `src`
    }
  }
});
