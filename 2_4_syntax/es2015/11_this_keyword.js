const person = {
    name: "太郎",
    lazy_hello: function () {
        setTimeout(function () {
            console.log(`hello! ${this.name}さん`);
        }, 1000);
    }
};

// 実際には "hello! さん" と出力されてしまう
person.lazy_hello();
