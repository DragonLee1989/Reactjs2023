import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
// publicDir: chi duong dan den thu muc images trong thu muc public tai Local
// base: khi Deploy len thi no chi duong dan den du an Reactjs2023 tren GitHub.IO https://dragonlee1989.github.io/Reactjs2023/

export default defineConfig({
  root: "./",
  build: {
    outDir: "dist",
  },
  publicDir: "public", 
  plugins: [react()],
  base: "/Reactjs2023",
})
