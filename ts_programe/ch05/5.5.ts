// 斑马
class Zebra {
  // 馬小跑
  trot() {
    console.log('Zebra is trotting');
  }
}

// 贵宾犬
class Poodle {
  // 馬小跑
  trot() {
    console.log('Poodle is trotting');
  }
}

function ambleAround(animal: Zebra) {
  animal.trot();
}

let zebra = new Zebra();
let poodle = new Poodle();
ambleAround(zebra);
ambleAround(poodle);
