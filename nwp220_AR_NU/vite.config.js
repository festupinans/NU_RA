// import { defineConfig } from 'vite';

// export default defineConfig({
//   optimizeDeps: {
//     include: ['@ffmpeg/ffmpeg']
//   },
//   server: {
//     proxy: {
//       '/ffmpeg-core': {
//         target: 'https://unpkg.com',
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/ffmpeg-core/, '/@ffmpeg/core@0.12.6/dist/esm'),
//       },
//     },
//   },
// });
