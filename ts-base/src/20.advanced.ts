import { type } from "jquery";

interface Obj_19 {
  a: number,
  b: string,
  c: boolean
}

// Readonly 是一个 TS 内置的泛型接口
type ReadonlyObj_19 = Readonly<Obj_19>

type PickObj_19 = Pick<Obj_19, 'a' | 'b'>

type RecodeObbj_19 = Record<'y' | 'x', Obj_19>;