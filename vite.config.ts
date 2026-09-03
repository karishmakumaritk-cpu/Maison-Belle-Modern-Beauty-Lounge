import fs from 'fs';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    base: './',
    plugins: [
      {
        name: 'copy-static-js-assets',
        closeBundle() {
          const distJs = path.resolve(__dirname, 'dist/js');
          const distAssets = path.resolve(__dirname, 'dist/assets');
          fs.mkdirSync(distJs, {recursive: true});
          fs.cpSync(path.resolve(__dirname, 'js'), distJs, {recursive: true});
          if (fs.existsSync(path.resolve(__dirname, 'assets'))) {
            fs.mkdirSync(distAssets, {recursive: true});
            fs.cpSync(path.resolve(__dirname, 'assets'), distAssets, {recursive: true});
          }
        },
      },
    ],
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
