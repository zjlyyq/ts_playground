type APIResponse = {
    user: {
        userId: number;
        friendList: {
            count: number;
            friends: {
                firstName: string;
                lastName: string;
            }[];
        };
    };
};
/**
 * 获取 API 响应
 * @returns 返回 APIResponse 类型的 Promise
 */
declare function getAPIResponse(): Promise<APIResponse>;
type FriendList = APIResponse['user']['friendList'];
type Friend = FriendList['friends'][0];
type ResponseKeys = keyof APIResponse;
type UserKeys = keyof APIResponse['user'];
type FriendListKeys = keyof FriendList;
declare function get<O extends object, K extends keyof O>(obj: O, key: K): O[K];
type ActivityLog = {
    lastEvent: Date;
    events: {
        id: string;
        timestamp: Date;
        type: 'Read' | 'Write';
    }[];
};
declare let activityLog: ActivityLog;
declare let lastEvent: Date;
type Get = {
    <O extends object, K1 extends keyof O>(obj: O, key: K1): O[K1];
    <O extends object, K1 extends keyof O, K2 extends keyof O[K1]>(obj: O, key: K1, key2: K2): O[K1][K2];
    <O extends object, K1 extends keyof O, K2 extends keyof O[K1], K3 extends keyof O[K1][K2]>(obj: O, key: K1, key2: K2, key3: K3): O[K1][K2][K3];
};
declare let getPlus: Get;
declare let type: "Read" | "Write";
type UserList = {
    userId: number;
}[];
type UserListKeys = keyof UserList[0];
