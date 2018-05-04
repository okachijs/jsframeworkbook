const name = "太郎";
lazy_execute(() => console.log(`こんにちは ${name}さん`), 2000)
    .then(() => lazy_execute(() => console.log("今日の調子はどうですか？"), 3000))
    .then(() => lazy_execute(() => console.log("このチャンネルは雑談の場です。"), 3000))
    .then(() => lazy_execute(() => console.log("..."), 3000))
    .then(() => lazy_execute(() => console.log("..."), 3000));
