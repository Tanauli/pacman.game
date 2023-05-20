document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("gameCanvas");
  const context = canvas.getContext("2d");
  
  const gridSize = 20;
  const width = canvas.width / gridSize;
  const height = canvas.height / gridSize;
  
  let pacmanX = Math.floor(width / 2);
  let pacmanY = Math.floor(height / 2);
  
  function drawPacman() {
    context.fillStyle = "yellow";
    context.beginPath();
    context.arc(
      (pacmanX + 0.5) * gridSize,
      (pacmanY + 0.5) * gridSize,
      gridSize / 2,
      0.2 * Math.PI,
      1.8 * Math.PI
    );
    context.lineTo((pacmanX + 0.5) * gridSize, (pacmanY + 0.5) * gridSize);
    context.closePath();
    context.fill();
  }
  
  function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }
  
  function handleKeyPress(event) {
    clearCanvas();
    
    switch (event.key) {
      case "ArrowUp":
        if (pacmanY > 0) {
          pacmanY--;
        }
        break;
      case "ArrowDown":
        if (pacmanY < height - 1) {
          pacmanY++;
        }
        break;
      case "ArrowLeft":
        if (pacmanX > 0) {
          pacmanX--;
        }
        break;
      case "ArrowRight":
        if (pacmanX < width - 1) {
          pacmanX++;
        }
        break;
    }
    
    drawPacman();
  }
  
  document.addEventListener("keydown", handleKeyPress);
  
  drawPacman();
});
