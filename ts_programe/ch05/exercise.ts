import { BalletFlat, Boot, Sneaker, Shoe } from './5.11.1';
import { RequestBuilder } from './5.11.2';

/**
 * 把类的构造方法标记为private后，不能实例化或扩展类。
 * 那么把构造方法标记为protected的呢？请在代码编辑器中试一试，看能不能找出答案。
 */
class Exercise {
  protected constructor() {}
}

// new Exercise();  // 类“Exercise”的构造函数是受保护的，仅可在类声明中访问。

class SubExercise extends Exercise {
  constructor() {
    super();
  }
}

/**
 * 在5.11节实现的基础上，牺牲一点抽象性，设法提升安全性。
 * 更新实现，让使用方在编译时知道，
 * 调用Shoe.create('boot') 返回一个 Boot 实例，
 * 调用Shoe.create('balletFlat')返回一个 BalletFlat 实例，而不是都返回一个Shoe实例。
 * 提示：回想一下4.1.9节的内容。
 */

// 通过函数重载实现。
type CreateShoe = {
  (type: 'balletFlat'): BalletFlat;
  (type: 'boot'): Boot;
  (type: 'sneaker'): Sneaker;
  (type: 'balletFlat' | 'boot' | 'sneaker'): Shoe;
};

type ShowFactory = {
  create: CreateShoe;
};

let ShoeSafe: ShowFactory = {
  create: (type: 'balletFlat' | 'boot' | 'sneaker') => {
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
let boot = ShoeSafe.create('boot');
console.log(boot);

/**
 * 有难度）思考如何设计对类型安全的建造者模式。在5.11.2节实现的基础上进行扩展，做到以下两点：
 * a. 在编译时确保不能在设置 URL 和请求方法之前调用.send。如果要求用户以特定顺序调用各方法，是不是更容易满足（提示：不返回this，应该返回什么）？
 * b.（更有难度）在保证前一点的基础上，如果想让用户以任意顺序调用其他方法，应该如何修改设计呢（提示：使用哪个 TypeScript特性可以在调用方法之后把方法的返回类型 “添加”到this 类型上）？
 */
// a 实现
interface UrlStage {
  setUrl(url: string): MethodStage;
}

interface MethodStage {
  setMethod(method: 'get' | 'post' | 'put' | 'delete'): DataStage;
}

interface DataStage {
  setData(data: object): SendStage;
}

interface SendStage {
  send(): void;
}

class RequestSafeBuilder implements UrlStage, MethodStage, DataStage, SendStage {
  private url: string | null = null;
  private method: 'get' | 'post' | 'put' | 'delete' | null = null;
  private data: object | null = null;

  setUrl(url: string): MethodStage {
    this.url = url;
    return this;
  }

  setMethod(method: 'get' | 'post' | 'put' | 'delete'): DataStage {
    this.method = method;
    return this;
  }

  setData(data: object): SendStage {
    this.data = data;
    return this;
  }

  send(): void {
    console.log('send request');
  }
}

let safeRequest = new RequestSafeBuilder();
safeRequest.setMethod('delete');
