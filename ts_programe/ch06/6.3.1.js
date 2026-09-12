"use strict";
/**
 * 获取 API 响应
 * @returns 返回 APIResponse 类型的 Promise
 */
function getAPIResponse() {
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
    });
}
// 把键入和keyof运算符结合起来,可以实现对类型安全的读值函数,读取对象中指定键的值。
function get(obj, key) {
    return obj[key];
}
let activityLog = {
    lastEvent: new Date(),
    events: [
        {
            id: '123',
            timestamp: new Date(),
            type: 'Read',
        },
    ],
};
let lastEvent = get(activityLog, 'lastEvent'); // Date
let getPlus = (object, ...keys) => {
    let result = object;
    for (let key of keys) {
        result = result[key];
    }
    return result;
};
let type = getPlus(activityLog, 'events', 0, 'type'); // "Read"
console.log(type);
