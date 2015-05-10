import Tool from './base-tool';
import {pixelAt, splitColor, equalColors, updatePixel} from '../utils';

class FillTool extends Tool {
  constructor(ctx) {
    super();
    this.ctx = ctx;
  }

  down({x, y}) {
    let img = this.ctx.getImageData(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    let newColor = splitColor(this.ctx.strokeStyle);

    let pixels = [{x, y}];
    let targetColor = pixelAt(img, x, y);

    let maxX  = img.width - 1;
    let maxY = img.height - 1;

    while (pixels.length) {
      let pixel = pixels.pop();
      let pixelColor = pixelAt(img, pixel.x, pixel.y);
      if (equalColors(targetColor, newColor)) {
        continue;
      }
      if (!equalColors(pixelColor, targetColor)) {
        continue;
      }

      updatePixel(img, pixel.x, pixel.y, newColor);

      if (pixel.x > 0) {
        pixels.push({x: pixel.x - 1, y: pixel.y});
      }
      if (pixel.x < maxX) {
        pixels.push({x: pixel.x + 1, y: pixel.y});
      }
      if (pixel.y > 0) {
        pixels.push({x: pixel.x, y: pixel.y - 1});
      }
      if (pixel.y < maxY) {
        pixels.push({x: pixel.x, y: pixel.y + 1});
      }
    }

    this.ctx.putImageData(img, 0, 0);

    return true;
  }
}

export default FillTool;
