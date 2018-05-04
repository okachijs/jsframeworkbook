console.log(`${user.name}さんが${channel.name}に入室しました。`)

console.log(`${user.name}さんが
${channel.name}に入室しました。`)

// user.name がない場合に "匿名" という文字列を使用する
console.log(`${user.name||"匿名"}さんが${channel.name}に入室しました。`);
