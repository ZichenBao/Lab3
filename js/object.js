
function Hamburger(options) {
    this.bunType = options.bunType || 'white';
    this.vegetableGarnishes = options.vegetableGarnishes || [];
    this.cheeses = options.cheeses || [];
    this.specialtySauces = options.specialtySauces || [];
    this.meatPatty = options.meatPatty || 'beef';
    this.pattyCount = options.pattyCount || 1;
    this.extras = options.extras || [];
  }
  
  Hamburger.prototype.describe = function () {
    let description = `A ${this.pattyCount}x ${this.meatPatty} patty hamburger with a ${this.bunType} bun`;
  
    if (this.vegetableGarnishes.length) {
      description += `, topped with ${this.vegetableGarnishes.join(', ')}`;
    }
    if (this.cheeses.length) {
      description += `, cheese: ${this.cheeses.join(', ')}`;
    }
    if (this.specialtySauces.length) {
      description += `, sauced with ${this.specialtySauces.join(', ')}`;
    }
    if (this.extras.length) {
      description += `, and extra ${this.extras.join(', ')}`;
    }
  
    return description + '.';
  };
  
  
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Hamburger;
  }
  