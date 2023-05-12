import { createCanvas } from 'canvas'
import {writeFileSync} from 'node:fs';
import path from 'path';
const __dirname = path.resolve();

export default function generate_image(textContext) {

  const canvas = createCanvas(800, 400)
  const context = canvas.getContext('2d')
  context.fillStyle = '#000'
  context.fillRect(0, 0, 800, 400)
  context.font = '30px Impact'
  context.fillStyle = '#fff'
  context.fillText(textContext, 50, 100)
  const buffer = canvas.toBuffer('image/png')
  // Save the image to a file
  writeFileSync(__dirname + '/image.png', buffer)

}

