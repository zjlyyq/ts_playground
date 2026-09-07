# Ch03 笔记

## 索引签名（Index Signatures）

语法：`[key: T]: U`

- 允许 TypeScript 知道对象可能有额外的键
- 键的类型 `T` 映射到值的类型 `U`
- **规则**：键类型 `T` 必须可以赋值给 `number` 或 `string`

### 示例

```typescript
let airplaneSeatingAssignments: {
  [seatNumber: string]: string
} = {
  '34D': 'Boris Cherny',
  '35E': 'Bill Gates',
  // ...
}
```
## 并集和交集
理解 TypeScript 的**并集（Union，`|`）**和**交集（Intersection，`&`）**，最关键的认知是：**它们和数学集合论的“并/交”正好相反——尤其是在操作对象属性的时候。**

别慌，我们用“门的权限”和“属性的合并”来帮你彻底理清。

### 1. 并集（Union，`|`）—— “或”（二选一）

- **逻辑含义**：`A | B` 表示值**要么是 A，要么是 B**（可以是其中任何一个）。
- **现实类比**：**“门禁卡或者钥匙”**。你手里只要有其中一样东西，就能进门。我不在乎你具体拿的是哪个。
- **类型限制（致命伤）**：因为 TS 不知道你传进来的究竟是 A 还是 B，所以**只能调用 A 和 B 共有的属性/方法**（交集部分）。如果你要调 B 独有的属性，必须先通过 `if` 或 `typeof` 判断具体是哪个（类型收窄）。

```typescript
type A = { name: string; age: number };
type B = { name: string; gender: string };

// 并集：要么是 A，要么是 B
let person: A | B = { name: "Tom", age: 18 }; // ✅ 可以是 A

// ✅ 能调用共有的属性（name）—— 因为无论来的是 A 还是 B，都有 name
console.log(person.name); 

// ❌ 报错：不能直接调用 age 或 gender
// 因为 TS 不确定你现在拿的是 A 还是 B
// console.log(person.age);  // Error

// ✅ 必须通过收窄（收窄）告诉 TS 具体类型
if ('age' in person) {
    console.log(person.age); // 此时 TS 确定是 A
}
```

---

### 2. 交集（Intersection，`&`）—— “且”（必须同时满足）

- **逻辑含义**：`A & B` 表示值**必须同时拥有 A 的所有属性，以及 B 的所有属性**（合并）。
- **现实类比**：**“既是医生又是程序员的人”**。你要找的人必须满足这两个身份的所有要求。
- **类型限制（优势）**：因为值必须同时满足两边，所以**可以调用 A 和 B 的所有属性**（并集）。

```typescript
type A = { name: string; age: number };
type B = { name: string; gender: string };

// 交集：必须同时拥有 A 和 B 的全部属性
let doctorProgrammer: A & B = {
    name: "Alice",
    age: 30,
    gender: "female"
};

// ✅ 可以调用所有属性（因为对象必须全都有）
console.log(doctorProgrammer.name);  // 共有
console.log(doctorProgrammer.age);   // A 独有
console.log(doctorProgrammer.gender);// B 独有
```

---

### 3. 🤯 核心认知反转（面试必考陷阱）

在**数学集合**里：
- **并集 (∪)** 是把两个集合的元素合并（变多了）。
- **交集 (∩)** 是取两个集合重合的部分（变少了）。

但在 **TypeScript 对象类型**里，**刚好反过来**，因为 TS 看的是**“能安全调用的属性数量”**：

| 概念 | 数学直觉 | TypeScript 实际效果（属性维度） | 记忆口诀 |
| :--- | :--- | :--- | :--- |
| **并集 ( `|` )** | 合在一起，变多 | 只能调用**共有属性**，可用属性**变少了** | **“或”代表不确定，只能取公约数** |
| **交集 ( `&` )** | 重复部分，变少 | 拥有**全部属性**，可用属性**变多了** | **“且”代表全都要，全部合并** |

> **总结一句**：在 TS 中，`A | B` 拿到的是属性的“最小公倍数（交集）”，而 `A & B` 拿到的是属性的“总和（并集）”。

---

### 4. ⚠️ 交集的陷阱：冲突属性变为 `never`

如果两个类型有**同名但类型不同**的属性，交集会把它们合并成 **`never`（不可能的类型）**。

```typescript
type X = { id: string };
type Y = { id: number };

// 交集要求 id 既是 string 又是 number，不可能存在这种值
type Z = X & Y; 

// 此时 Z 实际上是 { id: never }
let obj: Z = { id: "123" }; // ❌ Error: 不能将 string 赋给 never
```

这种情况下，该类型基本等同于无解，需要避免这种交叉设计。

---

### 🎯 实战应用场景速查

| 场景 | 用什么 | 原因 |
| :--- | :--- | :--- |
| **API 返回成功或失败**（二选一） | **并集 (`|`)** | `Success | Error`，处理前必须判错。 |
| **合并多个配置对象**（全都要） | **交集 (`&`)** | `ConfigA & ConfigB`，合并成一个完整配置。 |
| **函数参数可以是字符串或数字** | **并集 (`|`)** | `string | number`，用 `typeof` 收窄。 |
| **深拷贝/混入（Mixin）工具** | **交集 (`&`)** | 把多个对象合成一个返回。 |

### 💡 终极记忆法
- **看到 `|`（或）**：心里想 **“二选一，得先验货才能用特产”**。
- **看到 `&`（且）**：心里想 **“强强联合，全家桶直接畅享”**。😄