var app = {
  /*
   * 1. Dans js/app.js, on va créer un objet app responsable de l'ajout des objets dans le DOM. On va créer un conteneur #map.
   * 2. L'élément #map doit aussi recevoir en style des dimensions, en fonction de la longueur de l'objet map (de js/map.js). Chaque tuile est un carré 16 pixels.
   */
  init: function() {
    app.createTiles();
  },


  /*
   * 3. Dans #map, on va venir ajouter en enfant toutes les tuiles .tile.
   */
  createTiles: function() {
    var fullMap = document.getElementById('container');
    var myTile;

    for (lines in map.tiles) {
      for (columns in map.tiles[lines]) {
        // console.log('Ligne : ' + lines + ', Colonne : ' + columns + ', Type : ' + actualTile);
        myTile = tile.create(lines, columns);
        myTile.className += tile.getClasses(lines, columns);

        fullMap.appendChild(myTile);
      }
    }
  }
}


/*
 * Chargement du DOM
 */
document.addEventListener('DOMContentLoaded', app.init);
