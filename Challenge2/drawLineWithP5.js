function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(0);
    
    linea(1,2, 100, 20);
    linea(10, 200, 50, 10);
    linea(300, 300, 10, 10);
    linea(200, 300, 250, 50)
    linea(350, 350, 100, 300)
    
  }
  
  //no funciona con los casos 2, 4 y 5
  function bresenham(x1, y1, x2, y2){
    let m_new = 2 * (y2 - y1);
    let slope_error_new = m_new - (x2 - x1);
    
    let y = y1;
    
    for(let x = x1; x < x2 + 1; x++){
      stroke(255)
      point(x, y);
      
      
      if (slope_error_new >= 0){
        y = y + 1
        slope_error_new = slope_error_new - 2 * (x2 - x1)
      }
      else{
        y = y - 1
        slope_error_new = slope_error_new - 2 * (x2 - x1)
      }
    }
    
    
  }
  
  //funcion obtenida de 
  //https://ghost-together.medium.com/how-to-code-your-first-algorithm-draw-a-line-ca121f9a1395
  let linea = (x1, y1, x2, y2) => {
      // Iterators, counters required by algorithm
      let x, y, dx, dy, dx1, dy1, px, py, xe, ye, i;
      // Calculate line deltas
      dx = x2 - x1;
      dy = y2 - y1;
      // Create a positive copy of deltas (makes iterating easier)
      dx1 = Math.abs(dx);
      dy1 = Math.abs(dy);
    
      // Calculate error intervals for both axis
      px = 2 * dy1 - dx1;
      py = 2 * dx1 - dy1;
      // The line is X-axis dominant
      if (dy1 <= dx1) {
          // Line is drawn left to right
          if (dx >= 0) {
              x = x1; y = y1; xe = x2;
          } else { // Line is drawn right to left (swap ends)
              x = x2; y = y2; xe = x1;
          }
          stroke(255)
          point(x, y); // Draw first pixel
          // Rasterize the line
          for (i = 0; x < xe; i++) {
              x = x + 1;
              // Deal with octants...
              if (px < 0) {
                  px = px + 2 * dy1;
              } else {
                  if ((dx < 0 && dy < 0) || (dx > 0 && dy > 0)) {
                      y = y + 1;
                  } else {
                      y = y - 1;
                  }
                  px = px + 2 * (dy1 - dx1);
              }
              // Draw pixel from line span at
              // currently rasterized position
              stroke(255)
              point(x, y);
          }
      } else { // The line is Y-axis dominant
          // Line is drawn bottom to top
          if (dy >= 0) {
              x = x1; y = y1; ye = y2;
          } else { // Line is drawn top to bottom
              x = x2; y = y2; ye = y1;
          }
          stroke(255)
          point(x, y); // Draw first pixel
          // Rasterize the line
          for (i = 0; y < ye; i++) {
              y = y + 1;
              // Deal with octants...
              if (py <= 0) {
                  py = py + 2 * dx1;
              } else {
                  if ((dx < 0 && dy<0) || (dx > 0 && dy > 0)) {
                      x = x + 1;
                  } else {
                      x = x - 1;
                  }
                  py = py + 2 * (dx1 - dy1);
              }
              // Draw pixel from line span at
              // currently rasterized position
              stroke(255)
              point(x, y);
          }
      }
   }