
function AsyncStudent(name) {
  this.name = name;
}

AsyncStudent.prototype.calculate = function(expression, callback) {
  var self = this;
  setTimeout(function() {
    if (callback == undefined ) {
      console.log(self.name + ": I've got the answer! But I don't know what to do with it :-(");
    }
    else {
      console.log(self.name + ": I've got the answer! Passing it to the callback...");
      callback(expression);
    }
  }, 6000);
}
