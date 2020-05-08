/*
You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point.
Check if these points make a straight line in the XY plane.

Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
Output: true

Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
Output: false

Constraints:

1) 2 <= coordinates.length <= 1000
2) coordinates[i].length == 2
3) -10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
4) coordinates contains no duplicate point.
*/

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
 var checkStraightLine = function(coordinates) {
  var pointsCount = coordinates.length;
  
  if(pointsCount === 2 ) {
      return true;
  } else {
    var point1      = coordinates[1],
        point2      = coordinates[0],
        commonSlope = slope(point1, point2);

    for (var i = 1; i < pointsCount; i++) {
      var p1 = coordinates[i],
          p2 = coordinates[0];           
      if(commonSlope !== slope(p1, p2))  return false;
    }
    
    return true; 
  }
};

var slope = function(p1, p2) {
      if ((p1[0] - p2[0]) === 0) return 0;
      return (p2[1] - p1[1]) / (p2[0] - p1[0]);
};