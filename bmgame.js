let app = {};

(function (context) {

  let levels = [];
  levels[0] = {
    map: [
      [1, 1, 0, 0, 1],
      [1, 0, 0, 0, 0],
      [0, 0, 1, 1, 0],
      [0, 0, 0, 1, 0],
      [0, 1, 0, 1, 0]
    ],

    player: {
      x: 0,
      y: 4
    },
    goal: {
      x: 4,
      y: 1
    },
    theme: 'lavender',
  };

  levels[1] = {
    map: [
      [1, 0, 1, 1, 1],
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 0, 1, 0],
      [0, 1, 0, 1, 0]
    ],
    theme: 'green',
    player: {
      x: 2,
      y: 4
    },
    goal: {
      x: 4,
      y: 4
    }
  };

  levels[2] = {
    map: [
      [0, 1, 1, 0, 1],
      [0, 0, 0, 0, 1],
      [0, 1, 1, 1, 1],
      [0, 0, 0, 0, 0],
      [1, 0, 1, 1, 0]
    ],
    theme: 'pink',
    player: {
      x: 3,
      y: 0
    },
    goal: {
      x: 4,
      y: 4
    }
  };

  levels[3] = {
    map: [
      [0, 1, 1, 0, 1],
      [0, 0, 1, 0, 1],
      [1, 0, 0, 0, 0],
      [1, 1, 1, 1, 0],
      [1, 0, 1, 0, 0]
    ],
    theme: 'mint',
    player: {
      x: 0,
      y: 0
    },
    goal: {
      x: 3,
      y: 4
    }
  };

  levels[4] = {
    map: [
      [1, 0, 0, 0, 0],
      [0, 0, 1, 1, 0],
      [1, 0, 1, 1, 0],
      [0, 0, 1, 0, 0],
      [1, 1, 1, 0, 1],
    ],
    theme: 'yellow',
    player: {
      x: 0,
      y: 3
    },
    goal: {
      x: 3,
      y: 4
    }
  };

  function Game(id, level) {

    this.el = document.getElementById(id);

    this.level_idx = 0;
    this.tileTypes = ['floor', 'wall'];
    this.tileDim = 6.25;

    this.map = level.map;

    this.theme = level.theme;

    this.player = { ...level.player };

    this.player.el = null;

    this.goal = { ...level.goal };
  }

  Game.prototype.createEl = function (x, y, type) {

    let el = document.createElement('div');
    el.className = type;

    el.style.width = el.style.height = this.tileDim + 'rem';

    el.style.left = x * this.tileDim + 'rem';

    el.style.top = y * this.tileDim + 'rem';

    return el;
  }

  Game.prototype.populateMap = function () {

    this.el.className = 'game-container ' + this.theme;

    let tiles = this.el.querySelector('#tiles');

    for (var y = 0; y < this.map.length; ++y) {
      for (var x = 0; x < this.map[y].length; ++x) {

        let tileCode = this.map[y][x];

        let tileType = this.tileTypes[tileCode];

        let tile = this.createEl(x, y, tileType);

        tiles.appendChild(tile);
      }
    }
  }

  Game.prototype.placeSprite = function (type) {

    let x = this[type].x

    let y = this[type].y;

    let sprite = this.createEl(x, y, type);

    sprite.id = type;

    sprite.style.borderRadius = this.tileDim + 'rem';

    let layer = this.el.querySelector('#sprites');

    layer.appendChild(sprite);

    return sprite;
  }

  Game.prototype.collide = function () {
    this.player.el.className += ' collide';

    let obj = this;

    window.setTimeout(function () {
      obj.player.el.className = 'player';
    }, 200);

    return 0;

  };

  Game.prototype.moveLeft = function () {

    if (this.player.x == 0) {
      this.collide();
      return;
    }

    let nextTile = this.map[this.player.y][this.player.x - 1];

    if (nextTile == 1) {
      this.collide();
      return;
    }

    this.player.x -= 1;
    this.updateHoriz();
  };

  Game.prototype.moveUp = function () {
    if (this.player.y == 0) {
      this.collide();
      return;
    }

    let nextTile = this.map[this.player.y - 1][this.player.x];
    if (nextTile == 1) {
      this.collide();
      return;
    }
    this.player.y -= 1;
    this.updateVert();

  };

  Game.prototype.moveRight = function () {
    if (this.player.x == this.map[this.player.y].length - 1) {
      this.collide();
      return;
    }
    nextTile = this.map[this.player.y][this.player.x + 1];

    if (nextTile == 1) {
      this.collide()
      return;
    }
    this.player.x += 1;

    this.updateHoriz();
  };

  Game.prototype.moveDown = function () {
    if (this.player.y == this.map.length - 1) {
      this.collide();
      return;
    }

    let nextTile = this.map[this.player.y + 1][this.player.x];
    if (nextTile == 1) {
      this.collide()
      return;
    }
    this.player.y += 1;
    this.updateVert();

  };

  Game.prototype.updateVert = function () {
    this.player.el.style.top = this.player.y * this.tileDim + 'rem';
  };

  Game.prototype.updateHoriz = function () {
    this.player.el.style.left = this.player.x * this.tileDim + 'rem';
  };

  Game.prototype.movePlayer = function (event) {
    event.preventDefault();

    if (event.keyCode < 37 || event.keyCode > 40) {
      return;
    }

    switch (event.keyCode) {
      case 37:
        this.moveLeft();
        break;

      case 38:
        this.moveUp();
        break;

      case 39:
        this.moveRight();
        break;

      case 40:
        this.moveDown();
        break;
    }
  }

  Game.prototype.checkGoal = function () {
    let body = document.querySelector('body');

    if (this.player.y == this.goal.y &&
      this.player.x == this.goal.x) {

      body.className = 'success';
    }
    else {
      body.className = '';
    }
  }

  Game.prototype.changeLevel = function () {

    this.level_idx++;

    if (this.level_idx > levels.length - 1) {
      this.level_idx = 0;
    }

    let level = levels[this.level_idx];

    this.map = level.map;

    this.theme = level.theme;

    this.player = { ...level.player };

    this.goal = { ...level.goal };
  }


  Game.prototype.addMazeListener = function () {

    let map = this.el.querySelector('.game-map');

    let obj = this;

    map.addEventListener('mousedown', function (e) {

      if (obj.player.y != obj.goal.y ||
        obj.player.x != obj.goal.x) {
        return;
      }
      obj.changeLevel();

      let layers = obj.el.querySelectorAll('.layer');

      for (layer of layers) {
        layer.innerHTML = '';
      }

      obj.placeLevel();

      obj.checkGoal();

    });
  };

  Game.prototype.keyboardListener = function () {
    document.addEventListener('keydown', event => {
      this.movePlayer(event);
      this.checkGoal();
    });

  }

  Game.prototype.setMessage = function (msg) {
    let text_el = this.el.querySelector('.text');
    text_el.textContent = msg;
  };

  Game.prototype.sizeUp = function () {

    let map = this.el.querySelector('.game-map');

    map.style.height = this.map.length * this.tileDim + 'rem';

    map.style.width = this.map[0].length * this.tileDim + 'rem';

  };

  Game.prototype.placeLevel = function () {
    this.populateMap();

    this.sizeUp();

    this.placeSprite('goal');

    let playerSprite = this.placeSprite('player');

    this.player.el = playerSprite;

  }

  Game.prototype.addListeners = function () {

    this.keyboardListener();

    this.addMazeListener();
  }

  context.init = function () {

    let myGame = new Game('game-container-1', levels[0]);

    myGame.placeLevel();

    myGame.addListeners();
  }
})(app);

app.init();
