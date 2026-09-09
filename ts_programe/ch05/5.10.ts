class MessageQueue {
  private constructor(private messages: string[]) {}

  static create(messages: string[]) {
    return new MessageQueue(messages);
  }
}

class BadMessageQueue extends MessageQueue {}  // 无法扩展类“MessageQueue”。类构造函数标记为私有。
new MessageQueue([]); // 类“MessageQueue”的构造函数是私有的，仅可在类声明中访问。

MessageQueue.create([]);