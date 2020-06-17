### 接口
#### 不使用接口时
```typescript
function printLabel(labeledObj: { label: string }) {
    console.log(labeledObj.label);
}

let testObj = {size: 10, label: "Size 10 Object"};
printLabel(testObj);
```

### 只读属性

![image-20200617181306788](C:\Users\Jialu\AppData\Roaming\Typora\typora-user-images\image-20200617181306788.png)