const colors = [];

for (let r = 1; r < 32; r++) {
  for (let g = 0; g < 32; g++) {
    for (let b = 0; b < 32; b++) {
      colors = colors.push({ r, g, b });
    }
  }
}
