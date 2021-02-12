// This service function will create an array of 32768 RGB color objects
// Each color object has the format of { r : 8 , g : 256 , b : 8}

export const createColors = () => {
  //colors will hold all the colors
  let colors = [];
  //colorNumber will be the key for object creation purpose only
  let colorNumber = 0;

  //Iterating for Red factor
  for (let r = 8; r <= 256; r += 8) {
    //Iterating for Green factor
    for (let g = 8; g <= 256; g += 8) {
      //Iterating for Blue factor
      for (let b = 8; b <= 256; b += 8) {
        //Putting new color into the colors
        colors[colorNumber] = { r, b, g };
        colorNumber++;
      }
    }
  }

  return colors;
};
