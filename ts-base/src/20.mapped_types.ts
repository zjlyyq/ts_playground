interface PersonSubset {
    name?: string;
    age?: number;
    phone?: string
}

// 只读映射
type PersonReadonly = Readonly<PersonSubset>

// 可选隐射
type PersonPartial = Partial<PersonSubset>

// pick 映射
type PickPerson = Pick<PersonSubset, 'name' | 'phone'>

// record 
type RecordPerson = Record<'x' | 'y', PersonSubset>