export class Base {
  bind(self, ...methods) {
    methods.forEach(method => self[method] = self[method].bind(self));
  }
}

export function pixelAt(img, x, y) {
  let i = (y * img.width + x) * 4;

  return [img.data[i], img.data[i+1], img.data[i+2], img.data[i+3]];
}

export function splitColor(color) {
  let r = parseInt(color.slice(1, 3), 16);
  let g = parseInt(color.slice(3, 5), 16);
  let b = parseInt(color.slice(5, 7), 16);
  let a = parseInt(color.slice(7, 9), 16) || 255;

  return [r, g, b, a];
}

export function equalColors(colorA, colorB) {
  if (colorA.length !== colorB.length) {
    return false;
  }

  for (let i = 0; i < colorA.length; i++) {
    if (colorA[i] !== colorB[i]) {
      return false;
    }
  }

  return true;
}

export function updatePixel(img, x, y, newColor) {
  let i = (y * img.width + x) * 4;

  img.data[i] = newColor[0];
  img.data[i+1] = newColor[1];
  img.data[i+2] = newColor[2];
  img.data[i+3] = newColor[3];
}
