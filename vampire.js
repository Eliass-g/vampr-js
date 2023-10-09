class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let vampire = this;
    let result = 0;
    while (vampire.creator) {
      vampire = vampire.creator;
      result++;
    }
    return result;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    const val1 = this.numberOfVampiresFromOriginal;
    const val2 = vampire.numberOfVampiresFromOriginal;
    if (val1 < val2) {
      return true;
    }
    return false;
  }

  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    let result = {};
    if (this.name === name) {
      result = this;
    }
    for (let value of this.offspring) {
      
    }
    return result;
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    let result = 1;
    for (const vampire of this.offspring) {
      const num = vampire.offspring;
      result += num;
    }
    return result;
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    let result = [];
    if (this.yearConverted === 1980) {
      result.push(this);
    }
    for (const vampire of this.offspring) {
      const vampsOverAge = vampire.allMillennialVampires;
      result.concat(vampsOverAge);
    }
    return result;
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
    let val1 = this;
    let val2 = vampire;
    while (val1.isMoreSeniorThan(val2)) {
      val2 = val2.creator;
    }
    while (val2.isMoreSeniorThan(val1)) {
      val1 = val1.creator;
    }
    while (val1 !== val2) {
      val1 = val1.creator;
      val2 = val2.creator;
    }
    return val1;
  } 
}

module.exports = Vampire;

