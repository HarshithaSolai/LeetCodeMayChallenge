/* Question 10: Flood Fill (May 10 2020)

An image is represented by a 2-D array of integers, each integer representing the pixel value of the image (from 0 to 65535).

Given a coordinate (sr, sc) representing the starting pixel (row and column) of the flood fill, and a pixel value newColor, "flood fill" the image.

To perform a "flood fill", consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color as the starting pixel), and so on. Replace the color of all of the aforementioned pixels with the newColor.

At the end, return the modified image.

Input: 
image = [[1,1,1],[1,1,0],[1,0,1]]
sr = 1, sc = 1, newColor = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation: 
From the center of the image (with position (sr, sc) = (1, 1)), all pixels connected 
by a path of the same color as the starting pixel are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected
to the starting pixel.

*/

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  var oldColor = image[sr][sc];

  if (oldColor == newColor) return image
  image[sr][sc] = newColor;

  const fillColor = function (row, col) {
    image[row][col] = newColor;

    (image[row - 1] != undefined && image[row - 1][col] == oldColor) && fillColor(row - 1, col);
    (image[row + 1] != undefined && image[row + 1][col] == oldColor) && fillColor(row + 1, col);
    (image[row][col - 1] == oldColor) && fillColor(row, col - 1);
    (image[row][col + 1] == oldColor) && fillColor(row, col + 1);
  };

  (image[sr - 1] != undefined && image[sr - 1][sc] == oldColor) && fillColor(sr - 1, sc);
  (image[sr + 1] !== undefined && image[sr + 1][sc] == oldColor) && fillColor(sr + 1, sc);
  (image[sr][sc - 1] == oldColor) && fillColor(sr, sc - 1);
  (image[sr][sc + 1] == oldColor) && fillColor(sr, sc + 1);

  return image;

};