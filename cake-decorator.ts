interface Cake {
  bake(): string;
}

class Cake implements Cake {
  bake() {
    return 'cake';
  }
}

class DecorateCake implements Cake {
  protected cake: Cake;

  constructor(cake: Cake) {
    this.cake = cake;
  }

  bake() {
    return this.cake.bake();
  }
}

class Chocolate extends DecorateCake {
  bake() {
    return `chocolate ${super.bake()}`;
  }
}

class Coffee extends DecorateCake {
  bake() {
    return `coffee ${super.bake()}`;
  }
}

class Vanilla extends DecorateCake {
  bake() {
    return `vanilla ${super.bake()}`;
  }
}

class Cherry extends DecorateCake {
  bake() {
    return `${super.bake()} with cherry`;
  }
}

const finishCake = (cake: Cake) => {
  console.log(`Result: ${cake.bake()}`);
}

const baseCake = new Cake();
const chocolateCake = new Chocolate(baseCake);
finishCake(chocolateCake);

const blackForestCake = new Cherry(chocolateCake);
finishCake(blackForestCake)