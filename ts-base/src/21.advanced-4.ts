// 条件类型 T extends U ? X : Y

import { type } from "jquery";

type TypeName<T> = T extends string ? string : 
    T extends number ? number :
    T extends boolean ? boolean :
    T extends undefined ? undefined : 
    T extends Function ? Function : 
    object;


type T1 = TypeName<'1'>;
let s_21: T1 = '1';

type T2 = TypeName<{}>;
let o_21: T2 = {};

type T3 = TypeName<() => ''>;
let f_21: T3 = function() {};