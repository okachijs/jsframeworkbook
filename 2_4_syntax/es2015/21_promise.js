function lazy_send(message, delay) {
    const length_max = 10;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (message.length > length_max) {
                reject(`メッセージ${length_max}より長いです。`);
            }
            console.log(message);
            resolve("投稿完了");
        }, delay);
    });
};

// このケースでは rejected になる
lazy_send("10文字以上の投稿は失敗します。", 1000)
    .then((value) => console.log("fulfilled: ", value))
    .catch((value) => console.log("rejected: ", value));

// このケースは fulfilled になる
lazy_send("短いのでok", 1000)
    .then((value) => console.log("fulfilled: ", value))
    .catch((value) => console.log("rejected: ", value));
