const evens = [2, 4, 6, 8];

// ES5 以前
const odds5 = evens.map(function (v) { return v + 1 });

// ES2015 のアロー関数
const odds6 = evens.map(v => v + 1);
