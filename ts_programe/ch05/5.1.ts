// 国际象棋

type Color = 'White' | 'Black';
type File = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

class Position {
  // 构造方法中的private访问修饰符自动把参数复制给this。
  constructor(
    private file: File,
    private rank: Rank
  ) {}

  // 计算到指定位置的距离
  // @param position 目标位置
  // @returns 包含行和列距离的对象
  distanceFrom(position: Position) {
    return {
      rank: Math.abs(this.rank - position.rank),
      file: Math.abs(this.file.charCodeAt(0) - position.file.charCodeAt(0)),
    };
  }
}

abstract class Piece {
  protected position: Position;
  constructor(
    private readonly color: Color,
    file: File,
    rank: Rank
  ) {
    this.position = new Position(file, rank);
  }
  // 移动到指定位置,子类可以覆盖也可以使用父类的方法
  moveTo(position: Position) {
    this.position = position;
  }

  // 子类必须实现
  abstract canMoveTo(position: Position): boolean;
}

// new Piece('White', 'A', '1'); // 无法创建抽象类的实例。

class King extends Piece {
  constructor(color: Color, file: File, rank: Rank) {
    super(color, file, rank);
  }

  canMoveTo(position: Position): boolean {
    // 王移动规则：最多移动2步
    const distance = this.position.distanceFrom(position);
    return distance.rank <= 2 && distance.file <= 2;
  }
}

class Queen extends Piece {
  constructor(color: Color, file: File, rank: Rank) {
    super(color, file, rank);
  }

  canMoveTo(position: Position): boolean {
    // 后移动规则：最多移动2步，且行和列距离相等
    const distance = this.position.distanceFrom(position);
    return distance.rank <= 2 && distance.file <= 2;
  }
}

class Bishop extends Piece {
  constructor(color: Color, file: File, rank: Rank) {
    super(color, file, rank);
  }

  canMoveTo(position: Position): boolean {
    // 象移动规则：最多移动2步，且行和列距离相等
    const distance = this.position.distanceFrom(position);
    return distance.rank === distance.file;
  }
}

class Game {
  private pieces: Piece[] = [];

  private static makePieces() {
    return [
      // 王
      new King('White', 'E', 1),
      new King('Black', 'E', 8),
      // 后
      new Queen('White', 'D', 1),
      new Queen('Black', 'D', 8),
      // 象
      new Bishop('White', 'C', 1),
      new Bishop('White', 'F', 1),
      new Bishop('Black', 'C', 8),
      new Bishop('Black', 'F', 8),
    ];
  }
}
