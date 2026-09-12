// "键入" 运算符
type APIResponse = {
  user: {
    userId: number
    friendList: {
      count: number
      friends: {
        firstName: string
        lastName: string
      }[]
    }
  }
}

/**
 * 获取 API 响应
 * @returns 返回 APIResponse 类型的 Promise
 */
function getAPIResponse(): Promise<APIResponse> {
  return Promise.resolve({
    user: {
      userId: 123,
      friendList: {
        count: 2,
        friends: [
          {
            firstName: 'Jial',
            lastName: 'Zhang',
          },
          {
            firstName: 'Lily',
            lastName: 'Zhang',
          },
        ],
      },
    },
  })
}

type FriendList = APIResponse['user']['friendList']
type Friend = FriendList['friends'][0]

// keyof 运算符
type ResponseKeys = keyof APIResponse // "user"
type UserKeys = keyof APIResponse['user'] // "friendList" | "userId"
type FriendListKeys = keyof FriendList // "count" | "friends"

// 把键入和keyof运算符结合起来,可以实现对类型安全的读值函数,读取对象中指定键的值。
function get<O extends object, K extends keyof O>(obj: O, key: K): O[K] {
  return obj[key]
}

type ActivityLog = {
  lastEvent: Date
  events: {
    id: string
    timestamp: Date
    type: 'Read' | 'Write'
  }[]
}

let activityLog: ActivityLog = {
  lastEvent: new Date(),
  events: [
    {
      id: '123',
      timestamp: new Date(),
      type: 'Read',
    },
  ],
}

let lastEvent = get(activityLog, 'lastEvent') // Date

// 更进一步、更深层次地 “键入” 对象。重载Get函数，让它最多接受3个键。
type Get = {
  <O extends object, K1 extends keyof O>(obj: O, key: K1): O[K1]
  <O extends object, K1 extends keyof O, K2 extends keyof O[K1]>(
    obj: O,
    key: K1,
    key2: K2
  ): O[K1][K2]
  <
    O extends object,
    K1 extends keyof O,
    K2 extends keyof O[K1],
    K3 extends keyof O[K1][K2],
  >(
    obj: O,
    key: K1,
    key2: K2,
    key3: K3
  ): O[K1][K2][K3]
}

let getPlus: Get = (object: any, ...keys: any[]) => {
  let result = object
  for (let key of keys) {
    result = result[key]
  }
  return result
}

let type = getPlus(activityLog, 'events', 0, 'type') // "Read"
console.log(type);

type UserList = {userId: number}[]
type UserListKeys = keyof UserList[0] // "userId"