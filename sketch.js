let animals = [];

function setup() {
  createCanvas(800, 500);
  
  // Criar animais com posições e velocidades aleatórias
  for (let i = 0; i < 5; i++) {
    animals.push({
      x: random(width),
      y: random(height - 100),
      speedX: random(-2, 2),
      speedY: random(-1, 1),
    });
  }
}

function draw() {
  background(135, 206, 235); // Céu azul
  drawGround();
  drawHouses();
  drawTrees();
  drawAnimals();
}

function drawGround() {
  fill(34, 139, 34); // Verde grama
  rect(0, height - 100, width, 100);
}

function drawHouses() {
  for (let i = 100; i < width; i += 300) {
    // Casa
    fill(200, 100, 100);
    rect(i, height - 160, 100, 60);
    // Telhado
    fill(150, 50, 50);
    triangle(i, height - 160, i + 50, height - 200, i + 100, height - 160);
  }
}

function drawTrees() {
  for (let i = 250; i < width; i += 300) {
    // Tronco
    fill(139, 69, 19);
    rect(i, height - 140, 20, 40);
    // Folhas
    fill(0, 100, 0);
    ellipse(i + 10, height - 150, 60, 60);
  }
}

function drawAnimals() {
  for (let animal of animals) {
    // Movimento
    animal.x += animal.speedX;
    animal.y += animal.speedY;

    // Rebote nas bordas
    if (animal.x < 0 || animal.x > width) animal.speedX *= -1;
    if (animal.y < 0 || animal.y > height - 100) animal.speedY *= -1;

    // Corpo
    fill(255, 200, 200);
    ellipse(animal.x, animal.y, 30, 30);

    // Olhos
    fill(0);
    ellipse(animal.x - 5, animal.y - 5, 5, 5);
    ellipse(animal.x + 5, animal.y - 5, 5, 5);

    // Boca
    noFill();
    stroke(0);
    arc(animal.x, animal.y + 3, 10, 5, 0, PI);
    noStroke();
  }
}