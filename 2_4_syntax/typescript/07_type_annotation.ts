// 省略可能な引数が先に来ているのでエラーになります
function greet(name?: string, suffix: string) {
    return `こんにちは、${name || "匿名"}${suffix}`;
}
const greeting_message = greet("さん"); // こんにちは、匿名さん
