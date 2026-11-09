// Genera versiones ligeras de las imágenes que no pasan por next/image
// (fondos puestos con CSS y el favicon). Uso: node scripts/optimize-images.mjs
import sharp from 'sharp';
import { mkdir, stat } from 'node:fs/promises';
import path from 'node:path';

const SRC = 'public/media';
const OUT = 'public/media/opt';

const jobs = [
  // Fondo de la sección de merxandatge: va casi tapado por un degradado oscuro, así que aguanta calidad baja
  { src: 'FotoRockCity.jpg', name: 'FotoRockCity', widths: [960, 1920], quality: { avif: 45, webp: 60, jpeg: 65 } },
];

const icons = [
  { src: 'LogoGROCFULLA.png', name: 'icon-192', size: 192 },
  { src: 'LogoGROCFULLA.png', name: 'apple-icon-180', size: 180 },
];

const kb = async (file) => `${Math.round((await stat(file)).size / 1024)} KiB`;

await mkdir(OUT, { recursive: true });

for (const { src, name, widths, quality } of jobs) {
  for (const width of widths) {
    const base = sharp(path.join(SRC, src)).resize({ width, withoutEnlargement: true });
    const outputs = [
      [`${name}-${width}.avif`, base.clone().avif({ quality: quality.avif })],
      [`${name}-${width}.webp`, base.clone().webp({ quality: quality.webp })],
      [`${name}-${width}.jpg`, base.clone().jpeg({ quality: quality.jpeg, mozjpeg: true })],
    ];
    for (const [file, pipeline] of outputs) {
      const out = path.join(OUT, file);
      await pipeline.toFile(out);
      console.log(`${out.padEnd(42)} ${await kb(out)}`);
    }
  }
}

for (const { src, name, size } of icons) {
  const out = path.join(OUT, `${name}.png`);
  await sharp(path.join(SRC, src)).resize(size, size).png({ compressionLevel: 9, palette: true }).toFile(out);
  console.log(`${out.padEnd(42)} ${await kb(out)}`);
}
