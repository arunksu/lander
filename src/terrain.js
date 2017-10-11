export default class Terrain {
  constructor(width, height) {
    var x = 0;
    var y = Math.random()*height/2 + height/2 - 10;
    var dist = Math.random() * 10;
    this.path = [];

    function clampHeight(y) {
      do {
        var newHeight = y;
        var probability = Math.random();
        if (probability < 0.45){
          newHeight += Math.random() * 50;
        }
        else if (probability < 0.5) {
          newHeight -= Math.random() * 50;
        }
        this.path.push({x:x+dist, y:newHeight});
        x += dist;
        dist = Math.random() * 10;
      } while (newHeight < height/2)
    }

    while (x + dist < width) {
      var height = y;
      var probability = Math.random();
      if (probability < 0.45){
        height += Math.random() * 50;
      }
      else if (probability < 0.5) {
        height -= Math.random() * 50;
      }
      this.path.push({x:x+dist, y:height});
      x += dist;
      dist = Math.random() * 10;
    }
  }

  render(ctx)
  {
    ctx.save();
    ctx.strokeStyle = 'white';
    ctx.beginPath();
    ctx.moveTo(this.path[0].x, this.path[0].y);
    for (var i = 1; i < this.path.length; i++){
      ctx.lineTo(this.path[i].x, this.path[i].y);
    }
    ctx.stroke();
    ctx.restore();
  }
}
