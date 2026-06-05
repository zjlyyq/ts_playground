# tsconfig.json 说明

对应配置文件：[tsconfig.json](./tsconfig.json)

```json
{
  "compilerOptions": {
    "target": "ES2015",
    "module": "CommonJS",
    "moduleResolution": "Node",
    "strict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true,
    "noEmitOnError": true,
    "outDir": "./dist",
    "sourceMap": true
  },
  "include": ["**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules", "dist"]
}
```

## compilerOptions

### target: ES2015
- 指定编译输出的 JavaScript 语法版本。
- ES2015（ES6）能覆盖大多数基础语法特性，运行环境较新时通常足够。

### module: CommonJS
- 指定输出的模块系统。
- 适用于 Node.js 传统的 `require/module.exports` 生态；与你当前 `package.json` 未声明 `"type": "module"` 的默认行为匹配。

### moduleResolution: Node
- 指定 TypeScript 如何解析 `import`/`require` 的模块路径。
- `Node` 表示按 Node.js 的解析规则（如查找 `node_modules`、处理路径后缀等）。

### 关于为什么没有显式配置 lib
- `lib` 用来指定编译时引入哪些“标准库声明文件”（决定 `Promise`、`Map`、`Set`、以及 DOM 等 API 的类型是否存在）。
- `lib` 不是必填项；不写时，TypeScript 会根据 `target` 自动选择一组默认的 `lib`。
- 一旦显式写了 `lib`，默认那组会被替换；如果漏配（例如忘了 `DOM`），会出现大量类型报错（例如 `window`/`document` 不存在）。
- `lib` 主要影响“类型检查范围”，不直接决定输出的 JavaScript 语法版本；输出语法版本主要由 `target` 决定。
- 典型需要显式配置 `lib` 的场景：想做纯 Node 类型环境（减少 DOM 类型干扰），或需要精确控制包含哪些标准库类型。

### strict: true
- 开启 TypeScript 的严格类型检查集合（例如更严格的空值检查、函数参数检查等）。
- 优点是尽早发现类型问题；缺点是初期可能需要补齐更多类型标注。

### esModuleInterop: true
- 改善 CommonJS 与 ESModule 的互操作体验。
- 常见效果是允许以更自然的写法默认导入某些 CommonJS 包（例如 `import express from "express"`）。

### forceConsistentCasingInFileNames: true
- 强制导入路径的大小写与磁盘实际文件名一致。
- 主要用于避免在大小写不敏感文件系统（macOS 默认）上开发、在大小写敏感环境（Linux CI/服务器）上出错。

### skipLibCheck: true
- 跳过对 `node_modules` 中 `.d.ts` 声明文件的类型检查。
- 能显著减少编译时间，并规避第三方类型声明的噪声报错；代价是可能漏掉少量依赖声明层面的类型问题。

### noEmitOnError: true
- 只要存在类型错误，就不输出编译产物。
- 用于避免生成“已知有问题”的 `dist` 文件，提升构建可靠性。

### outDir: ./dist
- 指定编译输出目录。
- 生成的 `.js`（以及对应的 `.map`）会输出到 `dist/` 下，便于与源代码分离。

### sourceMap: true
- 生成 source map（`.js.map`）。
- 便于在调试时将运行时栈定位回 `.ts` 源文件。

## include / exclude

### include
- `["**/*.ts", "**/*.tsx"]` 表示该目录下所有 TypeScript 文件都参与编译（含子目录）。

### exclude
- `["node_modules", "dist"]` 表示忽略依赖目录与编译输出目录，避免重复扫描与循环编译。

## 使用方式

在该目录执行：

```bash
npx tsc
```

或安装依赖后使用本地 `tsc`：

```bash
./node_modules/.bin/tsc
```
