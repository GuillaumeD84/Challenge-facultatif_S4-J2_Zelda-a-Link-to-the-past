var tile = {
  /*
   * 1. Dans js/tile.js, on va créer un objet tile responsable de la création des tuiles. On peut créer une méthode create chargé de créer une tuile.
   */
  create: function(posX, posY) {
    var tileDiv = document.createElement('div');
    tileDiv.className = 'tile';
    tileDiv.dataset.tiletype = map.tiles[posX][posY];
    tileDiv.style.top = (posX * 16) + 'px';
    tileDiv.style.left = (posY * 16) + 'px';

    console.log(typeof(tileDiv));

    return tileDiv;
  },


  /*
   * 2. Pour créer une tuile, il faut lui donner les bonnes classes, comme décrit plus haut. Pour cela, on peut créer une méthode getClassname.
   */
  getClasses: function(posX, posY) {
    var tileClass = '';
    console.log('X : ' + posX + ', Y : ' + posY);
    posX = parseInt(posX);
    posY = parseInt(posY);

    tileClass += ' ' + map.types[map.tiles[posX][posY]];

    if (posX > 0) {
      if (map.tiles[posX-1][posY] === map.tiles[posX][posY]) {
        tileClass += ' ' + 'top-' + map.types[map.tiles[posX][posY]];
      }
    }
    else tileClass += ' ' + 'no-top';

    if (posY > 0) {
      if (map.tiles[posX][posY-1] === map.tiles[posX][posY]) {
        tileClass += ' ' + 'left-' + map.types[map.tiles[posX][posY]];
      }
    }
    else tileClass += ' ' + 'no-left';

    if (posX < map.tiles.length-1) {
      if (map.tiles[posX+1][posY] === map.tiles[posX][posY]) {
        tileClass += ' ' + 'bottom-' + map.types[map.tiles[posX][posY]];
      }
    }
    else tileClass += ' ' + 'no-bottom';

    if (posY < map.tiles[0].length-1) {
      if (map.tiles[posX][posY+1] === map.tiles[posX][posY]) {
        tileClass += ' ' + 'right-' + map.types[map.tiles[posX][posY]];
      }
    }
    else tileClass += ' ' + 'no-right';

    return tileClass;
  },


  /*
   * 3. Pour venir positionner les tuiles, on utilise des position: absolute. Il faut donc ajouter du style (top et left) pour venir placer la tuile au bon endroit, avec une méthode getStyle.
   */
  getStyle: function(posX, posY) {

  },


  /*
   * 4. Pour chaque tuile, on peut aussi utiliser une méthode getType qui sera chargé de récupérer le type de tuile, en utilisant l'objet map.
   */
  getType: function(posX, posY) {

  },
};
