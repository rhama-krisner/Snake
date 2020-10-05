window.onload = function () {
  //O script recarrega primeiro
  document.getElementById("canvas");
  context = canvas.getContext("2d"); //Cria a engine 2d

  document.addEventListener('keydown', function (e) {
    console.log(e.keyCode); // keycode foi depreciado, ainda não sei como usar a nova técnologia
    if (e.keyCode == 37 | e.keyCode == 65) { // Arrow Left or A
      velocidadex = -1
      velocidadey = 0
    }

    if (e.keyCode == 38 | e.keyCode == 87) { // Arrow Up or W 
      velocidadex = 0
      velocidadey = -1
    }

    if (e.keyCode == 39 | e.keyCode == 68) { // Arrow Right or D
      velocidadex = 1
      velocidadey = 0
    }

    if (e.keyCode == 40 | e.keyCode == 83) { // Arrow Down or S
      velocidadex = 0
      velocidadey = 1;
    }
  })
  setInterval(jogo, 1000 / 10 /*Rodar a 15fps kkkk*/)//função jogo sera carregada assim que a página carregar
}

snake = [];
posx = 10;
posy = 10;
grid = 20
velocidadex = 0
velocidadey = 0

function jogo() {
  context.fillStyle = "#ABCC9A";
  context.fillRect(0, 0, canvas.height, canvas.width); //Local onde inicia o primeiro bloco e estabelece o tamanho do canvas
  context.fillStyle = "black"; //cada parte do array snake, sera contruido

  posx += velocidadex
  posy += velocidadey

  snake.push({
    x: posx,
    y: posy
  })

  for (var i = 2; i < snake.length; i++) {
    context.fillRect(snake[i].x * grid + i, snake[i].y * grid, grid, grid) //recebendo ao posição definida em posx e posy | fill rect constrói o elemento chamado dentro do canvas com os tamanhos definidos.




  }


}
