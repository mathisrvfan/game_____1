function n(num) {
  return new OmegaNum(num)
}
game = {
  points: n(1)
}
let dt = 0.033
setInterval(function(){
  game.points = game.points.add(1*dt)
},dt*1000)
