function AncestorPerson() {
  var age = 0;

  setInterval(function growUp() {
    this.age++;
  }, 1000);
}

var ancestor = new AncestorPerson();
