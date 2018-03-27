function AncestorPerson() {
  this.age = 0;

  setInterval(function growUp() {
    this.age++; // never works...
  }, 1000);
}

var ancestor = new AncestorPerson();
// solution: var that = this
// that.age++

function ModernPerson() {
  this.age = 0;

  setInterval( () => this.age++, 1000);
}

var modernist = new ModernPerson();
// It works well!