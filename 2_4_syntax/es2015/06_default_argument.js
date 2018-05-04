function joinChannel(name = "匿名") {
    console.log(`${name}さんが入室しました。`)
}

\\ "匿名さんが入室しました。" と出力される
joinChannel();

\\ "太郎さんが入室しました。" と出力される
joinChannel("太郎");
