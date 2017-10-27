function car(model, driverOne, driverTwo) {
  this.model = model;
  this.driverOne = driverOne;
  this.driverTwo = driverTwo;
  this.speed = 80;
  this.currentDriver = this.driverOne;
  this.changeDriver = function() {
    if (this.currentDriver == this.driverOne) {
      this.currentDriver = this.driverTwo;
      this.speed += 20;
      console.log('currentDriver: ' + this.currentDriver + '\nspeed: ' + this.speed);
    } else {
      this.currentDriver = this.driverOne;
      this.speed -= 20;
      console.log('currentDriver: ' + this.currentDriver + '\nspeed: ' + this.speed);
    }
  }
};

var toyota = new car('toyota', 'sasha', 'oleg');
toyota.changeDriver();
toyota.changeDriver();
toyota.changeDriver();
toyota.changeDriver();


window.addEventListener("click", function (e) {
  console.log(e.target.offsetTop + ":" + e.target.offsetLeft)
});
