function greet(name?: string) {
    return `こんにちは、${name || "匿名"}さん`;
}

// 引数を省略して実行すると `name` がないため、
// "こんにちは、匿名さん" が返ってきます。
const greeting_message = greet();
