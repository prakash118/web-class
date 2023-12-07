interface Cake {
  bake(): string;
}

@freeze
class Cake implements Cake {
  name: string;

  @verifyType()
  type = 'sponge';
  size: number;

  constructor(name: string) {
    this.name = name;
  }

  @verifyBake()
  bake() {
    return 'cake';
  }
}

function freeze(constructor: Function) {
  Object.freeze(constructor);
  Object.freeze(constructor.prototype);
}

function verifyType() {
  return function (target: Object, key: string | symbol) {
    let value = target[key];

    const getter = () => {
      return value;
    };

    const setter = (next) => {
      console.log('updating type..');
      console.log(next)

      value = next;
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
}

function verifyBake() {
  return function(target: Object, key: string | symbol, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    console.log(target, key, descriptor)
    
    // descriptor.value = function() {

    // }

    return descriptor;
  }
}

// class Chocolate extends Cake {
//   bake() {
//     return `chocolate ${super.bake()}`;
//   }
// }

// const lala = new Chocolate('lala');
// console.log(lala)

const chococake = new Cake('choco');
chococake.type = 'chocolate';

// console.log(chococake);
// const coffeecake = new Cake('coffee');

const bakeBtn = document.querySelector('#bake-cake');
bakeBtn.addEventListener('click', ()=>{
  chococake.bake();
}) 

