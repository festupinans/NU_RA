import FFmpeg from '/node_modules/.vite/deps/@ffmpeg_ffmpeg.js'
const ffmpeg = new FFmpeg();
await ffmpeg.load();
console.log(ffmpeg);

// Importa FFmpeg y fetchFile
// import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';

// Crear una instancia de FFmpeg
// const ffmpeg = createFFmpeg({ log: true });
// import ffmpeg from '@ffmpeg/ffmpeg/esm/index.js'


window.onload = () => {
  alert('Hello World!');
}

export function CerrarBTN(){
  window.close();
}

// export async function processBlob(blob) {
//   try {
//       await ffmpeg.load();
//       ffmpeg.FS('writeFile', 'input.webm', await fetchFile(blob));
//       await ffmpeg.run('-i', 'input.webm', '-c:v', 'libx264', '-crf', '23', '-preset', 'fast', '-an', 'output.mp4');
//       const data = ffmpeg.FS('readFile', 'output.mp4');
//       const videoBlob = new Blob([data.buffer], { type: 'video/mp4' });
//       const url = URL.createObjectURL(videoBlob);
//       const a = document.createElement('a');
//       a.href = url;
//       a.download = 'video.mp4';
//       a.click();
//       console.log('Video convertido a MP4');
//       console.log(ffmpeg);
//       alert('Video convertido a MP4');
//   } catch (error) {
//       console.error('Error durante la conversión:', error);
//   }
// }