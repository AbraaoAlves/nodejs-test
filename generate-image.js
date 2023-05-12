import { createCanvas } from 'canvas';

import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default (textContent) => {

    const canvas = createCanvas(200, 200)
    const context = canvas.getContext('2d')
    context.fillStyle = '#000'
    context.fillRect(0, 0, 200, 200)
    context.font = '30px Impact'
    context.fillStyle = '#fff'
    context.fillText('hello worlds', 50, 100)
    
    const buffer = canvas.toBuffer('image/png')
    
    // Save the image to a file
    fs.writeFileSync(__dirname + '/image.png', buffer);
}
