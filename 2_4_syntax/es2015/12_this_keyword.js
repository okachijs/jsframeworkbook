const person = {
    name: "太郎",
    lazy_hello: function () {
        setTimeout(function () {
            console.log(`hello! ${this.name}さん`);
        }.bind(this), 1000);
        // これで person の this が無名関数の this として束縛される
    }
};

// 期待通り "hello! 太郎さん" と出力される
person.lazy_hello();
