import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    base: './',
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          about: path.resolve(__dirname, 'about.html'),
          services: path.resolve(__dirname, 'services.html'),
          gallery: path.resolve(__dirname, 'gallery.html'),
          contact: path.resolve(__dirname, 'contact.html'),
        },
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
  };
});
