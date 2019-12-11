class animal {
  species: any;
  constructor(species) { // 构造函数没了，变成了constructor构造方法
      this.species = species;
  }
}
new animal('dog');