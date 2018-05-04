// 引数 callback は関数オブジェクトをとり、その関数の引数の型と戻り値の型を指定
function onSuccess(callback: (value: string) => void) {
    return callback("成功！");
}

// ECMAScript 2015 のアロー関数を思い出してください。
// onSuccess() に渡されてるのはアロー関数です。
onSuccess(value => console.log(value));
