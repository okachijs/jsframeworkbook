function lazy_execute(callback, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            callback();
            resolve();
        }, delay);
    });
};
