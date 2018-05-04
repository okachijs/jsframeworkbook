// クラス
class GenericClass<T> {
    constructor(public value: T) {}
}

// 引数の型を string として扱う
let obj1 = new GenericClass<string>("文字列");

// インターフェイス
interface GenericInterface<T> {
    value: T;
}

// value プロパティの型を number として扱う
let obj2: GenericInterface<number> = { value: 1 };
