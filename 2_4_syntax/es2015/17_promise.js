function lazy_execute(callback, delay) {
    setTimeout(() => callback(), delay);
};

const name = "太郎";
lazy_execute(() => console.log(`こんにちは ${name}さん`), 1000);
