// @flow
function add(a: number, b: number) {
  return a + b;
}
// 型チェックのエラーが発生する
//add(1, "2");
add(1, 2);
