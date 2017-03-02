// Enemies our player must avoid
var Enemy = function(y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = 1;
    this.y = y*83-190;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var player = function() {
    this.sprite = 'images/char-boy.png';
    this.x = 3*67;
    this.y = 6*65;
};

player.prototype.handleInput = function(key){
    switch(key){
        case 'left':
            if(this.x>1)
                this.x -= 100;
            break;
        case 'up':
            if(this.y>1){
                if(this.y<120){
                    player.reset();
                    break;
                }
                this.y -= 85;
            }
            break;
        case 'right':
            if(this.x<5*67)
                this.x += 100;
            break;
        case 'down':
            if(this.y<6*65)
                this.y += 85;
            break;
        default:
            break;
    };
    player.update();
};
player.prototype.reset = function(){
    this.x = 1*5*40;
    this.y = 1*6*65;
}
player.prototype.update = function(){
    player.render();
};
player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [new Enemy(3),new Enemy(4),new Enemy(5)];
var player = new player;

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
