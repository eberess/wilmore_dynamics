import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function generateImages() {
  try {
    // Copier les SVG originaux
    fs.copyFileSync(
      path.join(process.cwd(), 'public/logo.svg'),
      path.join(process.cwd(), 'public/logo-original.svg')
    );
    
    fs.copyFileSync(
      path.join(process.cwd(), 'public/og-image.svg'),
      path.join(process.cwd(), 'public/og-image-original.svg')
    );

    // Générer les versions raster pour la compatibilité
    const ogSvg = fs.readFileSync(path.join(process.cwd(), 'public/og-image.svg'));
    await sharp(ogSvg)
      .jpeg({ quality: 90 })
      .toFile(path.join(process.cwd(), 'public/og-image.jpg'));

    const logo = fs.readFileSync(path.join(process.cwd(), 'public/logo.svg'));
    await sharp(logo)
      .png()
      .toFile(path.join(process.cwd(), 'public/favicon.png'));

    await sharp(logo)
      .resize(180, 180)
      .png()
      .toFile(path.join(process.cwd(), 'public/apple-touch-icon.png'));

    console.log('Images générées avec succès !');
  } catch (error) {
    console.error('Erreur lors de la génération des images:', error);
  }
}

generateImages(); 