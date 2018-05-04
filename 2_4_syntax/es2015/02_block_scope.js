{
    let x = 1;
    // 同じスコープ内なので参照できる
    console.log(x);
}

// ブロックの外なのでここでは参照できない
console.log(x);
