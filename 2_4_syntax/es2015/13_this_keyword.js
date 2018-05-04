const person = {
    name: "太郎",
    lazy_hello: function () {
        setTimeout(() => console.log(`hello! ${this.name}さん`), 1000);
    }
};

// 期待通り "hello! 太郎さん" と出力される
person.lazy_hello();
