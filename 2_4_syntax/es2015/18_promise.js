lazy_execute(() => {
    console.log(`こんにちは ${name}さん`);
    lazy_execute(() => {
        console.log("今日の調子はどうですか？");
        lazy_execute(() => {
            console.log("このチャンネルは雑談の場です。");
            lazy_execute(() => {
                // ...
                lazy_execute(() => {
                    // ...
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
