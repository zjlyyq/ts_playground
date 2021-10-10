import { type } from "jquery";

interface Obj_19 {
  a: number,
  b: string,
  c: boolean
}

// Readonly 是一个 TS 内置的泛型接口
type ReadonlyObj_19 = Readonly<Obj_19>