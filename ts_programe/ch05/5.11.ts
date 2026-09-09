type Shoe = {
  purpose: string;
};

// 芭蕾平底鞋
class BalletFlat implements Shoe {
  purpose: string = 'dancing';
}

// 靴子
class Boot implements Shoe {
  purpose: string = 'wooductting'; // 伐木
}

// 运动鞋
class Sneaker implements Shoe {
  purpose: string = 'walking';
}

let Shoe = {
  create(type: 'balletFlat' | 'boot' | 'sneaker'): Shoe {
    switch (type) {
      case 'balletFlat':
        return new BalletFlat();
      case 'boot':
        return new Boot();
      case 'sneaker':
        return new Sneaker();
    }
  },
};
