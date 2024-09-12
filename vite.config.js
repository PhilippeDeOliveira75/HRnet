import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [
    react(),
    Pages({
      dirs: 'src/pages'
    })
  ],

  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, '/src')
      },
      {
        find: '@assets',
        replacement: path.resolve(__dirname, 'src/assets')
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components')
      },
      {
        find: '@pages',
        replacement: path.resolve(__dirname, 'src/pages')
      },
      {
        find: '@helpers',
        replacement: path.resolve(__dirname, 'src/_helpers')
      },
      {
        find: '@utils',
        replacement: path.resolve(__dirname, 'src/_utils')
      },
      {
        find: '@data',
        replacement: path.resolve(__dirname, 'src/_data')
      },
      {
        find: '@redux',
        replacement: path.resolve(__dirname, 'src/redux')
      }
    ]
  },
})